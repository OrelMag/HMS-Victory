// Waving flags: ensign, Nelson's vice-admiral's flag, commissioning pennant, union jack.
import * as THREE from 'three';
import { flagTexture } from './textures.js';

const shared = { uTime: { value: 0 }, uWind: { value: 1 } };

export class Flag {
  constructor(kind, w, h, parent, taper = 0) {
    const geo = new THREE.PlaneGeometry(w, h, 24, 6);
    geo.translate(w / 2, -h / 2, 0);
    const mat = new THREE.MeshStandardMaterial({ map: flagTexture(kind), side: THREE.DoubleSide, roughness: 0.85 });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = shared.uTime;
      sh.uniforms.uWind = shared.uWind;
      sh.uniforms.uW = { value: w };
      sh.uniforms.uTaper = { value: taper };
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime, uWind, uW, uTaper;')
        .replace('#include <begin_vertex>', `vec3 transformed = position;
float f = position.x / uW;
transformed.y = (transformed.y + ${(h / 2).toFixed(3)}) * (1.0 - uTaper * f) - ${(h / 2).toFixed(3)};
float droop = (1.0 - uWind) * 0.75;
float wv = sin(position.x * 0.9 - uTime * (3.0 + 4.0 * uWind) + position.y * 0.4) * f * (0.18 + 0.35 * uWind) * uW * 0.12;
transformed.z += wv;
transformed.x *= mix(1.0, 0.55, droop);
transformed.y -= f * droop * uW * 0.6;
transformed.x -= abs(wv) * 0.25;`);
    };
    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    this.mesh.userData.noAO = true;
    parent.add(this.mesh);
  }

  // Place the hoist at p (in parent space) and stream it toward direction dir.
  place(p, dir) {
    this.mesh.position.copy(p);
    this.mesh.rotation.set(0, Math.atan2(-dir.z, dir.x), 0);
  }

  static update(t, wind) {
    shared.uTime.value = t;
    shared.uWind.value = wind;
  }
}
