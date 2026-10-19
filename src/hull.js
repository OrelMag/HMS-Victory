// Hull: planking, stern, bulwarks, decks, head, galleries, hammock nettings.
import * as THREE from 'three';
import {
  KEEL, WING, DECK, QD_FWD, FC_AFT, POOP_FWD, sheer, deckY, railTop, xBow, xStern,
  bSec, wShape, wEnd, halfBreadth, texU, texV, smoothstep, lerp,
} from './config.js';
import { gridGeometry, mirroredGrid, beamBetween, cylBetween, balustrade, merge } from './geom.js';
import { hullTextures, sternTexture, STERN_H0, STERN_H1, COLORS, windowStripTexture } from './textures.js';
import { mats } from './materials.js';

const NU = 220, NV = 120;
const BULWARK = 0.32;

// Parametric hull point for normalised length s and height fraction t.
function uOf(s) { return 0.45 * s + 0.55 * (0.5 - 0.5 * Math.cos(Math.PI * s)); }
export function hullPoint(s, t) {
  const u = uOf(s);
  let h = KEEL, x = 0;
  for (let k = 0; k < 5; k++) {
    x = xStern(h) + u * (xBow(h) - xStern(h));
    h = KEEL + t * (railTop(x) - KEEL);
  }
  return [x, h, bSec(h) * wShape(u, h)];
}

function weatherDeckY(x) {
  if (x < POOP_FWD) return deckY('poop', x);
  return deckY('qd', x);
}

function bulwarkBottom(x) {
  if (x > QD_FWD + 0.2 && x < FC_AFT - 0.2) return deckY('upper', x);
  return weatherDeckY(x);
}

export function buildHull() {
  const M = mats();
  const group = new THREE.Group();
  group.name = 'hull';
  const tex = hullTextures();

  // ---- Outer planking ----
  const hullMat = new THREE.MeshStandardMaterial({
    map: tex.map, roughnessMap: tex.metalRough, metalnessMap: tex.metalRough,
    roughness: 1, metalness: 1,
  });
  const pts = [];
  for (let j = 0; j < NV; j++) for (let i = 0; i < NU; i++) pts.push(hullPoint(i / (NU - 1), j / (NV - 1)));
  const at = (i, j) => pts[j * NU + i];
  const outer = mirroredGrid(NU, NV, at, (i, j, p) => [texU(p[0]), texV(p[0], p[1])]);
  const outerMesh = new THREE.Mesh(outer, hullMat);
  outerMesh.castShadow = outerMesh.receiveShadow = true;
  outerMesh.name = 'planking';
  group.add(outerMesh);

  // ---- Stern face (transom, counter and windows) ----
  const rows = [];
  for (let j = 0; j < NV; j++) {
    const p = at(0, j);
    if (p[2] > 0.01 || (j + 1 < NV && at(0, j + 1)[2] > 0.01)) rows.push(p);
  }
  const NK = 48;
  const widthAt = (h) => bSec(h) * wEnd(h);
  const sternMat = new THREE.MeshStandardMaterial({ map: sternTexture(widthAt), roughness: 0.6 });
  const stern = gridGeometry(NK, rows.length, (k, j) => {
    const [x, h, w] = rows[j];
    const z = lerp(-w, w, k / (NK - 1));
    const bulge = 0.45 * smoothstep(1.0, 3.0, h) * (1 - (w > 0 ? (z / w) ** 2 : 1));
    return [x - bulge, h, z];
  }, (k, j) => [k / (NK - 1), (rows[j][1] - STERN_H0) / (STERN_H1 - STERN_H0)]);
  const sternMesh = new THREE.Mesh(stern, sternMat);
  sternMesh.castShadow = sternMesh.receiveShadow = true;
  group.add(sternMesh);

  // ---- Inner bulwarks and rail cap ----
  const topRow = [];
  for (let i = 0; i < NU; i++) {
    const p = at(i, NV - 1);
    if (p[2] - BULWARK > 0.06) topRow.push(p);
  }
  const NB = 10;
  const inner = mirroredGrid(topRow.length, NB, (i, j) => {
    const x = topRow[i][0];
    const yt = topRow[i][1];
    const y = lerp(bulwarkBottom(x) - 0.05, yt, j / (NB - 1));
    return [x, y, Math.max(0.05, halfBreadth(x, y) - BULWARK)];
  }, (i, j) => [topRow[i][0] / 4, j / (NB - 1)], true);
  const innerMesh = new THREE.Mesh(inner, M.red);
  innerMesh.receiveShadow = true;
  group.add(innerMesh);

  const cap = mirroredGrid(topRow.length, 2, (i, j) => {
    const [x, y, z] = topRow[i];
    return j === 0 ? [x, y + 0.01, z + 0.04] : [x, y + 0.01, Math.max(0.05, halfBreadth(x, y) - BULWARK - 0.03)];
  });
  group.add(new THREE.Mesh(cap, M.black));

  // Inner face of the stern above the poop deck.
  const xsT = topRow[0][0];
  const yP = deckY('poop', xsT);
  const yT = topRow[0][1];
  const sInner = gridGeometry(12, 4, (k, j) => {
    const y = lerp(yP, yT, j / 3);
    const w = Math.max(0.1, halfBreadth(xsT + 0.4, y) - BULWARK);
    return [xStern(y) + 0.35, y, lerp(-w, w, k / 11)];
  }, null, true);
  group.add(new THREE.Mesh(sInner, M.red));

  // ---- Decks ----
  const deckGeoms = [];
  const deck = (name, x0, x1, zFn, camber = 0.12) => {
    const nx = Math.max(4, Math.round((x1 - x0) / 0.8)), nz = 10;
    deckGeoms.push(gridGeometry(nx, nz, (i, j) => {
      const x = lerp(x0, x1, i / (nx - 1));
      const y0 = deckY(name, x);
      const hw = Math.max(0.05, halfBreadth(x, y0 + 0.4) - BULWARK);
      const [za, zb] = zFn(hw);
      const z = lerp(za, zb, j / (nz - 1));
      return [x, y0 + camber * (1 - (z / hw) ** 2), z];
    }, (i, j, p) => [p[0] / 8, p[2] / 8], true));
  };
  const full = (hw) => [-hw, hw];
  const gw = 2.5;
  deck('upper', xStern(DECK.upper) + 0.6, xBow(DECK.upper) - 0.6, full);
  deck('qd', xStern(DECK.qd) + 0.4, QD_FWD, full);
  deck('qd', FC_AFT, xBow(DECK.qd) - 0.4, full);
  deck('qd', QD_FWD, FC_AFT, (hw) => [hw - gw, hw], 0.0);
  deck('qd', QD_FWD, FC_AFT, (hw) => [-hw, -hw + gw], 0.0);
  deck('poop', xStern(DECK.poop) + 0.4, POOP_FWD, full);
  const deckMesh = new THREE.Mesh(merge(deckGeoms), M.deck);
  deckMesh.receiveShadow = true;
  deckMesh.castShadow = true;
  deckMesh.name = 'weatherDecks';
  group.add(deckMesh);

  // Deck edges facing the open waist, plus the breastworks.
  const edges = [];
  const wallX = (x, yA, yB, inset = 0) => {
    const hw = halfBreadth(x, yB) - BULWARK - inset;
    edges.push(gridGeometry(2, 2, (i, j) => [x, j ? yB : yA, i ? hw : -hw]));
  };
  wallX(QD_FWD, deckY('upper', QD_FWD), deckY('qd', QD_FWD) + 0.12);
  wallX(FC_AFT, deckY('upper', FC_AFT), deckY('qd', FC_AFT) + 0.12);
  // Inner edges of the gangways.
  for (const s of [1, -1]) {
    const n = 16;
    edges.push(gridGeometry(n, 2, (i, j) => {
      const x = lerp(QD_FWD, FC_AFT, i / (n - 1));
      const y0 = deckY('qd', x);
      const hw = halfBreadth(x, y0 + 0.4) - BULWARK - gw;
      return [x, j ? y0 + 0.02 : y0 - 0.35, s * hw];
    }, null, s < 0));
  }
  const edgeGeo = merge(edges);
  const edgeMat = M.red.clone();
  edgeMat.side = THREE.DoubleSide;
  group.add(new THREE.Mesh(edgeGeo, edgeMat));

  // Poop front bulkhead with the captain's cabin windows and doors.
  {
    const x = POOP_FWD + 0.05;
    const y0 = deckY('qd', x), y1 = deckY('poop', x) + 0.05;
    const hw = halfBreadth(x, y1) - BULWARK;
    const t = windowStripTexture();
    t.repeat.set(hw * 2 / 3.2, 1);
    const m = new THREE.MeshStandardMaterial({ map: t, roughness: 0.6 });
    const g = gridGeometry(2, 2, (i, j) => [x, j ? y1 : y0, i ? -hw : hw], (i, j) => [i, j]);
    group.add(new THREE.Mesh(g, m));
  }

  // Breast rails along the deck breaks.
  const rails = [];
  const railAcross = (x, deckName, h = 1.0) => {
    const y = deckY(deckName, x) + 0.1;
    const hw = halfBreadth(x, y) - BULWARK - 0.1;
    rails.push(balustrade(new THREE.Vector3(x, y, -hw), new THREE.Vector3(x, y, hw), h));
  };
  railAcross(QD_FWD - 0.1, 'qd');
  railAcross(FC_AFT + 0.1, 'qd');
  railAcross(POOP_FWD - 0.1, 'poop');
  // Gangway inner rails.
  for (const s of [1, -1]) {
    const pts = [];
    for (let k = 0; k <= 6; k++) {
      const x = lerp(QD_FWD, FC_AFT, k / 6);
      const y = deckY('qd', x);
      pts.push(new THREE.Vector3(x, y, s * (halfBreadth(x, y + 0.4) - BULWARK - gw + 0.08)));
    }
    for (let k = 0; k < 6; k++) rails.push(balustrade(pts[k], pts[k + 1], 0.95, 0.5, 0.1));
  }
  const railMesh = new THREE.Mesh(merge(rails), M.darkWood);
  railMesh.castShadow = true;
  group.add(railMesh);

  // Skid beams over the waist for the boats.
  const skids = [];
  for (const x of [3.6, 7.0, 10.4, 13.8]) {
    const y = deckY('qd', x) + 0.2;
    const hw = halfBreadth(x, y) - BULWARK - gw + 0.2;
    skids.push(beamBetween(new THREE.Vector3(x, y, -hw), new THREE.Vector3(x, y, hw), 0.28, 0.3));
  }
  const skidMesh = new THREE.Mesh(merge(skids), M.darkWood);
  skidMesh.castShadow = true;
  group.add(skidMesh);

  // ---- Hammock nettings along the rails ----
  {
    const xs0 = -25.2, xs1 = 25.0, n = 140;
    const hm = M.hammock;
    for (const s of [1, -1]) {
      const prof = [[-0.24, 0], [-0.26, 0.42], [-0.18, 0.56], [0.18, 0.56], [0.26, 0.42], [0.24, 0]];
      const g = gridGeometry(n, prof.length, (i, j) => {
        const x = lerp(xs0, xs1, i / (n - 1));
        const y = railTop(x) + 0.02;
        const zc = halfBreadth(x, y) - BULWARK / 2;
        const [dz, dy] = prof[j];
        return [x, y + dy, s * (zc + dz)];
      }, (i, j) => [lerp(xs0, xs1, i / (n - 1)) / 2.5, j / (prof.length - 1)], s > 0);
      const mesh = new THREE.Mesh(g, hm);
      mesh.castShadow = true;
      group.add(mesh);
    }
  }

  // ---- Keel, stem, sternpost and rudder ----
  {
    const stemPts = [];
    for (let k = 0; k <= 24; k++) {
      const h = lerp(KEEL, railTop(28.5) - 0.3, k / 24);
      stemPts.push(new THREE.Vector3(xBow(h) + 0.08, h, 0));
    }
    const stem = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(stemPts), 48, 0.26, 6, false);
    group.add(new THREE.Mesh(stem, M.black));

    const rs = new THREE.Shape();
    const top = 5.2;
    rs.moveTo(xStern(KEEL), KEEL);
    rs.lineTo(xStern(top), top);
    rs.lineTo(xStern(top) - 1.0, top);
    rs.lineTo(xStern(WING) - 1.35, WING);
    rs.lineTo(xStern(KEEL) - 1.9, KEEL + 0.3);
    rs.closePath();
    const rg = new THREE.ExtrudeGeometry(rs, { depth: 0.5, bevelEnabled: false });
    rg.translate(0, 0, -0.25);
    const rudder = new THREE.Mesh(rg, M.black);
    rudder.castShadow = true;
    group.add(rudder);
  }

  // ---- Head: knee, rails, figurehead, catheads ----
  group.add(buildHead());

  // ---- Quarter galleries ----
  group.add(buildQuarterGalleries());

  return group;
}

function buildHead() {
  const M = mats();
  const g = new THREE.Group();
  g.name = 'head';
  const figX = 33.0, figY = deckY('upper', 30) + 1.4;

  // Knee of the head (side profile extruded).
  const s = new THREE.Shape();
  const hA = -2.2, hB = figY - 0.2;
  s.moveTo(xBow(hA), hA);
  for (let k = 1; k <= 10; k++) {
    const h = lerp(hA, hB, k / 10);
    s.lineTo(xBow(h) - 0.05, h);
  }
  s.lineTo(figX - 0.4, figY + 0.1);
  s.quadraticCurveTo(figX + 0.2, figY - 1.6, figX - 1.0, figY - 3.6);
  s.quadraticCurveTo(29.8, -0.2, xBow(hA) + 0.4, hA);
  s.closePath();
  const knee = new THREE.ExtrudeGeometry(s, { depth: 0.5, bevelEnabled: true, bevelSize: 0.05, bevelThickness: 0.05, bevelSegments: 1 });
  knee.translate(0, 0, -0.25);
  const kneeMesh = new THREE.Mesh(knee, M.black);
  kneeMesh.castShadow = true;
  g.add(kneeMesh);

  // Trailboard carving (ochre) along the knee.
  const tb = new THREE.Shape();
  tb.moveTo(xBow(figY - 2.5) + 0.2, figY - 2.5);
  tb.quadraticCurveTo(figX - 1.3, figY - 1.0, figX - 0.6, figY - 0.3);
  tb.lineTo(figX - 0.9, figY - 0.9);
  tb.quadraticCurveTo(figX - 2.2, figY - 2.3, xBow(figY - 3.2) + 0.3, figY - 3.2);
  tb.closePath();
  const tbg = new THREE.ExtrudeGeometry(tb, { depth: 0.62, bevelEnabled: false });
  tbg.translate(0, 0, -0.31);
  g.add(new THREE.Mesh(tbg, M.ochre));

  // Head rails sweeping from the bows to the figurehead.
  const railGeo = [];
  for (const side of [1, -1]) {
    for (let r = 0; r < 3; r++) {
      const xb = 26.0 - r * 0.25;
      const yb = deckY('upper', xb) + 0.8 + r * 0.75;
      const zb = halfBreadth(xb, yb) + 0.05;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(xb, yb, side * zb),
        new THREE.Vector3(29.4, yb - 0.6 - r * 0.15, side * (1.6 - r * 0.15)),
        new THREE.Vector3(31.6, figY - 1.2 - r * 0.25 + r * 0.6, side * 0.75),
        new THREE.Vector3(figX - 0.45, figY - 0.6 + r * 0.35, side * 0.22),
      ]);
      railGeo.push(new THREE.TubeGeometry(curve, 24, 0.075, 6, false));
    }
  }
  const rails = new THREE.Mesh(merge(railGeo), M.ochre);
  rails.castShadow = true;
  g.add(rails);

  // Head gratings (platform between the rails).
  const grat = gridGeometry(6, 6, (i, j) => {
    const x = lerp(28.9, 31.6, i / 5);
    const w = lerp(2.2, 0.6, i / 5);
    return [x, figY - 1.9 + (i / 5) * 0.4, lerp(-w, w, j / 5)];
  }, null, true);
  g.add(new THREE.Mesh(grat, M.darkWood));

  // Figurehead: the royal arms supported by two cherubs, crowned.
  const fig = new THREE.Group();
  fig.position.set(figX, figY + 0.5, 0);
  fig.rotation.z = -0.35;
  const shield = new THREE.Mesh(new THREE.SphereGeometry(0.7, 20, 14), M.gold);
  shield.scale.set(0.35, 1.0, 0.75);
  fig.add(shield);
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.32, 0.4, 12), M.gold);
  crown.position.set(0.05, 0.95, 0);
  fig.add(crown);
  const orb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), M.gold);
  orb.position.set(0.05, 1.28, 0);
  fig.add(orb);
  for (const side of [1, -1]) {
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.45, 4, 10), M.gold);
    body.position.set(-0.1, -0.1, side * 0.62);
    body.rotation.x = side * 0.3;
    fig.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), M.gold);
    head.position.set(-0.05, 0.42, side * 0.7);
    fig.add(head);
    const wing = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), M.gold);
    wing.scale.set(0.15, 0.7, 0.45);
    wing.position.set(-0.35, 0.15, side * 0.85);
    fig.add(wing);
  }
  fig.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.add(fig);

  // Catheads.
  for (const side of [1, -1]) {
    const x = 25.6, y = deckY('qd', x) + 0.55;
    const z = halfBreadth(x, y) - 0.4;
    const a = new THREE.Vector3(x - 0.6, y, side * (z - 0.6));
    const b = new THREE.Vector3(x + 1.4, y + 0.25, side * (z + 1.9));
    const m = new THREE.Mesh(beamBetween(a, b, 0.42, 0.42), M.black);
    m.castShadow = true;
    g.add(m);
    const face = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.05, 12), M.gold);
    face.position.copy(b);
    face.lookAt(b.clone().add(b.clone().sub(a)));
    face.rotateX(Math.PI / 2);
    g.add(face);
  }

  // Hawse holes.
  for (const side of [1, -1]) {
    for (const dx of [0, 0.75]) {
      const x = 26.9 + dx, y = deckY('middle', x) + 0.9;
      const z = halfBreadth(x, y);
      const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.1, 14), M.iron);
      const hole = new THREE.Mesh(new THREE.CircleGeometry(0.17, 14), new THREE.MeshBasicMaterial({ color: '#050403' }));
      const n = new THREE.Vector3(halfBreadth(x - 0.2, y) - halfBreadth(x + 0.2, y), 0, side * 0.4).normalize();
      ring.position.set(x, y, side * z);
      ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);
      hole.position.set(x, y, side * (z + 0.06)).addScaledVector(n, 0.02);
      hole.lookAt(hole.position.clone().add(n));
      g.add(ring, hole);
    }
  }
  return g;
}

function buildQuarterGalleries() {
  const M = mats();
  const g = new THREE.Group();
  g.name = 'quarterGalleries';
  const x0 = -27.3, x1 = -22.4;
  const hs = sheer(-25);
  const hBot = DECK.middle + hs + 0.15, hTop = DECK.qd + hs - 0.1;
  const hDrop = hBot - 2.6, hDome = hTop + 0.9;
  const depth = 0.85;

  // Texture: two tiers of windows between ochre bands, carved drop and dome.
  const c = document.createElement('canvas');
  c.width = 512; c.height = 512;
  const cx = c.getContext('2d');
  const V = (h) => (hDome - h) / (hDome - hDrop) * 512;
  cx.fillStyle = COLORS.ochre;
  cx.fillRect(0, 0, 512, 512);
  cx.fillStyle = COLORS.black;
  cx.fillRect(0, V(hBot - 0.3), 512, V(hDrop) - V(hBot - 0.3));
  for (const [a, b] of [[DECK.middle + hs + 0.45, DECK.middle + hs + 1.6], [DECK.upper + hs + 0.45, DECK.upper + hs + 1.6]]) {
    for (let i = 0; i < 5; i++) {
      const x = 20 + i * 98;
      cx.fillStyle = '#e7dcc0';
      cx.fillRect(x, V(b), 78, V(a) - V(b));
      cx.fillStyle = '#26323e';
      for (let r = 0; r < 3; r++) for (let q = 0; q < 2; q++) {
        cx.fillRect(x + 5 + q * 36, V(b) + 5 + r * (V(a) - V(b) - 10) / 3, 32, (V(a) - V(b) - 10) / 3 - 5);
      }
    }
  }
  cx.strokeStyle = COLORS.gold;
  cx.lineWidth = 4;
  for (let k = 0; k < 6; k++) {
    cx.beginPath();
    cx.arc(256, V(hDrop + 0.6) - k * 20, 40 + k * 18, 0, Math.PI, true);
    cx.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 });

  const env = (h) => {
    if (h < hBot) { const t = (h - hDrop) / (hBot - hDrop); return Math.sin(t * Math.PI / 2) ** 1.3; }
    if (h > hTop) { const t = (hDome - h) / (hDome - hTop); return Math.sqrt(Math.max(0, t)); }
    return 1;
  };
  const NX = 24, NH = 40;
  for (const side of [1, -1]) {
    const geo = gridGeometry(NX, NH, (i, j) => {
      const h = lerp(hDrop, hDome, j / (NH - 1));
      const e = env(h);
      // Drop narrows toward a point; the dome curves in.
      const t = i / (NX - 1);
      const xm = (x0 + x1) / 2, half = (x1 - x0) / 2 * (0.25 + 0.75 * Math.min(1, e * 1.4));
      const x = xm + (t * 2 - 1) * half;
      const bx = Math.sin(t * Math.PI) ** 0.45;
      const z = halfBreadth(x, h) + depth * e * bx;
      return [x, h, side * z];
    }, (i, j) => [i / (NX - 1), j / (NH - 1)], side < 0);
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = true;
    g.add(m);
  }
  return g;
}
