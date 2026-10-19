// Geometry helpers.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export { mergeGeometries };

// Build an indexed grid. pos(i, j) -> [x, y, z]; uv(i, j, p) -> [u, v].
// Triangles are wound so the face normal follows di x dj (reversed when flip).
export function gridGeometry(nu, nv, pos, uv, flip = false) {
  const P = new Float32Array(nu * nv * 3);
  const U = new Float32Array(nu * nv * 2);
  for (let j = 0; j < nv; j++) {
    for (let i = 0; i < nu; i++) {
      const k = j * nu + i;
      const p = pos(i, j);
      P[k * 3] = p[0]; P[k * 3 + 1] = p[1]; P[k * 3 + 2] = p[2];
      const t = uv ? uv(i, j, p) : [i / (nu - 1), j / (nv - 1)];
      U[k * 2] = t[0]; U[k * 2 + 1] = t[1];
    }
  }
  const idx = [];
  for (let j = 0; j < nv - 1; j++) {
    for (let i = 0; i < nu - 1; i++) {
      const a = j * nu + i, b = a + 1, c = a + nu, d = c + 1;
      if (flip) idx.push(a, d, b, a, c, d);
      else idx.push(a, b, d, a, d, c);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(P, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(U, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// Same grid on both sides of the centreline (pos returns starboard, z >= 0).
export function mirroredGrid(nu, nv, pos, uv, flip = false) {
  const s = gridGeometry(nu, nv, pos, uv, flip);
  const p = gridGeometry(nu, nv, (i, j) => {
    const q = pos(i, j);
    return [q[0], q[1], -q[2]];
  }, uv, !flip);
  return mergeGeometries([s, p]);
}

// A box spanning from point a to point b with the given cross-section.
const _up = new THREE.Vector3(0, 1, 0);
export function beamBetween(a, b, w, h, upHint = _up) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = new THREE.BoxGeometry(len, h, w);
  const x = dir.clone().normalize();
  let z = new THREE.Vector3().crossVectors(x, upHint);
  if (z.lengthSq() < 1e-6) z.set(0, 0, 1);
  z.normalize();
  const y = new THREE.Vector3().crossVectors(z, x);
  const m = new THREE.Matrix4().makeBasis(x, y, z);
  m.setPosition(a.clone().add(b).multiplyScalar(0.5));
  g.applyMatrix4(m);
  return g;
}

// A tapered cylinder from a to b.
export function cylBetween(a, b, r0, r1 = r0, seg = 10) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = dir.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1);
  const q = new THREE.Quaternion().setFromUnitVectors(_up, dir.clone().normalize());
  g.applyQuaternion(q);
  g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
  return g;
}

// A rail with balusters between two points (posts every `step`).
export function balustrade(a, b, height, step = 0.28, railW = 0.14) {
  const parts = [];
  const top = (p) => p.clone().add(new THREE.Vector3(0, height, 0));
  parts.push(beamBetween(top(a), top(b), railW, 0.09));
  const len = a.distanceTo(b);
  const n = Math.max(1, Math.round(len / step));
  for (let i = 0; i <= n; i++) {
    const p = a.clone().lerp(b, i / n);
    const g = new THREE.CylinderGeometry(0.035, 0.05, height, 6);
    g.translate(p.x, p.y + height / 2, p.z);
    parts.push(g);
  }
  return mergeGeometries(parts.map((g) => g.index ? g.toNonIndexed() : g));
}

export function merge(list) {
  const norm = list.map((g) => (g.index ? g.toNonIndexed() : g));
  for (const g of norm) {
    if (!g.attributes.uv) {
      g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
    }
    if (!g.attributes.normal) g.computeVertexNormals();
  }
  return mergeGeometries(norm);
}
