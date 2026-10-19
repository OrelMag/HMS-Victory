// Deck gear on the weather decks: belaying-pin rails and fife rails with their coiled falls,
// rope coils, ring bolts by the guns, fire buckets, quarterdeck gratings.
import * as THREE from 'three';
import { deckY, halfBreadth, portList, MASTS, QD_FWD, FC_AFT, POOP_FWD, xBow, xStern } from './config.js';
import { merge, cylBetween } from './geom.js';
import { mats } from './materials.js';

const BULWARK = 0.32;

function coilGeometry(r, tube, turns) {
  const parts = [];
  for (let k = 0; k < turns; k++) parts.push(new THREE.TorusGeometry(r - k * tube * 1.6, tube, 5, 18).rotateX(Math.PI / 2).translate(0, tube + k * 0.01, 0));
  return merge(parts);
}

// A coil hanging from a pin: a flattened loop of rope with the tail below.
function hangingCoilGeometry() {
  const parts = [];
  for (let k = 0; k < 4; k++) parts.push(new THREE.TorusGeometry(0.2 - k * 0.012, 0.022, 4, 16).scale(0.85, 1.25, 1).translate(0.01 * k, -0.27, 0.02 * k));
  return merge(parts);
}

export function buildDeckGear() {
  const M = mats();
  const group = new THREE.Group();
  group.name = 'deckGear';
  const items = { rail: [], pin: [], hang: [], coil: [], ring: [], bucket: [], grating: [] };
  const mtx = (x, y, z, ry = 0, sx = 1, sy = 1, sz = 1) => new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), new THREE.Vector3(sx, sy, sz));
  const weatherY = (x) => (x < POOP_FWD ? deckY('poop', x) : deckY('qd', x));

  // Belaying-pin rail along the inside of the bulwark from x0 to x1, at 0.95 m above the deck.
  const pinRail = (x0, x1, side) => {
    const n = Math.max(2, Math.round((x1 - x0) / 0.3));
    const pts = [];
    for (let k = 0; k <= n; k++) {
      const x = x0 + ((x1 - x0) * k) / n;
      const y = weatherY(x) + 0.95;
      pts.push(new THREE.Vector3(x, y, side * (halfBreadth(x, y) - BULWARK - 0.1)));
    }
    for (let k = 0; k < n; k++) {
      const a = pts[k], b = pts[k + 1];
      const len = a.distanceTo(b);
      const ang = Math.atan2(-(b.z - a.z), b.x - a.x);
      items.rail.push(mtx((a.x + b.x) / 2, a.y, (a.z + b.z) / 2, ang, len, 1, 1));
    }
    pts.forEach((p, k) => {
      if (k === 0 || k === n) return;
      items.pin.push(mtx(p.x, p.y, p.z));
      if (k % 3 === 1) items.hang.push(mtx(p.x, p.y, p.z + side * 0.04, side > 0 ? Math.PI / 2 : -Math.PI / 2));
    });
    // Falls coiled down on deck below the rail.
    for (let x = x0 + 0.6; x < x1 - 0.3; x += 2.8) {
      const y = weatherY(x);
      items.coil.push(mtx(x, y + 0.01, side * (halfBreadth(x, y + 0.4) - BULWARK - 0.55), x));
    }
  };
  // Rails between the quarterdeck and forecastle gun ports, and the length of the gangways.
  const qdPorts = portList().filter((p) => p.tier.deck === 'qd').map((p) => p.x).sort((a, b) => a - b);
  const gaps = [];
  for (let i = 0; i < qdPorts.length - 1; i++) {
    const a = qdPorts[i] + 0.6, b = qdPorts[i + 1] - 0.6;
    if (b - a > 0.8 && a > POOP_FWD + 0.3 && b < xBow(8) - 2.5) gaps.push([a, b]);
  }
  gaps.push([QD_FWD + 0.4, FC_AFT - 0.4]);
  gaps.push([qdPorts[qdPorts.length - 1] + 0.6, xBow(8) - 3.2]);
  for (const [a, b] of gaps) for (const side of [1, -1]) pinRail(a, b, side);
  // Poop rail.
  for (const side of [1, -1]) pinRail(xStern(10) + 3.0, POOP_FWD - 0.6, side);

  // Fife rails round the main and fore masts: a square rail on turned stanchions, pins round it.
  const fife = [];
  const fifeAt = (mx, deck) => {
    const y = deckY(deck, mx) + 0.1, r = 0.95, h = 0.85;
    for (const [dx, dz] of [[-r, -r], [-r, r], [r, -r], [r, r], [-r, 0], [r, 0], [0, -r], [0, r]]) {
      fife.push(cylBetween(new THREE.Vector3(mx + dx, y, dz), new THREE.Vector3(mx + dx, y + h, dz), 0.055, 0.055, 8));
    }
    for (const [a, b] of [[[-r, -r], [r, -r]], [[-r, r], [r, r]], [[-r, -r], [-r, r]], [[r, -r], [r, r]]]) {
      const g = new THREE.BoxGeometry(Math.abs(b[0] - a[0]) + 0.16, 0.1, Math.abs(b[1] - a[1]) + 0.16);
      g.translate(mx + (a[0] + b[0]) / 2, y + h, (a[1] + b[1]) / 2);
      fife.push(g);
    }
    for (let k = 0; k < 16; k++) {
      const t = (k / 16) * 4, e = Math.floor(t), f = t - e;
      const c = [[-r, -r], [r, -r], [r, r], [-r, r]];
      const p0 = c[e], p1 = c[(e + 1) % 4];
      const px = mx + p0[0] + (p1[0] - p0[0]) * f, pz = p0[1] + (p1[1] - p0[1]) * f;
      if (f < 0.12 || f > 0.88) continue;
      items.pin.push(mtx(px, y + h, pz));
      if (k % 3 === 0) items.hang.push(mtx(px, y + h, pz, Math.atan2(pz, px - mx) - Math.PI / 2));
    }
    for (const [dx, dz] of [[-1.6, 0.9], [1.5, -1.0], [-1.4, -1.2]]) items.coil.push(mtx(mx + dx, y - 0.09, dz, dx));
  };
  fifeAt(MASTS.main.x, 'qd');
  fifeAt(MASTS.fore.x, 'qd');
  const fifeMesh = new THREE.Mesh(merge(fife), M.darkWood);
  fifeMesh.castShadow = fifeMesh.receiveShadow = true;
  group.add(fifeMesh);

  // Ring bolts in the deck either side of every gun, for the train and side tackles.
  for (const p of portList()) {
    const t = p.tier;
    for (const side of [1, -1]) {
      const d = deckY(t.deck, p.x);
      const z = side * (halfBreadth(p.x, d + 0.5) - (t.deck === 'qd' ? BULWARK : 0) - 0.35);
      for (const dx of [-t.w / 2 - 0.25, t.w / 2 + 0.25]) items.ring.push(mtx(p.x + dx, d + 0.11, z));
      items.ring.push(mtx(p.x, d + 0.11, z - side * (t.len + 0.6)));
    }
  }

  // Leather fire buckets in racks along the poop rails.
  for (const side of [1, -1]) {
    for (let x = -22.9; x < POOP_FWD - 2; x += 0.42) {
      const y = deckY('poop', x) + 0.6;
      items.bucket.push(mtx(x, y, side * (halfBreadth(x, y + 0.3) - BULWARK - 0.12)));
    }
  }

  // Gratings on the quarterdeck, forward of the wheel and abaft the main mast.
  for (const [x, w, d] of [[-11.6, 1.6, 2.2], [-5.4, 1.8, 2.4]]) items.grating.push(mtx(x, deckY('qd', x) + 0.09, 0, 0, w, 1, d));

  // ---- Instanced meshes ----
  const pinGeo = merge([
    new THREE.CylinderGeometry(0.022, 0.03, 0.2, 6).translate(0, 0.12, 0),
    new THREE.SphereGeometry(0.035, 6, 4).translate(0, 0.24, 0),
    new THREE.CylinderGeometry(0.018, 0.018, 0.18, 6).translate(0, -0.05, 0),
  ]);
  const ringGeo = merge([new THREE.TorusGeometry(0.07, 0.014, 4, 12).rotateX(Math.PI / 2), new THREE.CylinderGeometry(0.03, 0.03, 0.02, 6)]);
  const bucketGeo = merge([
    new THREE.CylinderGeometry(0.13, 0.11, 0.3, 10),
    new THREE.TorusGeometry(0.13, 0.012, 4, 12).rotateX(Math.PI / 2).translate(0, 0.15, 0),
    new THREE.TorusGeometry(0.15, 0.01, 4, 12).rotateY(Math.PI / 2).translate(0, 0.2, 0),
  ]);
  const gratingGeo = (() => {
    const parts = [new THREE.BoxGeometry(1.1, 0.16, 1.1)];
    for (let k = -4; k <= 4; k++) {
      parts.push(new THREE.BoxGeometry(0.035, 0.03, 1.0).translate(k * 0.11, 0.09, 0));
      parts.push(new THREE.BoxGeometry(1.0, 0.03, 0.035).translate(0, 0.09, k * 0.11));
    }
    return merge(parts);
  })();
  const bucketMat = new THREE.MeshStandardMaterial({ color: '#2a1d14', roughness: 0.6 });
  const coilMat = new THREE.MeshStandardMaterial({ color: '#6b5a42', roughness: 0.95 });
  const gratingMat = new THREE.MeshStandardMaterial({ color: '#7a6040', roughness: 0.85 });
  const defs = [
    ['rail', new THREE.BoxGeometry(1, 0.11, 0.16), M.darkWood],
    ['pin', pinGeo, M.darkWood],
    ['hang', hangingCoilGeometry(), coilMat],
    ['coil', coilGeometry(0.34, 0.04, 6), coilMat],
    ['ring', ringGeo, M.iron],
    ['bucket', bucketGeo, bucketMat],
    ['grating', gratingGeo, gratingMat],
  ];
  for (const [name, geo, mat] of defs) {
    const list = items[name];
    if (!list.length) continue;
    const mesh = new THREE.InstancedMesh(geo, mat, list.length);
    list.forEach((m, i) => mesh.setMatrixAt(i, m));
    mesh.castShadow = name !== 'ring';
    mesh.receiveShadow = true;
    mesh.name = name === 'grating' || name === 'coil' ? name : `gear-${name}`;
    mesh.frustumCulled = false;
    group.add(mesh);
  }
  return group;
}
