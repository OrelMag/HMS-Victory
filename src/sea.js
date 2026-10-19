// Ocean: Gerstner waves on a radially dense grid, with matching CPU sampling for ship motion.
import * as THREE from 'three';
import { waterNormalTexture } from './textures.js';

const G = 9.81;
// [dirX, dirZ, wavelength, amplitude, steepness]
const WAVES = [
  [1.0, 0.35, 64, 0.55, 0.5],
  [0.75, -0.65, 37, 0.32, 0.55],
  [0.25, 1.0, 19, 0.16, 0.6],
  [-0.55, 0.8, 11, 0.08, 0.6],
  [0.9, -0.2, 7, 0.045, 0.5],
];

const waveData = WAVES.map(([dx, dz, L, A, Q]) => {
  const l = Math.hypot(dx, dz);
  const k = (2 * Math.PI) / L;
  return { dx: dx / l, dz: dz / l, k, A, Q: Q / (k * A * WAVES.length), c: Math.sqrt(G / k) };
});

// GLSL for the surface height (no horizontal drift), for things that float on the sea.
export const SEA_HEIGHT_GLSL = `
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale;
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${waveData.map((w) => `  y += ${w.A.toFixed(5)} * sin(${w.k.toFixed(5)} * (dot(vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)}), p) - ${w.c.toFixed(5)} * uTime));`).join('\n')}
  return y * uWaveScale;
}`;

export class Sea {
  constructor(envMap) {
    this.time = 0;
    this.offset = new THREE.Vector2();
    this.scale = 1;
    const N = 420, R = 4000;
    const pos = new Float32Array(N * N * 3);
    const uv = new Float32Array(N * N * 2);
    const m = (s) => Math.sign(s) * Math.pow(Math.abs(s), 2.6) * R;
    for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
      const k = j * N + i;
      const x = m(i / (N - 1) * 2 - 1), z = m(j / (N - 1) * 2 - 1);
      pos[k * 3] = x; pos[k * 3 + 1] = 0; pos[k * 3 + 2] = z;
      uv[k * 2] = x / 70; uv[k * 2 + 1] = z / 70;
    }
    const idx = new Uint32Array((N - 1) * (N - 1) * 6);
    let p = 0;
    for (let j = 0; j < N - 1; j++) for (let i = 0; i < N - 1; i++) {
      const a = j * N + i, b = a + 1, c = a + N, d = c + 1;
      idx[p++] = a; idx[p++] = c; idx[p++] = b;
      idx[p++] = b; idx[p++] = c; idx[p++] = d;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(N * N * 3).fill(0).map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
    geo.setIndex(new THREE.BufferAttribute(idx, 1));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), R * 1.5);

    const normalMap = waterNormalTexture();
    const mat = new THREE.MeshStandardMaterial({
      color: '#0e3946', roughness: 0.07, metalness: 0.0, envMap, envMapIntensity: 1.0,
      normalMap, normalScale: new THREE.Vector2(0.14, 0.14),
    });
    this.uniforms = {
      uTime: { value: 0 },
      uOffset: { value: this.offset },
      uWaveScale: { value: 1 },
    };
    const U = this.uniforms;
    const waveGLSL = waveData.map((w) =>
      `wave(p, vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)}), ${w.k.toFixed(5)}, ${w.A.toFixed(5)} * uWaveScale, ${w.Q.toFixed(5)}, ${w.c.toFixed(5)}, disp, tx, tz);`,
    ).join('\n');
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale;
varying float vCrest; varying vec3 vSeaWorld;
void wave(vec2 p, vec2 d, float k, float A, float Q, float c, inout vec3 disp, inout vec3 tx, inout vec3 tz) {
  float f = k * (dot(d, p) - c * uTime);
  float s = sin(f), co = cos(f);
  disp += vec3(Q * A * d.x * co, A * s, Q * A * d.y * co);
  tx += vec3(-Q * d.x * d.x * k * A * s, d.x * k * A * co, -Q * d.x * d.y * k * A * s);
  tz += vec3(-Q * d.x * d.y * k * A * s, d.y * k * A * co, -Q * d.y * d.y * k * A * s);
}`)
        .replace('#include <beginnormal_vertex>', `
vec2 p = position.xz + uOffset;
vec3 disp = vec3(0.0); vec3 tx = vec3(1.0, 0.0, 0.0); vec3 tz = vec3(0.0, 0.0, 1.0);
float fade = 1.0 - smoothstep(600.0, 2500.0, length(position.xz));
${waveGLSL}
disp *= fade;
vec3 objectNormal = normalize(mix(vec3(0.0, 1.0, 0.0), cross(tz, tx), fade));
vCrest = disp.y;
#ifdef USE_TANGENT
vec3 objectTangent = vec3(tangent.xyz);
#endif`)
        .replace('#include <begin_vertex>', `vec3 transformed = position + disp;
vSeaWorld = transformed;`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
varying float vCrest; varying vec3 vSeaWorld;`)
        .replace('#include <color_fragment>', `#include <color_fragment>
float crest = smoothstep(0.55, 1.15, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.08, 0.32, 0.36), smoothstep(-0.4, 0.9, vCrest) * 0.5);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.85, 0.9, 0.9), crest * 0.35);`);
    };
    // Normal map uv needs the scrolling offset too.
    this.normalMap = normalMap;
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    this.mesh.name = 'sea';
  }

  update(t, shipDistance) {
    this.time = t;
    this.uniforms.uTime.value = t;
    this.offset.set(shipDistance, 0);
    this.normalMap.offset.set((shipDistance / 70 + t * 0.004) % 1, (t * 0.003) % 1);
  }

  setScale(s) {
    this.scale = s;
    this.uniforms.uWaveScale.value = s;
  }

  // Height of the surface near world (x, z), ignoring the small horizontal drift.
  heightAt(x, z) {
    const px = x + this.offset.x, pz = z + this.offset.y, t = this.time;
    let y = 0;
    for (const w of waveData) {
      y += w.A * this.scale * Math.sin(w.k * (w.dx * px + w.dz * pz - w.c * t));
    }
    return y;
  }
}
