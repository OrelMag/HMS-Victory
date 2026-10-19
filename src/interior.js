// Internal structure: decks with hatchways, coamings, ladders, beams, pillars, ballast.
import * as THREE from 'three';
import {
  DECK, HATCHES, deckY, halfBreadth, xStern, xBow, QD_FWD, FC_AFT, POOP_FWD, lerp,
} from './config.js';
import { merge, beamBetween, cylBetween } from './geom.js';
import { mats } from './materials.js';
import { ballastTexture } from './textures.js';

const INSET = 0.06; // decks stop just inside the planking

// Inner half-breadth a little above deck level.
const hw = (x, y) => Math.max(0, halfBreadth(x, y + 0.25) - INSET);

// A deck as a flat shape (with hatch holes) bent to the sheer and camber.
export function deckGeometry(name, x0, x1, holes = [], camber = 0.1) {
  const yAt = (x) => deckY(name, x);
  const n = Math.max(8, Math.round((x1 - x0) / 0.6));
  const shape = new THREE.Shape();
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const x = lerp(x0, x1, i / n);
    pts.push([x, hw(x, yAt(x))]);
  }
  shape.moveTo(pts[0][0], -pts[0][1]);
  for (const [x, z] of pts) shape.lineTo(x, z);
  for (let i = pts.length - 1; i >= 0; i--) shape.lineTo(pts[i][0], -pts[i][1]);
  shape.closePath();
  for (const h of holes) {
    const path = new THREE.Path();
    path.moveTo(h.x - h.w / 2, -h.d / 2);
    path.lineTo(h.x - h.w / 2, h.d / 2);
    path.lineTo(h.x + h.w / 2, h.d / 2);
    path.lineTo(h.x + h.w / 2, -h.d / 2);
    path.closePath();
    shape.holes.push(path);
  }
  const g = new THREE.ShapeGeometry(shape, 1);
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getY(i);
    const w = Math.max(0.5, hw(x, yAt(x)));
    p.setXYZ(i, x, yAt(x) + camber * (1 - Math.min(1, (z / w) ** 2)), z);
    uv.setXY(i, x / 8, z / 8);
  }
  g.computeVertexNormals();
  return g;
}

// Which hatches cut through a given deck.
function holesFor(name) {
  return HATCHES.filter((h) => {
    if (name === 'upper') return true;
    if (name === 'orlop') return h.x > -14 && h.x < 15;
    return true;
  });
}

// Inclined ladder from (x, yBottom) up to (x + run, yTop), centred on z.
function ladder(x, z, yBottom, yTop, run, width = 0.8) {
  const parts = [];
  for (const s of [1, -1]) {
    parts.push(beamBetween(new THREE.Vector3(x, yBottom, z + s * width / 2), new THREE.Vector3(x + run, yTop, z + s * width / 2), 0.07, 0.22));
  }
  const steps = Math.round((yTop - yBottom) / 0.24);
  for (let k = 1; k < steps; k++) {
    const t = k / steps;
    const g = new THREE.BoxGeometry(0.22, 0.05, width);
    g.translate(x + run * t, lerp(yBottom, yTop, t), z);
    parts.push(g);
  }
  return parts;
}

export function buildInterior() {
  const M = mats();
  const group = new THREE.Group();
  group.name = 'interior';
  const deckParts = [];
  const coamings = [];
  const ladders = [];

  // Full decks from stern to bow, pierced by the hatchways.
  const levels = [
    ['orlop', -15.5, 22.0],
    ['lower', xStern(DECK.lower) + 0.25, xBow(DECK.lower) - 0.35],
    ['middle', xStern(DECK.middle) + 0.25, xBow(DECK.middle) - 0.35],
    ['upper', xStern(DECK.upper) + 0.6, xBow(DECK.upper) - 0.6],
  ];
  for (const [name, x0, x1] of levels) {
    const holes = holesFor(name);
    deckParts.push(deckGeometry(name, x0, x1, holes));
    for (const h of holes) {
      const y = deckY(name, h.x) + 0.1;
      const hx = h.w / 2 + 0.1, hz = h.d / 2 + 0.1;
      const V = (x, z) => new THREE.Vector3(h.x + x, y + 0.12, z);
      coamings.push(beamBetween(V(-hx, -hz), V(hx, -hz), 0.2, 0.3), beamBetween(V(-hx, hz), V(hx, hz), 0.2, 0.3));
      coamings.push(beamBetween(V(-hx, -hz), V(-hx, hz), 0.2, 0.3, new THREE.Vector3(0, 1, 0)), beamBetween(V(hx, -hz), V(hx, hz), 0.2, 0.3, new THREE.Vector3(0, 1, 0)));
    }
  }
  // Ladders up through each ladderway, from every deck to the one above.
  const stack = ['orlop', 'lower', 'middle', 'upper'];
  for (let i = 0; i < stack.length - 1; i++) {
    for (const h of HATCHES.filter((q) => q.ladder)) {
      if (stack[i] === 'orlop' && !(h.x > -14 && h.x < 15)) continue;
      const top = deckY(stack[i + 1], h.x);
      const bottom = deckY(stack[i], h.x - 1.4);
      ladders.push(...ladder(h.x - h.w / 2 - 1.2, 0, bottom, top, h.w * 0.55));
    }
  }
  // Companion ladders up to the quarterdeck and forecastle at their breaks.
  for (const s of [1, -1]) {
    ladders.push(...ladder(QD_FWD + 2.2, s * 2.6, deckY('upper', QD_FWD + 2.2), deckY('qd', QD_FWD), -2.0, 0.7));
    ladders.push(...ladder(FC_AFT - 2.2, s * 2.6, deckY('upper', FC_AFT - 2.2), deckY('qd', FC_AFT), 2.0, 0.7));
  }

  const deckMesh = new THREE.Mesh(merge(deckParts), M.deck);
  deckMesh.receiveShadow = true;
  deckMesh.name = 'decks';
  group.add(deckMesh);
  const cm = new THREE.Mesh(merge(coamings), M.darkWood);
  cm.receiveShadow = cm.castShadow = true;
  group.add(cm);
  const lm = new THREE.Mesh(merge(ladders), M.darkWood);
  lm.castShadow = true;
  group.add(lm);

  // Beams under every deck, about 1.25 m apart; hatchways are framed between them.
  const beams = [];
  const underDecks = [
    ['orlop', -15.3, 21.8], ['lower', -26.5, 27.5], ['middle', -26.8, 27.6], ['upper', -27.0, 27.6],
    ['qd', -27.5, QD_FWD], ['qd', FC_AFT, 27.8], ['poop', -28.2, POOP_FWD],
  ];
  for (const [name, x0, x1] of underDecks) {
    for (let x = x0 + 0.4; x < x1; x += 1.25) {
      if (HATCHES.some((h) => Math.abs(x - h.x) < h.w / 2 + 0.05)) continue;
      const y = deckY(name, x) - 0.17;
      const w = hw(x, y - 0.2);
      if (w < 0.6) continue;
      beams.push([x, y, w]);
    }
  }
  const bm = new THREE.InstancedMesh(new THREE.BoxGeometry(0.3, 0.3, 1), M.darkWood, beams.length);
  const mtx = new THREE.Matrix4();
  beams.forEach(([x, y, w], i) => {
    mtx.makeScale(1, 1, 2 * w).setPosition(x, y - 0.15, 0);
    bm.setMatrixAt(i, mtx);
  });
  bm.castShadow = bm.receiveShadow = true;
  bm.name = 'beams';
  group.add(bm);

  // Pillars (stanchions) along the centreline between decks.
  const pillars = [];
  const pairs = [['orlop', 'lower'], ['lower', 'middle'], ['middle', 'upper']];
  for (const [lo, hi] of pairs) {
    for (let x = -20; x < 20; x += 2.5) {
      if (HATCHES.some((h) => Math.abs(x - h.x) < h.w / 2 + 0.3)) continue;
      if (lo === 'orlop' && (x < -14 || x > 15)) continue;
      pillars.push(cylBetween(new THREE.Vector3(x, deckY(lo, x), 0), new THREE.Vector3(x, deckY(hi, x) - 0.45, 0), 0.11, 0.11, 8));
    }
  }
  const pm = new THREE.Mesh(merge(pillars), M.darkWood);
  pm.castShadow = true;
  group.add(pm);

  // Shingle ballast levelled in the bottom of the hold.
  {
    const y = -5.3;
    const shape = new THREE.Shape();
    const xs = [];
    for (let x = -21; x <= 20; x += 0.8) xs.push(x);
    shape.moveTo(xs[0], -halfBreadth(xs[0], y));
    for (const x of xs) shape.lineTo(x, Math.max(0.2, halfBreadth(x, y) - 0.05));
    for (let i = xs.length - 1; i >= 0; i--) shape.lineTo(xs[i], -Math.max(0.2, halfBreadth(xs[i], y) - 0.05));
    const g = new THREE.ShapeGeometry(shape);
    g.rotateX(Math.PI / 2);
    g.translate(0, y, 0);
    const uv = g.attributes.uv, p = g.attributes.position;
    for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / 4, p.getZ(i) / 4);
    const bal = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ map: ballastTexture(), roughness: 1, side: THREE.DoubleSide }));
    bal.receiveShadow = true;
    bal.name = 'ballast';
    group.add(bal);
  }
  return group;
}
