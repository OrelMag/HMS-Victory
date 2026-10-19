// Gun smoke, muzzle flashes and the ship's wake.
import * as THREE from 'three';
import { puffTexture, rng } from './textures.js';
import { halfBreadth, xStern, xBow } from './config.js';
import { SEA_HEIGHT_GLSL } from './sea.js';

const VS = `
attribute vec4 iData; // xyz position, w size
attribute vec4 iColor; // rgb, alpha
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_vertex>
void main() {
  vUv = uv;
  vColor = iColor;
  vec4 mvPosition = viewMatrix * vec4(iData.xyz, 1.0);
  mvPosition.xy += position.xy * iData.w;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;
const FS = `
uniform sampler2D map;
varying vec2 vUv; varying vec4 vColor;
#include <fog_pars_fragment>
void main() {
  vec4 t = texture2D(map, vUv);
  gl_FragColor = vec4(vColor.rgb, t.a * vColor.a);
  if (gl_FragColor.a < 0.003) discard;
  #include <fog_fragment>
}`;

class Particles {
  constructor(scene, max, additive) {
    this.max = max;
    const g = new THREE.InstancedBufferGeometry();
    const q = new THREE.PlaneGeometry(1, 1);
    g.index = q.index;
    g.attributes.position = q.attributes.position;
    g.attributes.uv = q.attributes.uv;
    this.data = new Float32Array(max * 4);
    this.color = new Float32Array(max * 4);
    g.setAttribute('iData', new THREE.InstancedBufferAttribute(this.data, 4).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('iColor', new THREE.InstancedBufferAttribute(this.color, 4).setUsage(THREE.DynamicDrawUsage));
    g.instanceCount = 0;
    this.geo = g;
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { map: { value: puffTexture() } }]),
      vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false, fog: true,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    mat.uniforms.map.value = puffTexture();
    this.mesh = new THREE.Mesh(g, mat);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = additive ? 11 : 10;
    scene.add(this.mesh);
    this.list = [];
  }

  spawn(p) { if (this.list.length < this.max) this.list.push(p); }

  update(dt, camPos) {
    const L = this.list;
    for (let i = L.length - 1; i >= 0; i--) {
      const p = L[i];
      p.age += dt;
      if (p.age >= p.life) { L.splice(i, 1); continue; }
      p.pos.addScaledVector(p.vel, dt);
      p.vel.multiplyScalar(Math.exp(-p.drag * dt));
      p.vel.addScaledVector(p.acc, dt);
    }
    // Sort far-to-near for alpha blending.
    if (camPos) L.sort((a, b) => b.pos.distanceToSquared(camPos) - a.pos.distanceToSquared(camPos));
    L.forEach((p, i) => {
      const t = p.age / p.life;
      this.data[i * 4] = p.pos.x; this.data[i * 4 + 1] = p.pos.y; this.data[i * 4 + 2] = p.pos.z;
      this.data[i * 4 + 3] = p.size0 + (p.size1 - p.size0) * Math.sqrt(t);
      const a = p.alpha * Math.min(1, p.age / (p.fadeIn || 0.0001)) * (1 - t) ** p.fadePow;
      this.color[i * 4] = p.color[0]; this.color[i * 4 + 1] = p.color[1]; this.color[i * 4 + 2] = p.color[2];
      this.color[i * 4 + 3] = a;
    });
    this.geo.instanceCount = L.length;
    this.geo.attributes.iData.needsUpdate = true;
    this.geo.attributes.iColor.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.smoke = new Particles(scene, 1800, false);
    this.flash = new Particles(scene, 200, true);
    this.rand = rng(99);
    this.lights = [];
    for (let i = 0; i < 2; i++) {
      const l = new THREE.PointLight('#ffb060', 0, 60, 1.6);
      scene.add(l);
      this.lights.push({ l, t: 1 });
    }
    this.li = 0;
  }

  // World-space muzzle position and outward direction.
  gunshot(pos, dir, wind) {
    const r = this.rand;
    for (let k = 0; k < 3; k++) {
      this.flash.spawn({
        pos: pos.clone().addScaledVector(dir, 0.6 + k * 0.9), vel: dir.clone().multiplyScalar(14),
        acc: new THREE.Vector3(), drag: 6, age: 0, life: 0.14 + r() * 0.06,
        size0: 2.6 - k * 0.5, size1: 3.6 - k * 0.6, color: [1, 0.62, 0.25], alpha: 1, fadePow: 1,
      });
    }
    for (let k = 0; k < 14; k++) {
      const v = dir.clone().multiplyScalar(10 + r() * 22)
        .add(new THREE.Vector3((r() - 0.5) * 4, (r() - 0.3) * 3, (r() - 0.5) * 4));
      const g = 0.82 + r() * 0.12;
      this.smoke.spawn({
        pos: pos.clone().addScaledVector(dir, 0.5), vel: v, acc: new THREE.Vector3(wind.x, 0.35, wind.z),
        drag: 1.4 + r() * 0.6, age: 0, life: 9 + r() * 7, fadeIn: 0.15,
        size0: 1.2 + r(), size1: 9 + r() * 7, color: [g, g, g * 0.98], alpha: 0.55, fadePow: 1.6,
      });
    }
    const L = this.lights[this.li++ % this.lights.length];
    L.l.position.copy(pos).addScaledVector(dir, 2);
    L.t = 0;
  }

  update(dt, camPos) {
    this.smoke.update(dt, camPos);
    this.flash.update(dt, null);
    for (const L of this.lights) {
      L.t += dt;
      L.l.intensity = L.t < 0.18 ? 900 * (1 - L.t / 0.18) : 0;
    }
  }
}

// Foam around the waterline and a wake trail astern; strength scales with speed.
export class Wake {
  constructor(parent, seaUniforms) {
    const c = document.createElement('canvas');
    c.width = c.height = 256;
    const g = c.getContext('2d');
    const r = rng(41);
    g.fillStyle = 'rgba(0,0,0,0)';
    g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 1400; i++) {
      const x = r() * 256, y = r() * 256, s = 1 + r() * 7;
      g.fillStyle = `rgba(255,255,255,${0.1 + r() * 0.35})`;
      g.beginPath(); g.ellipse(x, y, s * 1.6, s, 0, 0, Math.PI * 2); g.fill();
      for (const [dx, dy] of [[256, 0], [-256, 0], [0, 256], [0, -256]]) {
        g.beginPath(); g.ellipse(x + dx, y + dy, s * 1.6, s, 0, 0, Math.PI * 2); g.fill();
      }
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    this.tex = tex;
    this.uniforms = { uFoam: { value: tex }, uScroll: { value: 0 }, uStrength: { value: 0 } };

    // Strip around the hull at the waterline, wider at the bow.
    const N = 90, rows = 6;
    const pos = [], uv = [], alpha = [], idx = [];
    const outline = [];
    const x0 = xStern(0) + 0.3, x1 = xBow(0);
    for (let i = 0; i < N; i++) outline.push((i / (N - 1)));
    for (const side of [1, -1]) {
      const base = pos.length / 3;
      for (let i = 0; i < N; i++) {
        const u = outline[i];
        const x = x0 + (x1 - x0) * u;
        const hb = halfBreadth(x, 0.05);
        const width = 1.2 + 4.5 * u ** 3;
        for (let j = 0; j < rows; j++) {
          const t = j / (rows - 1);
          pos.push(x + t * 1.2 * u, 0, side * (hb - 0.3 + t * width));
          uv.push(x / 9, t * width / 9 + (side > 0 ? 0 : 0.5));
          alpha.push((1 - t) ** 1.4 * (0.35 + 0.65 * u ** 2));
        }
      }
      for (let i = 0; i < N - 1; i++) for (let j = 0; j < rows - 1; j++) {
        const a = base + i * rows + j, b = a + rows, c2 = a + 1, d = b + 1;
        if (side > 0) idx.push(a, c2, b, b, c2, d); else idx.push(a, b, c2, b, d, c2);
      }
    }
    // Wake trail astern.
    const base = pos.length / 3;
    const W = 40, cols = 7;
    for (let i = 0; i < W; i++) {
      const t = i / (W - 1);
      const x = x0 - t * 220;
      const half = 3 + t * 30;
      for (let j = 0; j < cols; j++) {
        const s = (j / (cols - 1)) * 2 - 1;
        pos.push(x, 0, s * half);
        uv.push(x / 14, s * half / 14);
        alpha.push((1 - t) ** 1.6 * (1 - Math.abs(s) ** 2) * 0.8);
      }
    }
    for (let i = 0; i < W - 1; i++) for (let j = 0; j < cols - 1; j++) {
      const a = base + i * cols + j, b = a + cols, c2 = a + 1, d = b + 1;
      idx.push(a, b, c2, b, d, c2);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('alpha', new THREE.Float32BufferAttribute(alpha, 1));
    geo.setIndex(idx);
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.fog, this.uniforms]),
      vertexShader: `attribute float alpha; varying float vA; varying vec2 vUv;
        ${SEA_HEIGHT_GLSL}
        #include <fog_pars_vertex>
        void main(){ vA = alpha; vUv = uv; vec3 p = position; p.y = seaHeight(p.xz) + 0.07;
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
        }`,
      fragmentShader: `uniform sampler2D uFoam; uniform float uScroll, uStrength; varying float vA; varying vec2 vUv;
        #include <fog_pars_fragment>
        void main(){ float f = texture2D(uFoam, vUv + vec2(uScroll, 0.0)).a;
        float f2 = texture2D(uFoam, vUv * 0.6 + vec2(uScroll * 0.7, 0.31)).a;
        gl_FragColor = vec4(vec3(0.95), (f * 0.7 + f2 * 0.6) * vA * uStrength);
        #include <fog_fragment>
        }`,
      transparent: true, depthWrite: false, fog: true,
      polygonOffset: true, polygonOffsetFactor: -2,
    });
    mat.uniforms.uFoam.value = tex;
    for (const k of ['uTime', 'uOffset', 'uWaveScale']) mat.uniforms[k] = seaUniforms[k];
    this.uniforms = mat.uniforms;
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.renderOrder = 2;
    this.mesh.frustumCulled = false;
    parent.add(this.mesh);
  }

  update(distance, speed) {
    this.uniforms.uScroll.value = (distance / 9) % 1;
    this.uniforms.uStrength.value = Math.min(1, speed / 5) * 0.9 + 0.1;
  }
}
