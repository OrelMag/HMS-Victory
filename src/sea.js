// Ocean: Gerstner waves on a radially dense grid, with matching CPU sampling for ship motion.
import * as THREE from 'three';
import { waterNormalTexture } from './textures.js';
import { halfBreadth } from './config.js';

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

// Water must not show inside the hull when it is cut open: half-breadths of the hull at three
// heights around the waterline, sampled along its length, so the shaders can discard inside it.
const HB_N = 64, HB_X0 = -30, HB_X1 = 30, HB_Y = [-1.2, 0, 1.2];
const hbTable = HB_Y.map((y) => Array.from({ length: HB_N }, (_, i) => halfBreadth(HB_X0 + (i / (HB_N - 1)) * (HB_X1 - HB_X0), y)));
export const HULL_MASK_GLSL = `
uniform mat4 uShipInv; uniform float uHB0[${HB_N}], uHB1[${HB_N}], uHB2[${HB_N}];
bool insideHull(vec3 world) {
  vec3 lp = (uShipInv * vec4(world, 1.0)).xyz;
  float fx = (lp.x - (${HB_X0.toFixed(1)})) / ${(HB_X1 - HB_X0).toFixed(1)} * ${(HB_N - 1).toFixed(1)};
  if (fx <= 0.0 || fx >= ${(HB_N - 1).toFixed(1)}) return false;
  int i = int(floor(fx)); float f = fract(fx);
  float a = mix(uHB0[i], uHB0[i + 1], f), b = mix(uHB1[i], uHB1[i + 1], f), c = mix(uHB2[i], uHB2[i + 1], f);
  float t = clamp((lp.y - (${HB_Y[0].toFixed(1)})) / ${(HB_Y[2] - HB_Y[0]).toFixed(1)}, 0.0, 1.0);
  float hb = t < 0.5 ? mix(a, b, t * 2.0) : mix(b, c, t * 2.0 - 1.0);
  return abs(lp.z) < hb - 0.04;
}`;
export function hullMaskUniforms() {
  return {
    uShipInv: { value: new THREE.Matrix4() },
    uHB0: { value: hbTable[0] }, uHB1: { value: hbTable[1] }, uHB2: { value: hbTable[2] },
  };
}

// GLSL for the surface height (no horizontal drift), for things that float on the sea.
export const SEA_HEIGHT_GLSL = `
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
vec2 seaRot(vec2 d) { return vec2(uWaveRot.x * d.x - uWaveRot.y * d.y, uWaveRot.y * d.x + uWaveRot.x * d.y); }
float seaHeight(vec2 q) {
  vec2 p = q + uOffset;
  float y = 0.0;
${waveData.map((w) => `  y += ${w.A.toFixed(5)} * sin(${w.k.toFixed(5)} * (dot(seaRot(vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)})), p) - ${w.c.toFixed(5)} * uTime));`).join('\n')}
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
      color: '#062a3a', roughness: 0.14, metalness: 0.0, envMap, envMapIntensity: 0.4,
      normalMap, normalScale: new THREE.Vector2(0.09, 0.09),
    });
    this.uniforms = {
      uTime: { value: 0 },
      uOffset: { value: this.offset },
      uWaveScale: { value: 1 },
      uWaveRot: { value: new THREE.Vector2(1, 0) },
      ...hullMaskUniforms(),
    };
    const U = this.uniforms;
    const waveGLSL = waveData.map((w) =>
      `wave(p, vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)}), ${w.k.toFixed(5)}, ${w.A.toFixed(5)} * uWaveScale, ${w.Q.toFixed(5)}, ${w.c.toFixed(5)}, disp, tx, tz);`,
    ).join('\n');
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', `#include <common>
uniform float uTime; uniform vec2 uOffset; uniform float uWaveScale; uniform vec2 uWaveRot;
varying float vCrest; varying vec3 vSeaWorld;
void wave(vec2 p, vec2 d0, float k, float A, float Q, float c, inout vec3 disp, inout vec3 tx, inout vec3 tz) {
  vec2 d = vec2(uWaveRot.x * d0.x - uWaveRot.y * d0.y, uWaveRot.y * d0.x + uWaveRot.x * d0.y);
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
varying float vCrest; varying vec3 vSeaWorld;
${HULL_MASK_GLSL}`)
        .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
if (insideHull(vSeaWorld)) discard;`)
        .replace('#include <color_fragment>', `#include <color_fragment>
float crest = smoothstep(0.95, 1.6, vCrest);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.05, 0.2, 0.24), smoothstep(-0.8, 1.4, vCrest) * 0.22);
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.75, 0.8, 0.8), crest * 0.18);`);
    };
    // Normal map uv needs the scrolling offset too.
    this.normalMap = normalMap;
    this.mesh = new THREE.Mesh(geo, mat);
    // No shadows on the water: real sea shows them only faintly, and a shadow map this size would clip.
    this.mesh.receiveShadow = false;
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

  // Turn the wave field so the main swell runs toward world angle `a` (radians, from +x toward +z).
  setDirection(a) {
    const base = Math.atan2(waveData[0].dz, waveData[0].dx);
    this.rot = a - base;
    this.uniforms.uWaveRot.value.set(Math.cos(this.rot), Math.sin(this.rot));
  }

  // Height of the surface near world (x, z), ignoring the small horizontal drift.
  heightAt(x, z) {
    const px = x + this.offset.x, pz = z + this.offset.y, t = this.time;
    const c = Math.cos(this.rot || 0), s = Math.sin(this.rot || 0);
    let y = 0;
    for (const w of waveData) {
      const dx = c * w.dx - s * w.dz, dz = s * w.dx + c * w.dz;
      y += w.A * this.scale * Math.sin(w.k * (dx * px + dz * pz - w.c * t));
    }
    return y;
  }
}
