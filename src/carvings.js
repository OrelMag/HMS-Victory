// Carved and gilded work: figurehead cherubs, scrollwork, stern pilasters, balustrades and the
// taffrail crest, quarter-gallery finials.
import * as THREE from 'three';
import { DECK, sheer, xStern, bSec, wEnd, smoothstep, lerp } from './config.js';
import { merge } from './geom.js';
import { mats } from './materials.js';

const flesh = () => new THREE.MeshStandardMaterial({ color: '#c99573', roughness: 0.6 });

// A carved scroll (volute) as a tapering spiral tube in a plane given by axes u and v.
export function volute(center, u, v, R = 0.3, turns = 1.6, tube = 0.045, tail = 0) {
  const pts = [];
  const n = 40;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const a = t * turns * Math.PI * 2;
    const r = R * (1 - 0.82 * t);
    pts.push(center.clone().addScaledVector(u, Math.cos(a) * r - tail * (1 - t) ** 3).addScaledVector(v, Math.sin(a) * r));
  }
  const g = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 60, tube, 6, false);
  // Taper towards the eye of the scroll.
  const p = g.attributes.position, count = p.count, ring = 7;
  const path = new THREE.CatmullRomCurve3(pts);
  for (let i = 0; i < count; i++) {
    const seg = Math.floor(i / ring) / 60;
    const c = path.getPoint(Math.min(1, seg));
    const k = 1 - 0.6 * seg;
    p.setXYZ(i, c.x + (p.getX(i) - c.x) * k, c.y + (p.getY(i) - c.y) * k, c.z + (p.getZ(i) - c.z) * k);
  }
  g.computeVertexNormals();
  return g;
}

// Acanthus-like leaf: a curled, flattened, pointed blade.
function leaf(len = 0.5, w = 0.16) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.quadraticCurveTo(w, len * 0.4, 0, len);
  s.quadraticCurveTo(-w, len * 0.4, 0, 0);
  const g = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.015, bevelSegments: 1 });
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    p.setZ(i, p.getZ(i) + 0.25 * (y / len) ** 2); // curl outwards towards the tip
  }
  g.computeVertexNormals();
  return g;
}

// A winged cherub, about 1 m tall before scaling. side = +1 / -1 mirrors it.
export function cherub(side) {
  const M = mats();
  const F = flesh();
  const g = new THREE.Group();
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z * side);
    m.rotation.set(rx * side, ry * side, rz);
    g.add(m);
    return m;
  };
  // Chubby torso and belly.
  add(new THREE.SphereGeometry(0.19, 14, 12).scale(0.9, 1.2, 1), F, 0, 0.1, 0);
  add(new THREE.SphereGeometry(0.17, 12, 10).scale(1, 0.85, 1.05), F, 0.03, -0.12, 0);
  // Head with gilded curls.
  add(new THREE.SphereGeometry(0.17, 14, 12), F, 0.04, 0.5, 0.02);
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2;
    add(new THREE.SphereGeometry(0.055, 8, 6), M.gold, 0.04 - 0.1 * Math.cos(a) * 0.8, 0.6 + 0.06 * Math.sin(a * 2), 0.02 + 0.13 * Math.sin(a));
  }
  add(new THREE.SphereGeometry(0.03, 6, 6), F, 0.2, 0.48, 0.06); // nose
  // Arms: one raised to the shield, one holding the drapery.
  add(new THREE.CapsuleGeometry(0.045, 0.32, 4, 8), F, 0.1, 0.3, -0.22, -1.2, 0, 0.3);
  add(new THREE.SphereGeometry(0.055, 8, 6), F, 0.18, 0.47, -0.42);
  add(new THREE.CapsuleGeometry(0.045, 0.28, 4, 8), F, 0.12, 0.05, 0.22, 0.5, 0, -0.6);
  // Legs, one bent.
  add(new THREE.CapsuleGeometry(0.06, 0.3, 4, 8), F, 0.08, -0.38, -0.1, 0.2, 0, 0.5);
  add(new THREE.CapsuleGeometry(0.06, 0.28, 4, 8), F, 0.15, -0.36, 0.12, -0.3, 0, -0.8);
  // Wings: three layers of gilded feathers fanned out behind.
  for (let layer = 0; layer < 3; layer++) {
    for (let k = 0; k < 5; k++) {
      const f = new THREE.SphereGeometry(1, 8, 6).scale(0.04, 0.32 - layer * 0.07, 0.08);
      const m = add(f, M.gold, -0.2 - layer * 0.02, 0.32 + k * 0.03 - layer * 0.05, 0.12 + layer * 0.06, 0, 0, 0);
      m.rotation.set(side * (0.35 + k * 0.22 + layer * 0.1), 0, -0.25);
    }
  }
  // Fluttering ribbon of drapery.
  const rib = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    rib.push(new THREE.Vector3(0.12 + 0.1 * Math.sin(t * 6), -0.05 - t * 0.5, side * (0.24 + 0.18 * t + 0.06 * Math.cos(t * 7))));
  }
  const dr = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rib), 30, 0.045, 6), new THREE.MeshStandardMaterial({ color: '#2a4a9a', roughness: 0.6 }));
  dr.scale.set(1, 1, 1);
  g.add(dr);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

// Gilded frame for the arms: oval cartouche of leaves and the blue Garter round the shield.
export function cartouche() {
  const M = mats();
  const g = new THREE.Group();
  const garter = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.075, 8, 40).scale(1, 1.18, 1), new THREE.MeshStandardMaterial({ color: '#203a8a', roughness: 0.45 }));
  garter.rotation.y = Math.PI / 2;
  const edge = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.03, 6, 40).scale(1, 1.17, 1), M.gold);
  edge.rotation.y = Math.PI / 2;
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.2), M.gold);
  buckle.position.set(0.06, -0.96, 0.18);
  g.add(garter, edge, buckle);
  const leaves = [];
  for (let k = 0; k < 18; k++) {
    const a = (k / 18) * Math.PI * 2;
    const l = leaf(0.36, 0.13);
    l.rotateZ(-Math.PI / 2).rotateY(Math.PI / 2);
    l.rotateX(a + Math.PI / 2);
    l.translate(-0.05, Math.sin(a) * 1.12, Math.cos(a) * 0.96);
    leaves.push(l);
  }
  const lm = new THREE.Mesh(merge(leaves), M.gold);
  g.add(lm);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

// Scrollwork on the trailboards either side of the knee of the head.
export function trailScrolls(figX, figY) {
  const parts = [];
  for (const side of [1, -1]) {
    const z = side * 0.33;
    const u = new THREE.Vector3(1, 0, 0), v = new THREE.Vector3(0, 1, 0);
    const pts = [[figX - 1.15, figY - 1.15, 0.22], [figX - 1.85, figY - 1.85, 0.25], [figX - 2.55, figY - 2.45, 0.24], [figX - 3.2, figY - 2.9, 0.2]];
    pts.forEach(([x, y, r], k) => parts.push(volute(new THREE.Vector3(x, y, z), k % 2 ? u.clone().negate() : u, v, r, 1.5, 0.035, 0.3)));
    // A running vine joining them.
    const vine = new THREE.CatmullRomCurve3(pts.map(([x, y]) => new THREE.Vector3(x + 0.15, y + 0.25, z)));
    parts.push(new THREE.TubeGeometry(vine, 30, 0.03, 5));
  }
  const m = new THREE.Mesh(merge(parts), mats().gold);
  m.castShadow = true;
  return m;
}

// Volutes finishing the head rails at the figurehead.
export function railEnds(points) {
  const parts = points.map(([p, side]) => volute(p, new THREE.Vector3(-1, 0, 0), new THREE.Vector3(0, 1, 0).add(new THREE.Vector3(0, 0, side * 0.3)).normalize(), 0.16, 1.3, 0.05));
  const m = new THREE.Mesh(merge(parts), mats().gold);
  m.castShadow = true;
  return m;
}

// ---------- Stern ----------
// The stern face: x at (z, h), and the half-width at h (matching hull.js).
const sternW = (h) => bSec(h) * wEnd(h);
function sternX(z, h) {
  const w = sternW(h);
  return xStern(h) - 0.45 * smoothstep(1.0, 3.0, h) * (1 - (w > 0 ? (z / w) ** 2 : 1));
}
// Place geometry on the stern face at (z, h), facing aft, standing `out` metres proud.
function onStern(geo, z, h, out = 0.02) {
  const e = 0.05;
  const dxdz = (sternX(z + e, h) - sternX(z - e, h)) / (2 * e);
  const dxdh = (sternX(z, h + e) - sternX(z, h - e)) / (2 * e);
  // Outward (aft) normal of the surface x = sternX(z, h); the geometry's +z is turned to face it.
  const fwd = new THREE.Vector3(-1, dxdh, dxdz).normalize();
  const m = new THREE.Matrix4().lookAt(fwd, new THREE.Vector3(), new THREE.Vector3(0, 1, 0));
  geo.applyMatrix4(m);
  geo.translate(sternX(z, h) + fwd.x * out, h + fwd.y * out, z + fwd.z * out);
  return geo;
}

export function sternCarvings(topH, armsMat = null) {
  const M = mats();
  const s0 = sheer(-28.5);
  const deck = (n) => DECK[n] + s0;
  const tiers = [
    [deck('middle') + 0.45, deck('middle') + 1.75],
    [deck('upper') + 0.45, deck('upper') + 1.75],
    [deck('qd') + 0.4, deck('qd') + 1.6],
  ];
  const ochre = [], gold = [];
  const balusterGeo = new THREE.LatheGeometry([
    [0.05, 0], [0.05, 0.04], [0.035, 0.06], [0.06, 0.15], [0.045, 0.24], [0.028, 0.28], [0.045, 0.3], [0.045, 0.34],
  ].map(([r, y]) => new THREE.Vector2(r, y)), 8);
  const balusters = [];
  for (const [a, b] of tiers) {
    const hm = (a + b) / 2, hw = sternW(hm), span = hw * 2;
    const n = 9, ww = (span - 0.5) / n;
    // Pilasters (with gilded capitals and bases) at the same places as on the stern texture.
    for (let i = 0; i <= n; i++) {
      const zt = -hw + 0.25 + i * ww + (i === n ? -0.1 : 0.09);
      const u = zt / span;
      const zAt = (h) => u * 2 * sternW(h);
      const hh = b + 0.15 - a;
      ochre.push(onStern(new THREE.BoxGeometry(0.16, hh, 0.07).translate(0, 0, 0.035), zAt(a + hh / 2), a + hh / 2));
      gold.push(onStern(new THREE.BoxGeometry(0.24, 0.1, 0.1).translate(0, 0, 0.05), zAt(b + 0.12), b + 0.12));
      gold.push(onStern(new THREE.BoxGeometry(0.22, 0.08, 0.09).translate(0, 0, 0.045), zAt(a + 0.04), a + 0.04));
      gold.push(onStern(volute(new THREE.Vector3(0, 0, 0.08), new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0), 0.06, 1.4, 0.018), zAt(b + 0.05), b + 0.05));
    }
    // Balustrade under the windows: rails top and bottom, turned balusters between.
    for (const hr of [a - 0.06, a - 0.42]) {
      const pts = [];
      for (let k = 0; k <= 24; k++) {
        const z = lerp(-sternW(hr) + 0.15, sternW(hr) - 0.15, k / 24);
        pts.push(new THREE.Vector3(sternX(z, hr) - 0.07, hr, z));
      }
      gold.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.04, 6));
    }
    const hb = a - 0.4;
    for (let z = -sternW(hb) + 0.3; z < sternW(hb) - 0.3; z += 0.22) {
      const m = new THREE.Matrix4().makeTranslation(sternX(z, hb) - 0.07, hb, z);
      balusters.push(m);
    }
  }
  // Taffrail crest: the royal arms supported by the lion and the unicorn, with scrolls.
  const crest = new THREE.Group();
  const hc = deck('poop') + 0.45;
  const xs = sternX(0, hc + 0.9);
  crest.position.set(xs - 0.12, hc, 0);
  const dxAt = (z) => sternX(z, hc + 0.5) - sternX(0, hc + 0.5); // the face curves forward at the sides
  const sh = new THREE.Shape();
  sh.moveTo(-0.45, 0.55); sh.lineTo(0.45, 0.55); sh.lineTo(0.45, -0.05);
  sh.quadraticCurveTo(0.45, -0.5, 0, -0.68); sh.quadraticCurveTo(-0.45, -0.5, -0.45, -0.05); sh.closePath();
  const shield = new THREE.ExtrudeGeometry(sh, { depth: 0.12, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
  { const uv = shield.attributes.uv, p = shield.attributes.position;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (p.getX(i) + 0.49) / 0.98, (p.getY(i) + 0.72) / 1.31); }
  shield.rotateY(-Math.PI / 2).translate(0, 0.85, 0);
  const crown = [new THREE.CylinderGeometry(0.3, 0.26, 0.22, 14).translate(0, 1.6, 0), new THREE.SphereGeometry(0.09, 8, 6).translate(0, 1.95, 0)];
  for (const r of [0, Math.PI / 2]) crown.push(new THREE.TorusGeometry(0.26, 0.035, 5, 14, Math.PI).rotateY(r).translate(0, 1.66, 0));
  // The supporters, rearing towards the shield: the crowned lion and the chained unicorn.
  const supporter = (side, unicorn) => {
    const p = [];
    const Z = (z) => side * z;
    p.push(new THREE.CapsuleGeometry(0.15, 0.42, 4, 10).rotateX(Z(-0.55)).translate(0, 0.72, Z(0.9)));  // body
    p.push(new THREE.CapsuleGeometry(0.07, 0.3, 3, 8).rotateX(Z(-0.2)).translate(0, 0.28, Z(1.0)));     // hind leg
    p.push(new THREE.CapsuleGeometry(0.07, 0.28, 3, 8).rotateX(Z(0.25)).translate(0, 0.28, Z(0.8)));    // hind leg
    p.push(new THREE.CapsuleGeometry(0.055, 0.34, 3, 8).rotateX(Z(1.1)).translate(0, 1.0, Z(0.58)));    // foreleg on the shield
    p.push(new THREE.CapsuleGeometry(0.055, 0.3, 3, 8).rotateX(Z(0.7)).translate(0, 0.82, Z(0.6)));     // foreleg
    p.push(new THREE.CapsuleGeometry(0.035, 0.35, 3, 6).rotateX(Z(0.4)).translate(0, 1.12, Z(0.84)));   // neck
    if (unicorn) {
      p.push(new THREE.CapsuleGeometry(0.075, 0.2, 4, 8).rotateX(Z(1.3)).translate(0, 1.3, Z(0.72)));   // long horse head
      p.push(new THREE.ConeGeometry(0.025, 0.34, 6).rotateX(Z(1.0)).translate(0, 1.42, Z(0.55)));       // horn
      for (let k = 0; k < 5; k++) p.push(new THREE.SphereGeometry(0.035, 6, 4).translate(0, 1.18 - k * 0.07, Z(0.98 + k * 0.02))); // mane
    } else {
      p.push(new THREE.SphereGeometry(0.13, 10, 8).translate(0, 1.3, Z(0.78)));                          // head
      p.push(new THREE.BoxGeometry(0.1, 0.08, 0.1).translate(0, 1.27, Z(0.65)));                         // muzzle
      for (let k = 0; k < 8; k++) {
        const a = (k / 8) * Math.PI * 2;
        p.push(new THREE.SphereGeometry(0.06, 6, 4).translate(0, 1.3 + Math.sin(a) * 0.15, Z(0.82 + Math.cos(a) * 0.12))); // mane
      }
      p.push(new THREE.CylinderGeometry(0.09, 0.08, 0.08, 8).translate(0, 1.46, Z(0.78)));               // crown
    }
    p.push(volute(new THREE.Vector3(0, 0.5, Z(1.18)), new THREE.Vector3(0, 0, side), new THREE.Vector3(0, 1, 0), 0.13, 1.3, 0.025)); // tail
    return p;
  };
  const crestParts = [...crown, ...supporter(1, true), ...supporter(-1, false)];
  // Scrolls running out along the taffrail.
  for (const side of [1, -1]) {
    for (let k = 0; k < 3; k++) {
      const z = side * (1.5 + k * 1.1);
      crestParts.push(volute(new THREE.Vector3(dxAt(z), 0.6, z), new THREE.Vector3(0, 0, side), new THREE.Vector3(0, 1, 0), 0.32 - k * 0.06, 1.6, 0.05, 0.35));
    }
  }
  crest.add(new THREE.Mesh(merge(crestParts), M.gold));
  crest.add(new THREE.Mesh(shield, armsMat ? [armsMat, M.gold] : M.gold));
  crest.rotation.z = 0.1; // leans aft with the rake of the stern
  const g = new THREE.Group();
  g.name = 'sternCarvings';
  g.add(new THREE.Mesh(merge(ochre), M.ochre), new THREE.Mesh(merge(gold), M.gold), crest);
  const bm = new THREE.InstancedMesh(balusterGeo, M.gold, balusters.length);
  balusters.forEach((m, i) => bm.setMatrixAt(i, m));
  g.add(bm);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

// Quarter-gallery finials: a pendant drop below and a crowned finial above.
export function galleryFinials(points) {
  const M = mats();
  const drop = new THREE.LatheGeometry([
    [0.001, -0.9], [0.06, -0.8], [0.04, -0.62], [0.12, -0.5], [0.08, -0.32], [0.16, -0.2], [0.18, 0], [0.001, 0.02],
  ].map(([r, y]) => new THREE.Vector2(r, y)), 12);
  const top = new THREE.LatheGeometry([
    [0.2, 0], [0.22, 0.06], [0.1, 0.2], [0.14, 0.32], [0.05, 0.5], [0.08, 0.6], [0.001, 0.75],
  ].map(([r, y]) => new THREE.Vector2(r, y)), 12);
  const parts = [];
  for (const { p, kind } of points) parts.push((kind === 'drop' ? drop : top).clone().translate(p.x, p.y, p.z));
  const m = new THREE.Mesh(merge(parts), M.gold);
  m.castShadow = true;
  return m;
}
