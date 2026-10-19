// Furnishing: props drawn as instanced copies (casks, hammocks, tables, chests, shot...),
// placed deck by deck after the room layout.
import * as THREE from 'three';
import { DECK, HATCHES, deckY, halfBreadth, lerp, portList, TIERS, MASTS } from './config.js';
import { merge } from './geom.js';

// ---------- Prop library (each prop is one geometry with vertex colours) ----------
function paint(g, hex) {
  const geo = g.index ? g.toNonIndexed() : g;
  const c = new THREE.Color(hex);
  const n = geo.attributes.position.count;
  const a = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { a[i * 3] = c.r; a[i * 3 + 1] = c.g; a[i * 3 + 2] = c.b; }
  geo.setAttribute('color', new THREE.BufferAttribute(a, 3));
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  return geo;
}
const box = (w, h, d, x, y, z, hex) => paint(new THREE.BoxGeometry(w, h, d).translate(x, y, z), hex);
const cyl = (r0, r1, h, x, y, z, hex, seg = 10) => paint(new THREE.CylinderGeometry(r1, r0, h, seg).translate(x, y, z), hex);

const WOOD = '#8a6a44', DARK = '#5a4330', OAK = '#a0805a', IRON = '#2c2e30', CANVAS = '#a89a7c', COPPER = '#a8643c';

// A cask lying along x, resting on y = 0.
function cask(L, R, hoops = IRON, wood = WOOD) {
  const prof = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    prof.push(new THREE.Vector2(R * (0.82 + 0.18 * Math.sin(Math.PI * t)), (t - 0.5) * L));
  }
  const body = paint(new THREE.LatheGeometry(prof, 14).rotateZ(Math.PI / 2).translate(0, R, 0), wood);
  const parts = [body];
  for (const t of [0.12, 0.3, 0.7, 0.88]) {
    const r = R * (0.82 + 0.18 * Math.sin(Math.PI * t)) + 0.01;
    parts.push(paint(new THREE.CylinderGeometry(r, r, 0.035, 14, 1, true).rotateZ(Math.PI / 2).translate((t - 0.5) * L, R, 0), hoops));
  }
  for (const s of [1, -1]) parts.push(paint(new THREE.CircleGeometry(R * 0.82, 14).rotateY(s * Math.PI / 2).translate(s * L / 2, R, 0), DARK));
  return merge(parts);
}
// A cask standing upright.
function upright(L, R, hoops, wood) { return cask(L, R, hoops, wood).rotateZ(Math.PI / 2).translate(R, L / 2 - R, 0); }

const PROPS = {
  leaguer: () => cask(1.6, 0.52),
  butt: () => cask(1.3, 0.42),
  hogshead: () => cask(1.0, 0.36),
  powder: () => upright(0.6, 0.22, COPPER, OAK),
  chest: () => merge([box(0.9, 0.42, 0.45, 0, 0.21, 0, '#6b4a2e'), box(0.92, 0.05, 0.47, 0, 0.44, 0, '#4a3220'), box(0.12, 0.08, 0.02, 0, 0.36, 0.235, IRON)]),
  sack: () => paint(new THREE.SphereGeometry(0.32, 10, 8).scale(1.2, 0.8, 0.8).translate(0, 0.25, 0), '#b8a57e'),
  bench: () => merge([box(1.9, 0.06, 0.28, 0, 0.45, 0, OAK), box(0.06, 0.42, 0.24, -0.8, 0.21, 0, DARK), box(0.06, 0.42, 0.24, 0.8, 0.21, 0, DARK)]),
  // Mess table along z (inboard), its outer end at z = 0 against the side.
  messTable: () => merge([box(0.75, 0.06, 1.9, 0, 0.78, 0.95, OAK), box(0.06, 0.75, 0.06, 0, 0.38, 1.85, DARK), paint(new THREE.CylinderGeometry(0.012, 0.012, 1.0).translate(0, 1.3, 1.85), '#6b5a40')]),
  table: () => merge([box(1.6, 0.06, 0.9, 0, 0.76, 0, '#7a5232'), ...[[-0.7, -0.38], [0.7, -0.38], [-0.7, 0.38], [0.7, 0.38]].map(([x, z]) => box(0.06, 0.74, 0.06, x, 0.37, z, '#5a3c22'))]),
  chair: () => merge([box(0.42, 0.05, 0.42, 0, 0.46, 0, '#6b4528'), box(0.42, 0.5, 0.05, 0, 0.72, -0.19, '#6b4528'),
    ...[[-0.18, -0.18], [0.18, -0.18], [-0.18, 0.18], [0.18, 0.18]].map(([x, z]) => box(0.04, 0.46, 0.04, x, 0.23, z, '#4a3018'))]),
  desk: () => merge([box(1.1, 0.75, 0.6, 0, 0.375, 0, '#6b4528'), box(1.12, 0.06, 0.64, 0, 0.78, 0, '#4a3018'), box(0.9, 0.3, 0.15, 0, 0.95, -0.2, '#5a3a20')]),
  settee: () => merge([box(2.2, 0.42, 0.6, 0, 0.21, 0, '#5a3a20'), box(2.2, 0.12, 0.6, 0, 0.48, 0, '#2a4a6a'), box(2.2, 0.5, 0.1, 0, 0.75, -0.26, '#2a4a6a')]),
  // Hammock slung along x, top at y = 0 (hung from a beam).
  hammock: () => merge([paint(new THREE.SphereGeometry(0.5, 12, 6).scale(1.8, 0.32, 0.36).translate(0, -0.45, 0), CANVAS),
    paint(new THREE.CylinderGeometry(0.01, 0.01, 0.5).rotateZ(0.9).translate(-1.05, -0.2, 0), '#8a7556'),
    paint(new THREE.CylinderGeometry(0.01, 0.01, 0.5).rotateZ(-0.9).translate(1.05, -0.2, 0), '#8a7556')]),
  // Cot: a framed canvas bed hung from the beams (top at y = 0).
  cot: () => merge([box(1.9, 0.35, 0.7, 0, -0.75, 0, '#cfc3a4'), box(1.95, 0.05, 0.75, 0, -0.56, 0, '#6b4a2e'),
    ...[[-0.9, -0.3], [0.9, -0.3], [-0.9, 0.3], [0.9, 0.3]].map(([x, z]) => paint(new THREE.CylinderGeometry(0.01, 0.01, 0.6).translate(x, -0.28, z), '#8a7556'))]),
  coil: () => merge([0, 1, 2, 3].map((k) => paint(new THREE.TorusGeometry(0.95 - k * 0.1, 0.12, 6, 24).rotateX(Math.PI / 2).translate(0, 0.13 + k * 0.24, 0), '#6b5a40'))),
  ropeCoil: () => merge([0, 1, 2].map((k) => paint(new THREE.TorusGeometry(0.4, 0.07, 5, 16).rotateX(Math.PI / 2).translate(0, 0.07 + k * 0.13, 0), '#8a7556'))),
  sailBundle: () => paint(new THREE.CapsuleGeometry(0.3, 2.4, 4, 8).rotateZ(Math.PI / 2).translate(0, 0.3, 0), '#d0c5a8'),
  shotPile: () => {
    const parts = [];
    for (let l = 0; l < 3; l++) for (let i = 0; i < 4 - l; i++) for (let j = 0; j < 4 - l; j++) {
      parts.push(paint(new THREE.SphereGeometry(0.08, 8, 6).translate((i - (3 - l) / 2) * 0.16, 0.08 + l * 0.13, (j - (3 - l) / 2) * 0.16), IRON));
    }
    return merge(parts);
  },
  // Shot garland: a rack along x against the side holding a row of round shot.
  garland: () => merge([box(1.4, 0.12, 0.22, 0, 0.06, 0, DARK), ...[0, 1, 2, 3, 4, 5, 6, 7].map((k) => paint(new THREE.SphereGeometry(0.08, 8, 6).translate(-0.6 + k * 0.17, 0.16, 0), IRON))]),
  bucket: () => cyl(0.16, 0.2, 0.32, 0, 0.16, 0, '#5a4330'),
  coop: () => merge([box(1.2, 0.6, 0.6, 0, 0.3, 0, '#7a6040'), ...[0, 1, 2, 3, 4, 5].map((k) => box(0.03, 0.5, 0.62, -0.5 + k * 0.2, 0.32, 0, '#3a2a18'))]),
  shelf: () => merge([box(0.4, 1.6, 1.8, 0, 0.8, 0, '#6b4a2e'), ...[0.4, 0.8, 1.2].map((y) => box(0.38, 0.04, 1.76, 0.02, y, 0, '#5a3c22'))]),
  bin: () => merge([box(1.4, 0.9, 1.0, 0, 0.45, 0, '#7a5a38'), box(1.42, 0.05, 1.02, 0, 0.9, 0, '#5a3c22')]),
  workbench: () => merge([box(2.2, 0.1, 0.7, 0, 0.85, 0, OAK), box(0.1, 0.8, 0.6, -1.0, 0.4, 0, DARK), box(0.1, 0.8, 0.6, 1.0, 0.4, 0, DARK), box(1.6, 0.18, 0.18, 0.2, 0.09, 0.15, '#9a7a50')]),
  // Brodie stove: iron firehearth with oven doors, coppers on top and a flue.
  stove: () => merge([box(2.1, 1.25, 1.5, 0, 0.62, 0, '#1e1f21'), box(2.2, 0.08, 1.6, 0, 1.28, 0, '#2c2e30'),
    box(0.5, 0.45, 0.04, -0.5, 0.55, 0.77, '#3a3c3e'), box(0.5, 0.45, 0.04, 0.3, 0.55, 0.77, '#3a3c3e'), box(0.6, 0.25, 0.04, 0.3, 1.0, 0.77, '#7a2a10'),
    cyl(0.32, 0.32, 0.55, -0.5, 1.6, -0.2, COPPER, 14), cyl(0.28, 0.28, 0.5, 0.35, 1.58, -0.25, COPPER, 14),
    box(0.45, 1.2, 0.45, 0.6, 2.0, 0.35, '#1e1f21'), box(2.6, 0.12, 2.0, 0, 0.06, 0, '#8a8478')]),
  pumpCase: () => merge([cyl(0.22, 0.22, 1.1, 0, 0.55, 0, '#5a4330', 12), cyl(0.26, 0.26, 0.12, 0, 1.1, 0, IRON, 12)]),
  pumpWinch: () => merge([cyl(0.05, 0.05, 4.6, 0, 1.15, 0, IRON).rotateX(Math.PI / 2), box(0.12, 1.2, 0.12, 0, 0.6, -2.2, DARK), box(0.12, 1.2, 0.12, 0, 0.6, 2.2, DARK),
    box(0.06, 0.06, 1.2, 0.45, 1.15, -1.0, '#8a6a44'), box(0.06, 0.06, 1.2, -0.45, 1.15, 1.0, '#8a6a44')]),
  bitts: () => merge([box(0.5, 2.0, 0.5, 0, 1.0, -1.1, '#6b4a2e'), box(0.5, 2.0, 0.5, 0, 1.0, 1.1, '#6b4a2e'), box(0.45, 0.45, 2.8, 0.05, 1.2, 0, '#5a3c22')]),
  lantern: () => merge([cyl(0.12, 0.1, 0.32, 0, -0.35, 0, '#ffd890', 8), cyl(0.14, 0.08, 0.1, 0, -0.14, 0, '#3a2a18', 8), paint(new THREE.CylinderGeometry(0.01, 0.01, 0.12).translate(0, -0.05, 0), '#3a2a18')]),
  cartridgeRack: () => merge([box(0.35, 1.4, 1.6, 0, 0.7, 0, '#6b4a2e'), ...[0.35, 0.75, 1.15].flatMap((y) => [0, 1, 2, 3, 4, 5].map((k) => paint(new THREE.CylinderGeometry(0.07, 0.07, 0.3, 8).rotateZ(Math.PI / 2).translate(0.05, y + 0.08, -0.6 + k * 0.24), '#e8dcc0')))]),
  timber: () => merge([box(3, 0.25, 0.25, 0, 0.13, -0.3, '#9a7a50'), box(3, 0.25, 0.25, 0, 0.13, 0.0, '#8a6a44'), box(2.6, 0.25, 0.25, 0, 0.38, -0.15, '#9a7a50')]),
  block: () => merge([box(0.3, 0.42, 0.18, 0, 0.21, 0, '#6b4a2e'), cyl(0.04, 0.04, 0.2, 0, 0.21, 0, IRON).rotateX(Math.PI / 2)]),
  tub: () => cyl(0.3, 0.34, 0.35, 0, 0.18, 0, '#6b4a2e', 12),
  plate: () => paint(new THREE.CylinderGeometry(0.11, 0.1, 0.02, 10).translate(0, 0.01, 0), '#9a9a90'),
  globe: () => merge([paint(new THREE.SphereGeometry(0.22, 14, 10).translate(0, 1.0, 0), '#c8b88a'), cyl(0.04, 0.12, 0.8, 0, 0.4, 0, '#5a3a20')]),
};

// ---------- Placement ----------
// Struck down into the hold when the ship clears for action (only on the gun decks).
const CLEARABLE = new Set(['messTable', 'bench', 'plate', 'chest', 'tub', 'table', 'chair', 'desk', 'settee', 'globe', 'cot', 'hammock', 'bucket']);
const GUN_DECKS = new Set(['lower', 'middle', 'upper', 'qd']);
const DECK_BELOW = { middle: 'lower', upper: 'middle', qd: 'upper', poop: 'qd', lower: 'orlop' };

class Placer {
  constructor() { this.items = {}; this.deck = null; this._q = new THREE.Quaternion(); }
  add(prop, x, y, z, rotY = 0, s = 1) {
    const m = new THREE.Matrix4().compose(new THREE.Vector3(x, y, z),
      this._q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rotY).clone(), new THREE.Vector3(s, s, s));
    m.clearable = CLEARABLE.has(prop) && GUN_DECKS.has(this.deck);
    (this.items[prop] ||= []).push(m);
  }
}

const halfIn = (x, y) => halfBreadth(x, y + 0.6) - 0.15;
// Height of a deck surface at (x, z), including the camber.
export function floor(deck, x, z) {
  if (deck === 'hold') return -5.3;
  const y = deckY(deck, x);
  const w = Math.max(0.5, halfBreadth(x, y + 0.25) - 0.06);
  return y + 0.1 * (1 - Math.min(1, (z / w) ** 2));
}
const beamUnder = (deckAbove, x) => deckY(deckAbove, x) - 0.47;
const nearHatch = (x, pad = 0.6) => HATCHES.some((h) => Math.abs(x - h.x) < h.w / 2 + pad);
const nearMast = (x, pad = 1.2) => Object.values(MASTS).some((m) => Math.abs(x - m.x) < pad);

export function buildFurnishing(fittings) {
  const P = new Placer();
  const put = (prop, deck, x, z, rot = 0, lift = 0) => { P.deck = deck; P.add(prop, x, floor(deck, x, z) + lift, z, rot); };
  const hang = (prop, deckAbove, x, z, rot = 0) => { P.deck = DECK_BELOW[deckAbove]; P.add(prop, x, beamUnder(deckAbove, x), z, rot); };

  // ---- Gun decks: messes between the guns, shot garlands along the side ----
  const ports = portList();
  const tierOf = (name) => TIERS.find((t) => t.name === name);
  for (const [tier, deck, above, x0, x1] of [['lower', 'lower', 'middle', -22.6, 18], ['middle', 'middle', 'upper', -15, 15.5], ['upper', 'upper', 'qd', -13.8, 20.5]]) {
    const t = tierOf(tier);
    const xs = ports.filter((p) => p.tier === t).map((p) => p.x);
    for (let i = 0; i < xs.length - 1; i++) {
      const x = (xs[i] + xs[i + 1]) / 2;
      if (x < x0 || x > x1 || nearHatch(x, 0.2)) continue;
      for (const side of [1, -1]) {
        const zs = side * (halfIn(x, deckY(deck, x)) - 0.05);
        // Table hung from the side with its inboard end on a rope from the beam; benches each side.
        P.deck = deck;
        P.add('messTable', x, floor(deck, x, zs), zs, side > 0 ? Math.PI : 0);
        put('bench', deck, x - 0.6, zs - side * 1.0, Math.PI / 2);
        put('bench', deck, x + 0.6, zs - side * 1.0, Math.PI / 2);
        put('plate', deck, x - 0.15, zs - side * 0.6, 0, 0.81);
        put('plate', deck, x + 0.15, zs - side * 1.3, 0, 0.81);
        if ((i + (side > 0 ? 0 : 1)) % 2 === 0) put('chest', deck, x - 0.95, zs - side * 0.35, Math.PI / 2);
        if (i % 3 === 0) put('tub', deck, x + 0.95, zs - side * 1.9);
        // Shot garland on the side, under the port sills.
        P.deck = null;
        P.add('garland', xs[i] + 1.5, floor(deck, x, zs) + 0.02, zs - side * 0.12, 0);
      }
    }
  }
  // Hammocks slung forward on the lower deck (the watch below asleep), 14 inches apart.
  const overHatch = (x, z) => HATCHES.some((h) => Math.abs(x - h.x) < h.w / 2 + 1.0 && Math.abs(z) < h.d / 2 + 0.3);
  for (let x = 7.4; x < 20; x += 2.05) {
    if (nearMast(x, 1.3)) continue;
    const y = deckY('lower', x);
    const w = halfIn(x, y) - 0.9;
    for (let z = -w; z <= w; z += 0.36) {
      if (Math.abs(z) < 0.35 || overHatch(x, z)) continue;
      hang('hammock', 'middle', x, z);
    }
  }
  // Lanterns down the centreline of every deck below the weather decks.
  for (const [deck, above, x0, x1] of [['lower', 'middle', -22, 22], ['middle', 'upper', -14, 18], ['upper', 'qd', -12, 20], ['orlop', 'lower', -24, 24]]) {
    for (let x = x0; x <= x1; x += 4.5) if (!nearHatch(x, 0.3)) hang('lantern', above, x + 0.6, 0.9);
  }

  // ---- Lower deck ----
  // Chain pumps either side of the mainmast, worked by long winch handles.
  const mx = MASTS.main.x;
  for (const side of [1, -1]) {
    put('pumpCase', 'lower', mx + 1.2, side * 1.5); put('pumpCase', 'lower', mx - 1.2, side * 1.5);
    put('pumpWinch', 'lower', mx, side * 1.5, Math.PI / 2);
  }
  put('bitts', 'lower', 20.6, 0);
  // Gunroom: table and chests aft; the tiller sweeps overhead.
  put('table', 'lower', -25.4, 0, Math.PI / 2);
  for (const z of [-0.9, 0.9]) for (const dx of [-0.5, 0.5]) put('chair', 'lower', -25.4 + dx, z, z > 0 ? Math.PI : 0);
  put('chest', 'lower', -24.2, 4.6); put('chest', 'lower', -24.2, -4.6);

  // ---- Middle deck ----
  put('stove', 'middle', 20.2, 0, Math.PI);
  put('shelf', 'middle', 17.0, -1.3, Math.PI / 2); put('shelf', 'middle', 17.0, 1.3, -Math.PI / 2);
  put('coop', 'middle', 23.6, -2.2); put('coop', 'middle', 23.6, 2.2);
  put('tub', 'middle', 18.8, -1.9); put('bucket', 'middle', 18.8, 2.0);
  // Wardroom: long table aft over the rudder head, chairs either side.
  for (const x of [-27.0, -25.4, -23.8, -22.2]) {
    put('table', 'middle', x, 0, 0);
    for (const z of [-0.75, 0.75]) put('chair', 'middle', x, z, z > 0 ? Math.PI : 0);
  }
  // Officers' cabins: a cot and a sea chest each.
  for (const [x, z] of [[-24.4, 5.6], [-21.2, 5.6], [-24.9, -5.6], [-22.4, -5.6], [-19.6, -5.6], [-17.1, -5.6]]) {
    hang('cot', 'upper', x, z, 0);
    put('chest', 'middle', x + 0.8, z * 0.8, 0);
  }
  put('desk', 'middle', -24.4, 4.1, Math.PI); put('shelf', 'middle', -17.6, 6.4, 0);

  // ---- Upper deck: Nelson's quarters ----
  put('table', 'upper', -26.0, 0, Math.PI / 2);
  for (const z of [-0.9, 0.9]) for (const dx of [-0.45, 0.45]) put('chair', 'upper', -26.0 + dx, z, z > 0 ? Math.PI : 0);
  put('desk', 'upper', -27.6, 3.2, Math.PI / 2);
  put('settee', 'upper', -28.1, -2.5, Math.PI / 2);
  put('globe', 'upper', -24.4, 4.4);
  // Dining cabin: the long table where Nelson dined with his captains.
  for (const x of [-21.6, -20.0]) {
    put('table', 'upper', x, 0, 0);
    for (const z of [-0.8, 0.8]) for (const dx of [-0.4, 0.4]) put('chair', 'upper', x + dx, z, z > 0 ? Math.PI : 0);
  }
  hang('cot', 'qd', -16.9, 4.4, 0); // Nelson's cot between the guns
  put('desk', 'upper', -16.0, -3.5, -Math.PI / 2); put('chest', 'upper', -17.6, -5.0, 0);
  // Sick berth cots forward.
  for (const [x, z] of [[22.6, 2.0], [22.6, 3.2], [24.4, 2.0], [24.4, 3.2], [26.0, 2.2]]) hang('cot', 'qd', x, z, 0);
  put('table', 'upper', 23.5, 4.8, 0);

  // ---- Quarterdeck, under the poop ----
  put('table', 'qd', -26.0, 0, Math.PI / 2);
  for (const z of [-0.9, 0.9]) put('chair', 'qd', -26.0, z, z > 0 ? Math.PI : 0);
  put('desk', 'qd', -27.8, 2.8, Math.PI / 2);
  put('table', 'qd', -21.0, -4.0, 0);
  for (const dx of [-0.5, 0.5]) for (const z of [-4.8, -3.2]) put('chair', 'qd', -21.0 + dx, z, z > -4.0 ? Math.PI : 0);
  hang('cot', 'poop', -21.4, 3.8, 0);
  put('desk', 'qd', -15.6, -4.6, 0); put('chest', 'qd', -16.8, -5.6, 0);
  put('desk', 'qd', -15.6, 4.6, Math.PI); put('chest', 'qd', -16.8, 5.6, 0);

  // ---- Orlop ----
  // Cockpit: sea chests pushed together as the surgeon's table; tubs and lanterns.
  for (const dx of [-0.46, 0.46]) put('chest', 'orlop', -14.6 + dx, 0, Math.PI / 2);
  put('tub', 'orlop', -13.3, 0.8); put('bucket', 'orlop', -15.9, -0.8); put('bucket', 'orlop', -13.2, -0.9);
  // Midshipmen's berth, and the lantern that marks where Nelson died.
  put('table', 'orlop', -14.0, -4.0, 0);
  for (const x of [-15.6, -12.4]) put('chest', 'orlop', x, -5.4, 0);
  hang('lantern', 'lower', -13.0, -3.6);
  // Storerooms.
  for (const x of [-26.4, -25.2]) for (const z of [-3.5, -1.2, 1.2, 3.5]) put('bin', 'orlop', x, z, 0);
  for (const [x, z] of [[-22.8, -4.0], [-21.6, -4.6], [-22.0, -2.6], [-21.0, -3.2]]) put('sack', 'orlop', x, z, x);
  put('hogshead', 'orlop', -22.4, -5.6, 0); put('hogshead', 'orlop', -21.0, -5.8, 0);
  for (const [x, z] of [[-19.6, -4.0], [-18.8, -4.6], [-19.4, -2.4]]) put('chest', 'orlop', x, z, 0);
  put('shelf', 'orlop', -22.4, 6.0, 0); put('chest', 'orlop', -21.8, 3.0, 0);
  hang('cot', 'lower', -19.7, 4.6, 0); put('chest', 'orlop', -19.7, 2.6, 0);
  for (let i = 0; i < 6; i++) put('powder', 'orlop', -22.9 + (i % 3) * 0.48, -0.5 + Math.floor(i / 3) * 1.0);
  // Cable tiers: the great cables coiled down both sides.
  for (const x of [2.4, 6.0, 9.6]) for (const side of [1, -1]) put('coil', 'orlop', x, side * 4.6, x);
  // Boatswain's store, carpenter's workshop, sail room, rope and block room.
  for (const [x, z] of [[14.8, 3.2], [16.4, 4.2], [15.4, 5.0]]) put('ropeCoil', 'orlop', x, z, 0);
  for (const [x, z] of [[16.8, 2.6], [17.0, 3.0], [16.6, 3.4]]) put('block', 'orlop', x, z, x);
  put('workbench', 'orlop', 15.8, -3.6, 0); put('timber', 'orlop', 15.6, -5.2, 0);
  for (let k = 0; k < 4; k++) put('sailBundle', 'orlop', 19.0, 1.2 + k * 0.65, 0);
  for (const [x, z] of [[18.4, -2.6], [19.8, -3.4], [18.8, -4.2]]) put('ropeCoil', 'orlop', x, z, 0);
  for (const [x, z] of [[20.0, -1.4], [19.4, -1.2]]) put('block', 'orlop', x, z, 0);
  for (const x of [21.1, 21.6]) for (const z of [-1.3, 1.3]) put('powder', 'orlop', x, z);

  // ---- Hold ----
  // Water casks in tiers on the shingle ballast, fore and aft.
  const tierCasks = (x0, x1, prop, L, R) => {
    for (let x = x0; x <= x1; x += L + 0.05) {
      if (Math.abs(x - mx) < 2.6) continue;
      const w = halfBreadth(x, -5.3 + R) - 0.25;
      for (let z = -w + R; z <= w - R; z += 2 * R + 0.02) put(prop, 'hold', x, z, 0);
      const w2 = halfBreadth(x, -5.3 + 3 * R) - 0.3;
      for (let z = -w2 + 2 * R; z <= w2 - 2 * R; z += 2 * R + 0.02) put(prop, 'hold', x, z, 0, 2 * R * 0.9);
    }
  };
  tierCasks(0.6, 14.2, 'leaguer', 1.6, 0.52);
  tierCasks(-19.2, -5.2, 'butt', 1.3, 0.42);
  // Shot lockers by the well.
  for (const x of [mx - 1.6, mx + 1.6]) for (const z of [-0.6, 0.6]) put('shotPile', 'hold', x, z, 0);
  // Grand magazine: powder barrels; filling room: cartridge racks.
  for (let x = 18.4; x < 22.6; x += 0.5) {
    const w = Math.min(2.6, halfBreadth(x, -5.0) - 0.5);
    for (let z = -w; z <= w; z += 0.48) put('powder', 'hold', x, z, 0);
  }
  put('cartridgeRack', 'hold', 16.0, -1.6, 0); put('cartridgeRack', 'hold', 16.0, 1.6, Math.PI);

  // ---- Build the instanced meshes ----
  const group = new THREE.Group();
  group.name = 'furnishing';
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
  const glow = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, emissive: '#ffb347', emissiveIntensity: 0.9 });
  const zero = new THREE.Matrix4().makeScale(0, 0, 0);
  const meshes = [];
  for (const [name, list] of Object.entries(P.items)) {
    const geo = PROPS[name]();
    const mesh = new THREE.InstancedMesh(geo, name === 'lantern' ? glow : mat, list.length);
    list.forEach((m, i) => mesh.setMatrixAt(i, m));
    meshes.push([mesh, list]);
    mesh.castShadow = name !== 'lantern' && name !== 'plate';
    mesh.receiveShadow = true;
    mesh.name = name;
    mesh.frustumCulled = false;
    group.add(mesh);
  }

  // The tiller: from the rudder head forward under the beams of the middle deck.
  const tx0 = -27.6, ty = deckY('middle', -24) - 0.75;
  const tiller = new THREE.Mesh(paint(new THREE.BoxGeometry(8.2, 0.32, 0.32).translate(tx0 + 4.1, ty, 0), '#5a4330'), mat);
  tiller.castShadow = true;
  group.add(tiller);
  group.userData.setCleared = (cleared) => {
    for (const [mesh, list] of meshes) {
      if (!list.some((m) => m.clearable)) continue;
      list.forEach((m, i) => mesh.setMatrixAt(i, cleared && m.clearable ? zero : m));
      mesh.instanceMatrix.needsUpdate = true;
    }
  };
  return group;
}
