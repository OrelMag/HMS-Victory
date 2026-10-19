// Development check: find ropes and spars that pass through sails, and sails that cut each other.
// Only interior sail cells are tested, so ropes that legitimately end on a sail's edge
// (sheets at the clews, stays along a staysail's luff) are not reported.
import * as THREE from 'three';

const EPS = 1e-7;
const e1 = new THREE.Vector3(), e2 = new THREE.Vector3(), pv = new THREE.Vector3();
const tv = new THREE.Vector3(), qv = new THREE.Vector3(), dir = new THREE.Vector3();

function segTri(a, b, v0, v1, v2) {
  dir.subVectors(b, a);
  e1.subVectors(v1, v0);
  e2.subVectors(v2, v0);
  pv.crossVectors(dir, e2);
  const det = e1.dot(pv);
  if (Math.abs(det) < EPS) return false;
  const inv = 1 / det;
  tv.subVectors(a, v0);
  const u = tv.dot(pv) * inv;
  if (u < 0 || u > 1) return false;
  qv.crossVectors(tv, e1);
  const v = dir.dot(qv) * inv;
  if (v < 0 || u + v > 1) return false;
  const t = e2.dot(qv) * inv;
  return t > 0 && t < 1;
}

// Triangles (body space) of a sail's interior cells.
function sailTris(sail, toBody) {
  const mesh = sail.mesh;
  if (!mesh.visible) return null;
  const m = new THREE.Matrix4().multiplyMatrices(toBody, mesh.matrixWorld);
  const pos = mesh.geometry.attributes.position;
  const NU = sail.NU, NV = sail.NV;
  const P = (i, j) => new THREE.Vector3().fromBufferAttribute(pos, j * NU + i).applyMatrix4(m);
  const tris = [];
  const box = new THREE.Box3();
  const lines = [];
  for (let j = 1; j < NV - 2; j++) for (let i = 1; i < NU - 2; i++) {
    const a = P(i, j), b = P(i + 1, j), c = P(i, j + 1), d = P(i + 1, j + 1);
    tris.push([a, b, d], [a, d, c]);
    box.expandByPoint(a).expandByPoint(b).expandByPoint(c).expandByPoint(d);
    lines.push([a, b], [a, c]);
  }
  return { name: sail.name, tris, box, lines };
}

export function findClashes(ship) {
  ship.root.updateMatrixWorld(true);
  const toBody = new THREE.Matrix4().copy(ship.body.matrixWorld).invert();
  const all = [...ship.sails.square, ...ship.sails.stay, ship.sails.spanker, ...ship.sails.stun];
  const sails = all.map((s) => sailTris(s, toBody)).filter(Boolean);

  // Ropes are built in rig space, which is body space.
  const segs = [];
  for (const R of [ship.rigging.standing, ship.rigging.running, ship.rigging.sailLines]) for (const s of R.segs) segs.push(s);
  // Spars: yards and masts as axis segments.
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const toB = (obj, p) => p.applyMatrix4(new THREE.Matrix4().multiplyMatrices(toBody, obj.matrixWorld));
  for (const m of Object.values(ship.rig.masts)) {
    for (const y of Object.values(m.yards)) {
      segs.push([toB(y.group, V(0, 0, -y.L / 2)), toB(y.group, V(0, 0, y.L / 2)), `${m.name} ${y.name} yard`]);
    }
    const h = m.h;
    segs.push([toB(m.group, V(0, 0, 0)), toB(m.group, V(0, h.lowerHead, 0)), `${m.name} lower mast`]);
    segs.push([toB(m.group, V(m.dTop, h.topmastHeel, 0)), toB(m.group, V(m.dTop, h.topmastHead, 0)), `${m.name} topmast`]);
    segs.push([toB(m.group, V(m.dTg, h.tgHeel, 0)), toB(m.group, V(m.dTg, h.poleHead, 0)), `${m.name} topgallant mast`]);
    // Top platform edges.
    const tl = h.topLen, tw = h.topW / 2, ty = h.topY + 0.2;
    segs.push([toB(m.group, V(-tl * 0.45, ty, -tw)), toB(m.group, V(tl * 0.55, ty, -tw)), `${m.name} top`]);
    segs.push([toB(m.group, V(-tl * 0.45, ty, tw)), toB(m.group, V(tl * 0.55, ty, tw)), `${m.name} top`]);
    segs.push([toB(m.group, V(tl * 0.55, ty, -tw)), toB(m.group, V(tl * 0.55, ty, tw)), `${m.name} top`]);
  }

  const hits = new Map();
  const segBox = new THREE.Box3();
  const note = (a, b) => {
    const k = `${a}  x  ${b}`;
    hits.set(k, (hits.get(k) || 0) + 1);
  };
  for (const [a, b, tag] of segs) {
    segBox.makeEmpty().expandByPoint(a).expandByPoint(b);
    for (const s of sails) {
      if (!segBox.intersectsBox(s.box)) continue;
      for (const [v0, v1, v2] of s.tris) {
        if (segTri(a, b, v0, v1, v2)) { note(tag, s.name); break; }
      }
    }
  }
  // Sail against sail (grid lines of one through the other's surface).
  for (const A of sails) for (const B of sails) {
    if (A === B || !A.box.intersectsBox(B.box)) continue;
    let n = 0;
    for (const [a, b] of A.lines) {
      segBox.makeEmpty().expandByPoint(a).expandByPoint(b);
      if (!segBox.intersectsBox(B.box)) continue;
      for (const [v0, v1, v2] of B.tris) if (segTri(a, b, v0, v1, v2)) { n++; break; }
    }
    if (n && A.name < B.name) note(`sail ${A.name}`, B.name);
  }
  return [...hits.entries()].sort((x, y) => y[1] - x[1]).map(([k, n]) => `${n}\t${k}`);
}
