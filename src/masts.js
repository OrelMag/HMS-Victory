// Masts, tops, yards, bowsprit, gaff and boom.
import * as THREE from 'three';
import { MASTS, deckY } from './config.js';
import { cylBetween, merge, beamBetween } from './geom.js';
import { mats } from './materials.js';

// Main-mast dimensions (heights above the waterline). Other masts scale about the upper deck.
const MAIN = {
  lowerHead: 34.0, topY: 30.6, topLen: 5.0, topW: 6.8, rLower: [0.5, 0.4],
  topmastHeel: 29.6, topmastHead: 50.4, crossY: 47.0, crossW: 4.6, rTop: [0.33, 0.22],
  tgHeel: 46.4, tgHead: 58.4, poleHead: 63.4, rTg: [0.19, 0.08],
  yards: [
    { name: 'course', L: 31.5, ySet: 29.2, yLow: 29.2, r: 0.33, head: 'lowerHead' },
    { name: 'topsail', L: 23.2, ySet: 46.2, yLow: 35.0, r: 0.25, head: 'topmastHead' },
    { name: 'topgallant', L: 14.6, ySet: 57.5, yLow: 50.9, r: 0.16, head: 'tgHead' },
    { name: 'royal', L: 9.6, ySet: 62.5, yLow: 58.9, r: 0.11, head: 'poleHead' },
  ],
};

export class Rig {
  constructor() {
    const M = mats();
    this.group = new THREE.Group();
    this.group.name = 'rig';
    this.masts = {};
    for (const [name, cfg] of Object.entries(MASTS)) this.masts[name] = this.buildMast(name, cfg, M);
    this.buildBowsprit(M);
    this.buildSpankerSpars(M);
  }

  buildMast(name, cfg, M) {
    const d0 = deckY('upper', cfg.x);
    const s = cfg.scale;
    const H = (h) => d0 + (h - 5.76) * s;
    const mast = { name, x: cfg.x, scale: s, group: new THREE.Group(), yards: {} };
    const g = mast.group;
    g.position.set(cfg.x, 0, 0);
    g.rotation.z = cfg.rake;
    this.group.add(g);

    const m = {
      lowerHead: H(MAIN.lowerHead), topY: H(MAIN.topY), topmastHeel: H(MAIN.topmastHeel),
      topmastHead: H(MAIN.topmastHead), crossY: H(MAIN.crossY), tgHeel: H(MAIN.tgHeel),
      tgHead: H(MAIN.tgHead), poleHead: H(MAIN.poleHead),
      topLen: MAIN.topLen * s, topW: MAIN.topW * s, crossW: MAIN.crossW * s,
    };
    mast.h = m;
    const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
    const r = (a) => a.map((v) => v * (0.75 + 0.25 * s));
    const [rl0, rl1] = r(MAIN.rLower), [rt0, rt1] = r(MAIN.rTop), [rg0, rg1] = r(MAIN.rTg);
    mast.r = { lower: rl1, top: rt1, tg: rg1 };

    // Spars (natural wood) and mastheads (black).
    const wood = [], black = [], hoops = [];
    wood.push(cylBetween(V(0, 0), V(0, m.topY), rl0, rl1 * 1.05, 16));
    black.push(cylBetween(V(0, m.topY), V(0, m.lowerHead), rl1 * 0.92, rl1 * 0.88, 12));
    for (let y = d0 + 1.2; y < m.topY - 1; y += 1.15) hoops.push(cylBetween(V(0, y), V(0, y + 0.12), rl0 * 1.06, rl0 * 1.06, 16));
    const dTop = rl1 + rt0 + 0.05; // topmast stands before the lower masthead
    wood.push(cylBetween(V(dTop, m.topmastHeel), V(dTop, m.crossY), rt0, rt1 * 1.05, 12));
    black.push(cylBetween(V(dTop, m.crossY), V(dTop, m.topmastHead), rt1, rt1 * 0.9, 10));
    const dTg = dTop + rt1 + rg0 + 0.03;
    wood.push(cylBetween(V(dTg, m.tgHeel), V(dTg, m.tgHead), rg0, rg1 * 1.3, 10));
    wood.push(cylBetween(V(dTg, m.tgHead), V(dTg, m.poleHead), rg1 * 1.3, rg1 * 0.7, 8));
    mast.dTop = dTop; mast.dTg = dTg;
    // Truck on the pole.
    black.push(cylBetween(V(dTg, m.poleHead), V(dTg, m.poleHead + 0.25), 0.22 * s, 0.22 * s, 10));

    // Lower cap and top platform.
    black.push(beamBetween(V(-rl1 - 0.2, m.lowerHead + 0.15), V(dTop + rt0 + 0.25, m.lowerHead + 0.15), 1.0 * s, 0.45));
    const top = new THREE.Shape();
    const tl = m.topLen, tw = m.topW / 2;
    top.moveTo(-tl * 0.45, -tw);
    top.lineTo(-tl * 0.45, tw);
    top.lineTo(tl * 0.25, tw);
    top.quadraticCurveTo(tl * 0.55, tw, tl * 0.55, 0);
    top.quadraticCurveTo(tl * 0.55, -tw, tl * 0.25, -tw);
    top.closePath();
    const tg = new THREE.ExtrudeGeometry(top, { depth: 0.22, bevelEnabled: false });
    tg.rotateX(Math.PI / 2);
    tg.translate(0, m.topY + 0.22, 0);
    black.push(tg);
    // Top rail with stanchions along the after edge.
    for (let k = 0; k <= 6; k++) {
      const z = -tw + (2 * tw * k) / 6;
      black.push(cylBetween(V(-tl * 0.43, m.topY + 0.22, z), V(-tl * 0.43, m.topY + 1.15, z), 0.035, 0.035, 5));
    }
    black.push(cylBetween(V(-tl * 0.43, m.topY + 1.15, -tw), V(-tl * 0.43, m.topY + 1.15, tw), 0.05, 0.05, 6));
    // Topmast crosstrees and cap.
    black.push(beamBetween(V(dTop, m.crossY, -m.crossW / 2), V(dTop, m.crossY, m.crossW / 2), 0.25, 0.22));
    black.push(beamBetween(V(dTop - 1.2 * s, m.crossY + 0.2), V(dTop + 1.0 * s, m.crossY + 0.2), m.crossW * 0.45, 0.18));
    black.push(beamBetween(V(dTop - rt1 - 0.15, m.topmastHead + 0.1), V(dTg + rg0 + 0.18, m.topmastHead + 0.1), 0.6 * s, 0.3));

    const woodMesh = new THREE.Mesh(merge(wood), M.mast);
    const blackMesh = new THREE.Mesh(merge([...black, ...hoops]), M.spar);
    woodMesh.castShadow = blackMesh.castShadow = true;
    g.add(woodMesh, blackMesh);

    // Points (in mast-local space) used by the rigging.
    mast.local = {
      lowerHead: V(0, m.lowerHead - 0.2),
      shroudHead: V(0, m.topY - 0.4),
      stayLower: V(0, m.topY + 0.4),
      topEdge: (side) => V(-tl * 0.1, m.topY + 0.15, side * tw * 0.98),
      topBack: V(-tl * 0.4, m.topY + 0.2),
      topFront: V(tl * 0.5, m.topY + 0.2),
      topmastShroudHead: V(dTop, m.crossY - 0.3),
      topmastHead: V(dTop, m.topmastHead - 0.2),
      crossEnd: (side) => V(dTop, m.crossY + 0.1, side * m.crossW / 2),
      tgHead: V(dTg, m.tgHead - 0.2),
      poleHead: V(dTg, m.poleHead - 0.1),
      futtock: V(0, m.topY - 3.2 * s),
    };

    // Yards (mizzen has a crossjack; no royal yard on the mizzen in 1805 sail plan).
    for (const y of MAIN.yards) {
      if (name === 'mizzen' && y.name === 'royal') continue;
      const yard = this.buildYard(mast, y, H, M);
      mast.yards[y.name] = yard;
    }
    return mast;
  }

  buildYard(mast, spec, H, M) {
    const s = mast.scale;
    const L = spec.L * s, r = spec.r * (0.75 + 0.25 * s);
    const g = new THREE.Group();
    const ySet = H(spec.ySet), yLow = H(spec.yLow);
    const off = spec.name === 'course' ? mast.r.lower + r + 0.1 : spec.name === 'topsail' ? mast.dTop + mast.r.top + r + 0.05 : mast.dTg + r + 0.18;
    g.position.set(off, ySet, 0);
    // Lathe: thick in the slings, tapering to the yardarms.
    const prof = [];
    const n = 12;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      prof.push(new THREE.Vector2(r * (1 - 0.55 * t ** 1.6), (t * L) / 2));
    }
    const half = new THREE.LatheGeometry(prof, 10);
    const other = half.clone().scale(1, -1, 1);
    const geo = merge([half, other]);
    geo.rotateX(Math.PI / 2);
    const mesh = new THREE.Mesh(geo, M.spar);
    mesh.castShadow = true;
    g.add(mesh);
    // Footrope sagging under the yard.
    const pts = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16 * 2 - 1;
      pts.push(new THREE.Vector3(-0.15, -r - 0.9 * (1 - t * t) - 0.15, t * L * 0.47));
    }
    const ropeParts = [new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 32, 0.03, 4)];
    // Stirrups holding up the footrope.
    for (let z = 2.2; z < L * 0.45; z += 2.4) {
      for (const sd of [1, -1]) {
        const t = (sd * z) / (L * 0.47);
        const yb = -r - 0.9 * (1 - t * t) - 0.15;
        ropeParts.push(cylBetween(new THREE.Vector3(-0.1, -r * 0.6, sd * z), new THREE.Vector3(-0.15, yb, sd * z), 0.02, 0.02, 4));
      }
    }
    g.add(new THREE.Mesh(merge(ropeParts), M.rope));
    // Studding-sail booms on the fore and main lower and topsail yards.
    if (mast.name !== 'mizzen' && (spec.name === 'course' || spec.name === 'topsail')) {
      const booms = [];
      const br = 0.09 * s * (spec.name === 'course' ? 1.2 : 1);
      for (const sd of [1, -1]) {
        booms.push(cylBetween(new THREE.Vector3(r * 0.8, r * 0.75, sd * L * 0.2), new THREE.Vector3(r * 0.8, r * 0.75, sd * (L * 0.5 + 2.6 * s)), br, br * 0.8, 8));
        for (const zz of [L * 0.22, L * 0.48]) {
          booms.push(new THREE.TorusGeometry(br + 0.04, 0.025, 4, 10).rotateY(Math.PI / 2).translate(r * 0.8, r * 0.75, sd * zz));
        }
      }
      const bm = new THREE.Mesh(merge(booms), M.spar);
      bm.castShadow = true;
      g.add(bm);
    }
    mast.group.add(g);
    return { name: spec.name, group: g, L, r, ySet, yLow, mast, headKey: spec.head, hoist: 1, brace: 0 };
  }

  buildBowsprit(M) {
    const heel = new THREE.Vector3(21.2, deckY('qd', 21.2) + 0.2, 0);
    const steeve = THREE.MathUtils.degToRad(22);
    const dir = new THREE.Vector3(Math.cos(steeve), Math.sin(steeve), 0);
    const P = (d, up = 0) => heel.clone().addScaledVector(dir, d).add(new THREE.Vector3(-Math.sin(steeve) * up, Math.cos(steeve) * up, 0));
    const parts = [], black = [];
    parts.push(cylBetween(P(0), P(23.5), 0.52, 0.36, 16));
    parts.push(cylBetween(P(17.5, 0.62), P(35.5, 0.62), 0.27, 0.15, 12));
    parts.push(cylBetween(P(32.5, 0.95), P(41.0, 0.95), 0.13, 0.07, 10));
    black.push(beamBetween(P(23.0, 0.1), P(23.0, 0.95), 0.75, 0.45, new THREE.Vector3(0, 0, 1)));
    black.push(beamBetween(P(35.0, 0.62), P(35.0, 1.0), 0.4, 0.3, new THREE.Vector3(0, 0, 1)));
    // Dolphin striker.
    black.push(cylBetween(P(23.2, -0.2), P(23.2, -3.0), 0.08, 0.06, 6));
    const mesh = new THREE.Mesh(merge(parts), M.mast);
    const bm = new THREE.Mesh(merge(black), M.spar);
    mesh.castShadow = bm.castShadow = true;
    this.group.add(mesh, bm);
    this.bowsprit = {
      P,
      heel, dir, steeve,
      stemPoint: P(9),
      fore: P(10.5, 0.4), cap: P(22.8, 0.4), jib: P(30.5, 0.85), jibEnd: P(35.2, 0.85),
      flyEnd: P(40.8, 1.05), striker: P(23.2, -3.0),
    };
    // Spritsail yard under the bowsprit.
    const g = new THREE.Group();
    g.position.copy(P(18.5, -0.75));
    const L = 20.5, r = 0.2;
    const prof = [];
    for (let i = 0; i <= 10; i++) prof.push(new THREE.Vector2(r * (1 - 0.5 * (i / 10) ** 1.6), (i / 10) * L / 2));
    const geo = merge([new THREE.LatheGeometry(prof, 8), new THREE.LatheGeometry(prof, 8).scale(1, -1, 1)]);
    geo.rotateX(Math.PI / 2);
    const ym = new THREE.Mesh(geo, M.spar);
    ym.castShadow = true;
    g.add(ym);
    this.group.add(g);
    this.spritYard = { name: 'sprit', group: g, L, r, hoist: 1, brace: 0, ySet: g.position.y, yLow: g.position.y, mast: null };
  }

  buildSpankerSpars(M) {
    const mz = this.masts.mizzen;
    const m = mz.h;
    // Gaff: jaws at the mizzen below the top, peaked up and aft.
    const gaff = new THREE.Group();
    gaff.position.set(-mz.r.lower - 0.1, m.topY - 2.4, 0);
    const peak = THREE.MathUtils.degToRad(38);
    gaff.rotation.z = Math.PI - peak;
    const gl = 14.2;
    gaff.add(new THREE.Mesh(cylBetween(new THREE.Vector3(0, 0, 0), new THREE.Vector3(gl, 0, 0), 0.2, 0.12, 10), M.spar));
    mz.group.add(gaff);
    // Boom: from the mizzen over the poop, out past the taffrail.
    const boom = new THREE.Group();
    const by = deckY('poop', -17.4) + 2.3;
    boom.position.set(-mz.r.lower - 0.1, by, 0);
    boom.rotation.z = Math.PI - 0.04;
    const bl = 19.5;
    boom.add(new THREE.Mesh(cylBetween(new THREE.Vector3(0, 0, 0), new THREE.Vector3(bl, 0, 0), 0.24, 0.16, 10), M.spar));
    mz.group.add(boom);
    for (const o of [gaff, boom]) o.children[0].castShadow = true;
    this.gaff = { group: gaff, L: gl };
    this.boom = { group: boom, L: bl };
  }

  allYards() {
    const list = [];
    for (const m of Object.values(this.masts)) list.push(...Object.values(m.yards));
    return list;
  }

  // Place yards for the current hoist (0 lowered .. 1 hoisted) and brace angle.
  applyYards(state) {
    for (const m of Object.values(this.masts)) {
      for (const y of Object.values(m.yards)) {
        const hoist = y.name === 'course' ? 1 : state.hoist[y.name] ?? 1;
        y.group.position.y = y.yLow + (y.ySet - y.yLow) * hoist;
        y.group.rotation.y = state.brace * (y.name === 'course' ? 0.55 : 1) * (m.name === 'mizzen' ? 1.15 : 1);
      }
    }
    this.boom.group.rotation.y = state.boomSwing;
    this.gaff.group.rotation.y = state.boomSwing * 1.2;
  }
}
