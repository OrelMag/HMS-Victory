// Standing and running rigging as instanced rope segments, plus channels and deadeyes.
import * as THREE from 'three';
import { mats } from './materials.js';
import { deckY, railTop, halfBreadth, TIERS } from './config.js';
import { beamBetween, merge } from './geom.js';
import { xform } from './sails.js';

const UP = new THREE.Vector3(0, 1, 0);

export class Ropes {
  constructor(parent, material, capacity) {
    const g = new THREE.CylinderGeometry(1, 1, 1, 6, 1, true);
    g.translate(0, 0.5, 0);
    this.mesh = new THREE.InstancedMesh(g, material, capacity);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    parent.add(this.mesh);
    this.capacity = capacity;
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._s = new THREE.Vector3();
    this._d = new THREE.Vector3();
  }
  begin() { this.n = 0; this.segs = []; this.tag = ''; }
  add(a, b, r) {
    if (this.n >= this.capacity) return;
    this.segs.push([a.clone(), b.clone(), this.tag]);
    const d = this._d.subVectors(b, a);
    const len = d.length();
    if (len < 1e-4) return;
    this._q.setFromUnitVectors(UP, d.multiplyScalar(1 / len));
    this._s.set(r, len, r);
    this._m.compose(a, this._q, this._s);
    this.mesh.setMatrixAt(this.n++, this._m);
  }
  // A rope with a little sag, in `n` segments.
  addSag(a, b, r, sag = 0.02, n = 4) {
    const L = a.distanceTo(b);
    let prev = a.clone();
    for (let i = 1; i <= n; i++) {
      const t = i / n;
      const p = a.clone().lerp(b, t);
      p.y -= sag * L * 4 * t * (1 - t);
      this.add(prev, p, r);
      prev = p;
    }
  }
  end() {
    this.mesh.count = this.n;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}

export class Rigging {
  constructor(rig) {
    const M = mats();
    this.rig = rig;
    this.space = rig.group;
    this.standing = new Ropes(this.space, M.rope, 9000);
    this.running = new Ropes(this.space, M.ropeLight, 600);
    this.fittings = new THREE.Group();
    this.space.add(this.fittings);
    rig.group.updateMatrixWorld(true);
    this.buildStanding(M);
  }

  P(mast, key, ...args) {
    const l = mast.local[key];
    const v = typeof l === 'function' ? l(...args) : l.clone();
    return xform(v, mast.group, this.space);
  }
  L(mast, v) { return xform(v, mast.group, this.space); }

  buildStanding(M) {
    const R = this.standing;
    R.begin();
    const rig = this.rig;
    const channels = [], deadeyes = [], chain = [];
    const V = (x, y, z) => new THREE.Vector3(x, y, z);

    const ratlines = (left, right, y0, y1, step, r) => {
      // left/right: arrays of [bottom, top] points for neighbouring shrouds
      for (let k = 0; k < left.length - 1; k++) {
        const [a0, a1] = left[k], [b0, b1] = left[k + 1];
        for (let y = y0; y < y1; y += step) {
          const ta = (y - a0.y) / (a1.y - a0.y), tb = (y - b0.y) / (b1.y - b0.y);
          if (ta < 0 || ta > 1 || tb < 0 || tb > 1) continue;
          R.add(a0.clone().lerp(a1, ta), b0.clone().lerp(b1, tb), r);
        }
      }
    };

    for (const mast of Object.values(rig.masts)) {
      const s = mast.scale;
      const n = mast.name === 'main' ? 9 : mast.name === 'fore' ? 8 : 6;
      const x0 = mast.x + 0.4 * s, x1 = mast.x - 7.8 * s;
      const yc = deckY('upper', mast.x) + 1.95;
      for (const side of [1, -1]) {
        // Channel.
        const za = halfBreadth(x0, yc), zb = halfBreadth(x1, yc);
        channels.push(beamBetween(V(x0, yc, side * (za + 0.5)), V(x1, yc, side * (zb + 0.5)), 1.2, 0.2));
        const shrouds = [];
        const head = this.P(mast, 'shroudHead');
        for (let k = 0; k < n; k++) {
          const x = x0 - 0.3 - k * (x0 - x1 - 0.6) / (n - 1);
          const zo = halfBreadth(x, yc) + 1.05;
          const lower = V(x, yc + 0.2, side * zo);
          const upper = V(x, yc + 1.25, side * (zo - 0.03));
          deadeyes.push(lower, upper);
          R.tag = `${mast.name} lanyard`;
          R.add(lower, upper, 0.025); // lanyard
          // Snap the foot of each chainplate into the gap between upper-deck ports.
          const up = TIERS[2];
          const gi = Math.round((x - up.x0) / up.dx - 0.5);
          const gc = up.x0 + (gi + 0.5) * up.dx;
          const bx = gc + Math.max(-0.7, Math.min(0.7, x - gc));
          const zh = halfBreadth(bx, yc - 2.6) + 0.06;
          chain.push([lower.clone().add(V(0, -0.15, 0)), V(bx, yc - 2.6, side * zh)]);
          const top = head.clone().add(V(0, 0, side * (mast.r.lower + 0.12)));
          R.tag = `${mast.name} lower shroud`;
          R.add(upper, top, 0.06 * (0.8 + 0.2 * s));
          shrouds.push([upper, top]);
        }
        R.tag = `${mast.name} lower ratline`;
        ratlines(shrouds, null, yc + 1.8, head.y - 1.2, 0.42, 0.016);

        // Futtock shrouds and topmast shrouds from the top's edge.
        const tops = [];
        const m = mast.h;
        for (let k = 0; k < 4; k++) {
          const lx = -m.topLen * 0.36 + k * m.topLen * 0.16;
          const edge = this.L(mast, V(lx, m.topY + 0.2, side * m.topW * 0.48));
          deadeyes.push(edge);
          const fut = this.L(mast, V(lx * 0.3, m.topY - 3.2 * s, side * 0.65));
          R.tag = `${mast.name} futtock shroud`;
          R.add(edge, fut, 0.035);
          R.tag = `${mast.name} topmast shroud`;
          const th = this.L(mast, V(mast.dTop, m.crossY - 0.3, side * 0.3));
          R.add(edge.clone().add(V(0, 0.9, 0)), th, 0.045);
          R.add(edge, edge.clone().add(V(0, 0.9, 0)), 0.02);
          tops.push([edge.clone().add(V(0, 0.9, 0)), th]);
        }
        R.tag = `${mast.name} topmast ratline`;
        ratlines(tops, null, m.topY + 1.6, m.crossY - 1.2, 0.4, 0.013);

        // Topgallant shrouds from the crosstrees.
        R.tag = `${mast.name} topgallant shroud`;
        const ce = this.P(mast, 'crossEnd', side);
        const tgh = this.L(mast, V(mast.dTg, m.tgHead - 0.4, side * 0.14));
        R.add(ce.clone().add(V(-0.1, 0, 0)), tgh, 0.03);
        R.add(ce.clone().add(V(-0.8, 0, 0)), tgh, 0.03);

        // Backstays to stools aft of the channels.
        R.tag = `${mast.name} backstay`;
        const bsY = yc + 0.15;
        const stool = (k) => {
          const x = x1 - 0.9 - k * 1.1;
          return V(x, bsY, side * (halfBreadth(x, bsY) + 0.9));
        };
        for (let k = 0; k < 2; k++) {
          const st = stool(k);
          deadeyes.push(st);
          channels.push(beamBetween(st.clone().add(V(0.4, -0.1, -side * 0.6)), st.clone().add(V(-0.4, -0.1, -side * 0.6)), 1.2, 0.2));
          R.add(st, this.L(mast, V(mast.dTop, m.topmastHead - 0.6, side * 0.25)), 0.05);
        }
        R.add(stool(2), this.L(mast, V(mast.dTg, m.tgHead - 0.3, side * 0.12)), 0.035);
        R.add(stool(2), this.L(mast, V(mast.dTg, m.poleHead - 0.2, side * 0.1)), 0.025);
      }
    }

    // Stays.
    const bs = rig.bowsprit;
    const F = rig.masts.fore, Mn = rig.masts.main, Mz = rig.masts.mizzen;
    const stays = [
      ['fore stay', this.P(F, 'stayLower'), bs.fore, 0.13],
      ['fore preventer stay', this.P(F, 'stayLower').add(V(0, -0.3, 0)), bs.fore.clone().add(V(-1.2, -0.4, 0)), 0.1],
      ['fore topmast stay', this.P(F, 'topmastShroudHead'), bs.cap, 0.08],
      ['jib stay', this.P(F, 'topmastShroudHead'), bs.jibEnd, 0.06],
      ['fore topgallant stay', this.P(F, 'tgHead'), bs.flyEnd, 0.045],
      ['fore royal stay', this.P(F, 'poleHead'), bs.flyEnd, 0.03],
      ['main stay', this.P(Mn, 'stayLower'), V(F.x + 2.2, deckY('qd', F.x + 2.2) + 0.6, 0), 0.14],
      ['main preventer stay', this.P(Mn, 'stayLower').add(V(0, -0.3, 0)), V(F.x + 3.0, deckY('qd', F.x + 3.0) + 0.6, 0), 0.1],
      ['main topmast stay', this.P(Mn, 'topmastShroudHead'), this.P(F, 'lowerHead'), 0.08],
      ['main topgallant stay', this.P(Mn, 'tgHead'), this.P(F, 'topmastShroudHead'), 0.045],
      ['main royal stay', this.P(Mn, 'poleHead'), this.P(F, 'tgHead'), 0.03],
      ['mizzen stay', this.P(Mz, 'stayLower'), this.L(Mn, V(0, deckY('qd', Mn.x) + 3.5, 0)), 0.1],
      ['mizzen topmast stay', this.P(Mz, 'topmastShroudHead'), this.P(Mn, 'topBack'), 0.06],
      ['mizzen topgallant stay', this.P(Mz, 'tgHead'), this.P(Mn, 'topmastShroudHead'), 0.035],
    ];
    for (const [tag, a, b, r] of stays) { R.tag = tag; R.add(a, b, r); }
    R.tag = 'bowsprit rigging';

    // Bowsprit rigging: bobstays, shrouds, martingale.
    const knee = (y) => V(31.0 + (y - 2) * 0.35, y, 0);
    R.tag = 'bobstay';
    R.add(bs.P(10.5, -0.3), knee(1.6), 0.08);
    R.add(bs.P(13.5, -0.3), knee(3.4), 0.08);
    for (const side of [1, -1]) {
      R.tag = 'bowsprit shroud';
      R.add(bs.P(12, 0), V(28.2, 4.5, side * 2.0), 0.06);
      R.add(bs.P(16, 0), V(28.4, 5.0, side * 2.1), 0.06);
      R.tag = 'martingale back rope';
      R.add(bs.striker, V(27.5, deckY('qd', 27) - 0.6, side * 2.2), 0.04);
    }
    R.tag = 'martingale stay';
    R.add(bs.jibEnd, bs.striker, 0.04);
    R.add(bs.flyEnd, bs.striker, 0.035);
    R.end();

    // Iron chainplates.
    const chainR = new Ropes(this.space, M.iron, chain.length);
    chainR.begin();
    for (const [a, b] of chain) chainR.add(a, b, 0.04);
    chainR.end();

    const chMesh = new THREE.Mesh(merge(channels), M.black);
    chMesh.castShadow = true;
    this.fittings.add(chMesh);

    const dg = new THREE.CylinderGeometry(0.17, 0.17, 0.12, 10);
    dg.rotateX(Math.PI / 2);
    const de = new THREE.InstancedMesh(dg, M.darkWood, deadeyes.length);
    const mm = new THREE.Matrix4();
    deadeyes.forEach((p, i) => { mm.makeTranslation(p.x, p.y, p.z); de.setMatrixAt(i, mm); });
    this.fittings.add(de);
  }

  // Running rigging follows the yards; call after yards move.
  updateRunning(sails, state) {
    const R = this.running;
    const rig = this.rig;
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    R.begin();
    const Mn = rig.masts.main, Mz = rig.masts.mizzen;
    const braceTarget = (mast, yard, side) => {
      const s = side;
      if (mast.name === 'fore') {
        if (yard.name === 'course') return V(Mn.x + 3.5, railTop(Mn.x + 3.5) + 0.3, s * 7.2);
        if (yard.name === 'topsail') return this.P(Mn, 'crossEnd', s);
        if (yard.name === 'topgallant') return this.P(Mn, 'tgHead');
        return this.P(Mn, 'poleHead');
      }
      if (mast.name === 'main') {
        if (yard.name === 'course') return V(-21.5, railTop(-21.5) + 0.3, s * (halfBreadth(-21.5, 9) + 0.1));
        if (yard.name === 'topsail') return this.P(Mz, 'crossEnd', s);
        if (yard.name === 'topgallant') return this.P(Mz, 'tgHead');
        return this.P(Mz, 'poleHead');
      }
      if (yard.name === 'course') return this.L(Mn, V(-1.5, deckY('qd', Mn.x) + 6, s * 3));
      if (yard.name === 'topsail') return this.P(Mn, 'topEdge', s);
      return this.P(Mn, 'crossEnd', s);
    };
    const liftHead = { course: 'lowerHead', topsail: 'topmastHead', topgallant: 'tgHead', royal: 'poleHead' };
    for (const mast of Object.values(rig.masts)) {
      for (const yard of Object.values(mast.yards)) {
        const head = this.P(mast, liftHead[yard.name]);
        for (const side of [1, -1]) {
          const arm = xform(V(0, 0, side * yard.L * 0.48), yard.group, this.space);
          R.tag = `${mast.name} ${yard.name} lift`;
          R.add(arm, head.clone().add(V(0, 0, side * 0.3)), 0.025);
          R.tag = `${mast.name} ${yard.name} brace`;
          R.addSag(arm, braceTarget(mast, yard, side), 0.022, 0.012, 3);
        }
        // Halyard/tie.
        R.tag = `${mast.name} ${yard.name} tie`;
        R.add(xform(V(0, yard.r, 0), yard.group, this.space), head, 0.04);
      }
    }
    // Course sheets & tacks when set.
    for (const s of sails.square) {
      if (s.kind !== 'course' || !s.mesh.visible) continue;
      const pos = s.geo.attributes.position;
      const cl = [pos.count - s.NU, pos.count - 1];
      R.tag = `${s.mastName} course sheet/tack`;
      cl.forEach((vi, k) => {
        const p = xform(V(pos.getX(vi), pos.getY(vi), pos.getZ(vi)), s.yard.group, this.space);
        const side = k === 0 ? -1 : 1;
        const x = s.mastName === 'fore' ? 9 : -12;
        R.addSag(p, V(x, railTop(x) + 0.3, side * (halfBreadth(x, 9) + 0.1)), 0.03, 0.01, 3);
        R.add(p, V(p.x + 6, railTop(p.x + 6) + 0.2, side * (halfBreadth(p.x + 6, 9) - 0.1)), 0.03);
      });
    }
    // Headsail sheets.
    for (const s of sails.stay) {
      if (!s.mesh.visible) continue;
      const pos = s.geo.attributes.position;
      const c = V(pos.getX(s.NU - 1), pos.getY(s.NU - 1), pos.getZ(s.NU - 1));
      const x = Math.min(23, c.x - 4);
      R.tag = `${s.name} sheet`;
      R.addSag(c, V(x, railTop(x) + 0.3, (halfBreadth(x, 9) - 0.2)), 0.025, 0.02, 3);
    }
    // Spanker boom topping lifts and sheet; gaff vangs.
    const boomEnd = xform(V(rig.boom.L - 0.3, 0, 0), rig.boom.group, this.space);
    const peak = xform(V(rig.gaff.L - 0.2, 0, 0), rig.gaff.group, this.space);
    R.tag = 'boom topping lift';
    // One lift each side of the sail: offset across the boom at the bottom, across the mast at the top.
    // The leeward lift lies slack over the belly of the spanker.
    const belly = 1.3 * state.wind * state['set.spanker'];
    for (const side of [1, -1]) {
      const lo = xform(V(rig.boom.L - 0.3, 0, side * 0.45), rig.boom.group, this.space);
      const hi = this.P(Mz, 'lowerHead').add(V(0, 0, side * 0.9));
      const bow = side > 0 ? belly + 0.35 : 0;
      let prev = lo;
      for (let k = 1; k <= 8; k++) {
        const t = k / 8;
        const p = lo.clone().lerp(hi, t);
        p.z += bow * Math.sin(Math.PI * Math.min(1, t * 1.25));
        R.add(prev, p, 0.03);
        prev = p;
      }
    }
    R.tag = 'spanker sheet';
    R.addSag(boomEnd, V(-29.0, railTop(-29) + 0.3, 0), 0.04, 0.01, 2);
    R.tag = 'gaff vang';
    for (const side of [1, -1]) R.addSag(peak, V(-28.5, railTop(-28.5) + 0.2, side * (halfBreadth(-28.5, railTop(-28.5)) - 0.1)), 0.02, 0.02, 3);
    R.tag = 'peak halyard';
    R.add(peak, this.P(Mz, 'topmastShroudHead'), 0.03);
    // Spritsail yard lifts.
    const sy = rig.spritYard;
    R.tag = 'spritsail yard rigging';
    for (const side of [1, -1]) {
      const arm = xform(V(0, 0, side * sy.L * 0.48), sy.group, this.space);
      R.add(arm, rig.bowsprit.cap, 0.022);
      R.addSag(arm, V(26.5, railTop(26.5) + 0.3, side * 3.5), 0.02, 0.02, 3);
    }
    R.end();
  }
}
