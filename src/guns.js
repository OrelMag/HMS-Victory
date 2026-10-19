// Guns, carriages and port lids. Lids swing open and guns run out; broadside with recoil.
import * as THREE from 'three';
import { portList, halfBreadth, deckY } from './config.js';
import { mats } from './materials.js';
import { merge } from './geom.js';
import { Ropes } from './rigging.js';

// Outward hull basis at a point on the side (side = +1 starboard, -1 port).
export function sideBasis(x, y, side) {
  const e = 0.05;
  const z = halfBreadth(x, y);
  const dzdx = (halfBreadth(x + e, y) - halfBreadth(x - e, y)) / (2 * e);
  const dzdy = (halfBreadth(x, y + e) - halfBreadth(x, y - e)) / (2 * e);
  // Outward normal of the surface |z| = halfBreadth(x, y).
  const n = new THREE.Vector3(-dzdx, -dzdy, side).normalize();
  const a = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), n).normalize();
  const up = new THREE.Vector3().crossVectors(n, a).normalize();
  return { p: new THREE.Vector3(x, y, side * z), n, a, up };
}

function barrelGeometry(len, bore) {
  const R = bore * 2.1; // breech radius
  const pts = [
    [0, -0.32 * len / 3], [R * 0.35, -0.3 * len / 3], [R * 0.4, -0.22 * len / 3], [R * 0.2, -0.16 * len / 3],
    [R * 0.95, -0.1 * len / 3], [R, 0], [R * 1.06, 0.02 * len], [R * 0.98, 0.04 * len], [R * 0.92, 0.38 * len],
    [R * 0.98, 0.4 * len], [R * 0.86, 0.42 * len], [R * 0.72, 0.9 * len], [R * 0.82, 0.95 * len], [R * 0.78, len],
    [bore, len], [bore, len * 0.7],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(pts, 14);
  g.rotateX(Math.PI / 2); // along +z
  // Trunnions.
  const tr = new THREE.CylinderGeometry(R * 0.3, R * 0.3, R * 2.8, 8);
  tr.rotateZ(Math.PI / 2);
  tr.translate(0, 0, 0.42 * len);
  return merge([g, tr]);
}

// 68-pounder carronade: short, thick barrel with a flared muzzle and a loop beneath.
function carronadeGeometry(len, bore) {
  const R = bore * 1.65;
  const pts = [
    [0, -0.1], [R * 0.5, -0.09], [R * 0.75, -0.04], [R * 0.95, 0.05], [R, 0.25 * len], [R * 0.92, 0.6 * len],
    [R * 0.86, 0.82 * len], [R * 1.05, 0.9 * len], [R * 1.08, len], [bore, len], [bore, len * 0.55],
  ].map(([r, y]) => new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(pts, 16);
  g.rotateX(Math.PI / 2);
  const loop = new THREE.BoxGeometry(R * 0.5, R * 0.9, R * 0.9);
  loop.translate(0, -R * 1.05, 0.45 * len);
  return merge([g, loop]);
}

// Carronade slide: a bed on which the gun recoils, pivoting at the port.
function slideGeometry(len, bore) {
  const parts = [];
  const slide = new THREE.BoxGeometry(bore * 3.2, bore * 1.0, len * 1.5);
  slide.translate(0, bore * 2.4, len * 0.75);
  parts.push(slide);
  const bed = new THREE.BoxGeometry(bore * 3.6, bore * 1.6, len * 1.3);
  bed.translate(0, bore * 0.95, len * 0.7);
  parts.push(bed);
  for (const s of [1, -1]) {
    const wh = new THREE.CylinderGeometry(bore * 0.9, bore * 0.9, bore * 0.6, 10);
    wh.rotateZ(Math.PI / 2);
    wh.translate(s * bore * 2.0, bore * 0.9, len * 0.15);
    parts.push(wh);
  }
  return merge(parts);
}

function carriageGeometry(len, bore) {
  const w = bore * 6.2, L = len * 0.5;
  const parts = [];
  for (const s of [1, -1]) {
    const cheek = new THREE.Shape();
    cheek.moveTo(0, 0);
    cheek.lineTo(L, 0);
    cheek.lineTo(L, bore * 5.2);
    cheek.lineTo(L * 0.62, bore * 5.2);
    cheek.lineTo(L * 0.55, bore * 3.8);
    cheek.lineTo(L * 0.3, bore * 3.4);
    cheek.lineTo(L * 0.22, bore * 2.4);
    cheek.lineTo(0, bore * 2.2);
    cheek.closePath();
    const g = new THREE.ExtrudeGeometry(cheek, { depth: bore * 0.9, bevelEnabled: false });
    g.rotateY(-Math.PI / 2);
    g.translate(s * w / 2 + bore * 0.45, 0, 0);
    parts.push(g);
  }
  const bed = new THREE.BoxGeometry(w, bore * 0.8, L * 0.95);
  bed.translate(0, bore * 1.4, L / 2);
  parts.push(bed);
  for (const zz of [L * 0.12, L * 0.85]) {
    const axle = new THREE.BoxGeometry(w * 1.25, bore * 1.1, bore * 1.4);
    axle.translate(0, bore * 1.4, zz);
    parts.push(axle);
    for (const s of [1, -1]) {
      const wh = new THREE.CylinderGeometry(bore * 1.5, bore * 1.5, bore * 0.7, 12);
      wh.rotateZ(Math.PI / 2);
      wh.translate(s * w * 0.62, bore * 1.5, zz);
      parts.push(wh);
    }
  }
  return merge(parts);
}

export class Guns {
  constructor(parent) {
    const M = mats();
    this.group = new THREE.Group();
    this.group.name = 'guns';
    parent.add(this.group);
    this.ports = [];
    for (const p of portList()) {
      for (const side of [1, -1]) {
        const b = sideBasis(p.x, p.y, side);
        // Guns point square out of the port (horizontal).
        const out = new THREE.Vector3(b.n.x, 0, b.n.z).normalize();
        this.ports.push({ ...p, side, basis: b, out, recoil: 0, fireAt: -1 });
      }
    }
    // Instanced barrels & carriages by tier.
    this.byTier = new Map();
    for (const port of this.ports) {
      const key = port.tier.name;
      if (!this.byTier.has(key)) this.byTier.set(key, []);
      this.byTier.get(key).push(port);
    }
    this.barrels = [];
    this.carriages = [];
    for (const [key, list] of this.byTier) {
      const t = list[0].tier;
      const bm = new THREE.InstancedMesh(t.carronade ? carronadeGeometry(t.len, t.bore) : barrelGeometry(t.len, t.bore), M.iron, list.length);
      bm.castShadow = true;
      bm.frustumCulled = false;
      const cm = new THREE.InstancedMesh(t.carronade ? slideGeometry(t.len, t.bore) : carriageGeometry(t.len, t.bore), M.carriage, list.length);
      cm.castShadow = true;
      cm.receiveShadow = true;
      cm.frustumCulled = false;
      this.group.add(bm, cm);
      this.barrels.push({ mesh: bm, list });
      this.carriages.push({ mesh: cm, list });
    }
    // Port lids: unit box, outer face black, inner face red.
    this.lidPorts = this.ports.filter((p) => p.tier.lid);
    const lidGeo = new THREE.BoxGeometry(1, 1, 1);
    lidGeo.translate(0, -0.5, 0.5);
    this.lids = new THREE.InstancedMesh(lidGeo, [M.black, M.black, M.black, M.black, M.black, M.inside], this.lidPorts.length);
    this.lids.castShadow = true;
    this.lids.frustumCulled = false;
    this.group.add(this.lids);
    // Iron hinge straps and a lifting ring on the outside of each lid (same transforms as the lids).
    const hp = [];
    for (const x of [-0.28, 0.28]) {
      hp.push(new THREE.BoxGeometry(0.07, 0.92, 0.3).translate(x, -0.48, 1.12));
      hp.push(new THREE.CylinderGeometry(0.045, 0.045, 0.16, 6).rotateZ(Math.PI / 2).translate(x, 0.0, 1.1));
    }
    hp.push(new THREE.BoxGeometry(0.14, 0.08, 0.5).translate(0, -0.86, 1.2));
    this.hinges = new THREE.InstancedMesh(merge(hp), M.iron, this.lidPorts.length);
    this.hinges.frustumCulled = false;
    this.group.add(this.hinges);
    // Port tackles: the lids are hauled up by ropes led through the side above the port.
    this.lidRopes = new Ropes(this.group, M.rope, this.lidPorts.length * 2);
    this.lidRopes.mesh.castShadow = false;
    // Breeching ropes: from ringbolts either side of each port to the cascabel of the gun.
    this.breeching = new Ropes(this.group, M.rope, this.ports.length * 6);
    this.breeching.mesh.castShadow = false;
    this._m = new THREE.Matrix4();
    this._b = new THREE.Matrix4();
    this._r = new THREE.Matrix4();
    this._s = new THREE.Matrix4();
    this.apply(0, 0);
  }

  // open: 0..1 lid angle, runOut: 0..1 guns run out.
  apply(open, runOut) {
    const m = this._m, B = this._b, Rm = this._r, S = this._s;
    this.lidPorts.forEach((p, i) => {
      const { a, up, n, p: c } = p.basis;
      const t = p.tier;
      const pivot = c.clone().addScaledVector(up, t.h / 2 + 0.04).addScaledVector(n, 0.02);
      B.makeBasis(a, up, n).setPosition(pivot);
      Rm.makeRotationX(-open * 1.45);
      S.makeScale(t.w + 0.12, t.h + 0.1, 0.11);
      m.copy(B).multiply(Rm).multiply(S);
      this.lids.setMatrixAt(i, m);
      this.hinges.setMatrixAt(i, m);
    });
    this.lids.instanceMatrix.needsUpdate = true;
    this.hinges.instanceMatrix.needsUpdate = true;
    const LR = this.lidRopes;
    LR.begin();
    if (open > 0.05) {
      const corner = new THREE.Vector3();
      this.lidPorts.forEach((p, i) => {
        this.lids.getMatrixAt(i, m);
        const { a, up, n, p: c } = p.basis;
        for (const s of [-0.32, 0.32]) {
          corner.set(s, -0.92, 1.0).applyMatrix4(m);
          const hole = c.clone().addScaledVector(up, p.tier.h / 2 + 0.42).addScaledVector(a, s * p.tier.w).addScaledVector(n, 0.03);
          LR.add(corner, hole, 0.018);
        }
      });
    }
    LR.end();

    const q = new THREE.Quaternion(), pos = new THREE.Vector3(), one = new THREE.Vector3(1, 1, 1);
    const fwd = new THREE.Vector3(0, 0, 1);
    for (const { mesh, list } of this.barrels) {
      list.forEach((p, i) => {
        const t = p.tier;
        q.setFromUnitVectors(fwd, p.out);
        const deck = deckY(t.deck, p.x);
        const surf = p.basis.p.clone();
        // Muzzle offset from the hull surface: run out pokes ~0.7 m outboard.
        const muzzleOut = -0.9 + runOut * 1.6 - p.recoil * 1.3;
        pos.copy(surf).addScaledVector(p.out, muzzleOut - t.len);
        pos.y = p.y - 0.02;
        mesh.setMatrixAt(i, m.compose(pos, q, one));
      });
      mesh.instanceMatrix.needsUpdate = true;
    }
    for (const { mesh, list } of this.carriages) {
      list.forEach((p, i) => {
        const t = p.tier;
        q.setFromUnitVectors(fwd, p.out);
        const surf = p.basis.p.clone();
        const muzzleOut = -0.9 + runOut * 1.6 - p.recoil * 1.3;
        pos.copy(surf).addScaledVector(p.out, muzzleOut - t.len * (t.carronade ? 1.2 : 0.88));
        pos.y = deckY(t.deck, p.x) + 0.02;
        mesh.setMatrixAt(i, m.compose(pos, q, one));
      });
      mesh.instanceMatrix.needsUpdate = true;
    }
    this.updateBreeching(runOut);
  }

  updateBreeching(runOut) {
    const R = this.breeching;
    R.begin();
    for (const p of this.ports) {
      const t = p.tier;
      if (t.carronade) continue;
      const out = -0.9 + runOut * 1.6 - p.recoil * 1.3;
      const breech = p.basis.p.clone().addScaledVector(p.out, out - t.len - 0.1).setY(p.y - 0.02);
      for (const s of [1, -1]) {
        const ring = p.basis.p.clone().addScaledVector(p.basis.a, s * (t.w / 2 + 0.28)).addScaledVector(p.basis.n, -0.04);
        ring.y = p.y - 0.25;
        R.addSag(ring, breech, 0.028, 0.06, 3);
      }
    }
    R.end();
  }

  muzzle(p, runOut) {
    const out = -0.9 + runOut * 1.6;
    return p.basis.p.clone().addScaledVector(p.out, out + 0.1).setY(p.y);
  }
}
