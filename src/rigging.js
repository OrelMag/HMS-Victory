// Standing and running rigging as instanced rope segments, plus channels and deadeyes.
import * as THREE from 'three';
import { mats } from './materials.js';
import { deckY, railTop, halfBreadth, TIERS } from './config.js';
import { beamBetween, merge, mergeGeometries } from './geom.js';
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

// Wooden blocks placed along ropes (instanced), oriented along the rope.
export class Blocks {
  constructor(parent, capacity) {
    const M = mats();
    const g = new THREE.SphereGeometry(1, 8, 6).scale(0.11, 0.17, 0.075);
    const strop = new THREE.TorusGeometry(0.085, 0.018, 4, 10).scale(1, 1.6, 1);
    const geo = mergeGeometries([g, strop.translate(0, 0, 0)].map((q) => q.toNonIndexed()));
    this.mesh = new THREE.InstancedMesh(geo, M.darkWood, capacity);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.castShadow = true;
    parent.add(this.mesh);
    this.capacity = capacity;
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion();
  }
  begin() { this.n = 0; }
  // Block at a, `t` metres along the rope towards b.
  add(a, b, t = 0.35, scale = 1) {
    if (this.n >= this.capacity) return;
    const d = new THREE.Vector3().subVectors(b, a);
    const L = d.length();
    if (L < 1e-3) return;
    d.multiplyScalar(1 / L);
    const p = a.clone().addScaledVector(d, Math.min(t, L * 0.5));
    this._q.setFromUnitVectors(UP, d);
    this._m.compose(p, this._q, new THREE.Vector3(scale, scale, scale));
    this.mesh.setMatrixAt(this.n++, this._m);
  }
  end() { this.mesh.count = this.n; this.mesh.instanceMatrix.needsUpdate = true; }
}

export class Rigging {
  constructor(rig) {
    const M = mats();
    this.rig = rig;
    this.space = rig.group;
    this.standing = new Ropes(this.space, M.rope, 9000);
    this.running = new Ropes(this.space, M.ropeLight, 600);
    // Lines that lie on the sails (buntlines, leechlines, clewlines, brails).
    this.sailLines = new Ropes(this.space, M.ropeLight, 7000);
    this.blocks = new Blocks(this.space, 400);
    this.sailLines.mesh.castShadow = false;
    this.fittings = new THREE.Group();
    this.space.add(this.fittings);
    rig.group.updateMatrixWorld(true);
    // Standing rigging that sails can press against, per mast: [bottom, top] pairs in rig space.
    this.colliders = {};
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
      const col = this.colliders[mast.name] = { lower: [], futtock: [], topmast: [], tg: [], backstay: [] };
      const n = mast.name === 'main' ? 9 : mast.name === 'fore' ? 8 : 6;
      const x0 = mast.x + 0.4 * s, x1 = Math.max(mast.x - 7.8 * s, mast.name === 'mizzen' ? -21.9 : -99);
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
          const zh = halfBreadth(bx, yc - 2.6) + 0.12;
          chain.push([lower.clone().add(V(0, -0.15, 0)), V(bx, yc - 2.6, side * zh)]);
          const top = head.clone().add(V(0, 0, side * (mast.r.lower + 0.12)));
          R.tag = `${mast.name} lower shroud`;
          R.add(upper, top, 0.06 * (0.8 + 0.2 * s));
          col.lower.push([upper, top]);
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
          col.futtock.push([fut, edge]);
          R.tag = `${mast.name} topmast shroud`;
          const th = this.L(mast, V(mast.dTop, m.crossY - 0.3, side * 0.3));
          R.add(edge.clone().add(V(0, 0.9, 0)), th, 0.045);
          col.topmast.push([edge.clone().add(V(0, 0.9, 0)), th]);
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
        col.tg.push([ce.clone().add(V(-0.1, 0, 0)), tgh], [ce.clone().add(V(-0.8, 0, 0)), tgh]);

        // Backstays to stools aft of the channels.
        R.tag = `${mast.name} backstay`;
        const bsY = yc + 0.15;
        const stool = (k) => {
          if (mast.name === 'mizzen') {
            const x = -22.6 - k * 0.7, y = railTop(x) - 0.3;
            return V(x, y, side * (halfBreadth(x, y) + 0.6));
          }
          const x = x1 - 0.9 - k * 1.1;
          return V(x, bsY, side * (halfBreadth(x, bsY) + 0.9));
        };
        for (let k = 0; k < 2; k++) {
          const st = stool(k);
          deadeyes.push(st);
          channels.push(beamBetween(st.clone().add(V(0.4, -0.1, -side * 0.6)), st.clone().add(V(-0.4, -0.1, -side * 0.6)), 1.2, 0.2));
          const bt = this.L(mast, V(mast.dTop, m.topmastHead - 0.6, side * 0.25));
          R.add(st, bt, 0.05);
          col.backstay.push([st, bt]);
        }
        const b1 = this.L(mast, V(mast.dTg, m.tgHead - 0.3, side * 0.12));
        const b2 = this.L(mast, V(mast.dTg, m.poleHead - 0.2, side * 0.1));
        R.add(stool(2), b1, 0.035);
        R.add(stool(2), b2, 0.025);
        col.backstay.push([stool(2), b1], [stool(2), b2]);
      }
    }

    // Stays.
    const bs = rig.bowsprit;
    const F = rig.masts.fore, Mn = rig.masts.main, Mz = rig.masts.mizzen;
    const stays = [
      ['fore stay', this.P(F, 'stayLower'), bs.fore, 0.13],
      ['fore preventer stay', this.P(F, 'stayLower').add(V(0, -0.3, 0)), bs.P(12.5, 0.4), 0.1],
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
      ['mizzen topgallant stay', this.P(Mz, 'tgHead'), this.P(Mn, 'lowerHead'), 0.035],
    ];
    this.stayLines = {};
    for (const [tag, a, b, r] of stays) { R.tag = tag; R.add(a, b, r); this.stayLines[tag] = [a, b]; }
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
  updateRunning(sails, state, W) {
    const R = this.running;
    const rig = this.rig;
    const V = (x, y, z) => new THREE.Vector3(x, y, z);
    R.begin();
    const B = this.blocks;
    B.begin();
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
        if (yard.name === 'topsail') return V(Mz.x + 1.0, railTop(Mz.x + 1.0) + 0.6, s * (halfBreadth(Mz.x + 1.0, 9) + 0.4));
        return this.P(Mz, 'poleHead').add(V(0, 0.2, 0));
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
          const lh = head.clone().add(V(0, 0, side * 0.3));
          R.add(arm, lh, 0.025);
          B.add(lh, arm, 0.25, 0.8 + 0.2 * mast.scale);
          B.add(arm, lh, 0.3, 0.7 + 0.2 * mast.scale);
          R.tag = `${mast.name} ${yard.name} brace`;
          const bt = braceTarget(mast, yard, side);
          R.addSag(arm, bt, 0.022, 0.012, 3);
          B.add(arm, bt, 0.9, 0.8 + 0.2 * mast.scale);
          B.add(bt, arm, 0.3, 0.8);
        }
        // Tie, and the halyard fall coming down abaft the mast to the deck.
        R.tag = `${mast.name} ${yard.name} tie`;
        R.add(xform(V(0, yard.r, 0), yard.group, this.space), head, 0.04);
        if (yard.name !== 'course') {
          R.tag = `${mast.name} ${yard.name} halyard`;
          const side = yard.name === 'topgallant' ? -1 : 1;
          const foot = V(mast.x - 1.3, deckY('upper', mast.x) + (mast.x > 1 && mast.x < 15 ? 0.6 : 2.6), side * 0.9);
          R.add(head.clone().add(V(-0.35, -0.3, side * 0.2)), foot, 0.03);
        }
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
        const side = Math.sign(p.z) || (k === 0 ? -1 : 1);
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
      const between = s.kind === 'mainTopmastStaysail' || s.kind === 'mizzenStaysail';
      const x = between ? c.x + 3 : Math.min(23, c.x - 4);
      R.tag = `${s.name} sheet`;
      R.addSag(c, V(x, railTop(x) + 0.3, Math.sign(c.z) * (halfBreadth(x, 9) - 0.2)), 0.025, 0.02, 3);
    }
    // Spanker boom topping lifts and sheet; gaff vangs.
    const boomEnd = xform(V(rig.boom.L - 0.3, 0, 0), rig.boom.group, this.space);
    const peak = xform(V(rig.gaff.L - 0.2, 0, 0), rig.gaff.group, this.space);
    R.tag = 'boom topping lift';
    // One lift each side of the sail: offset across the boom at the bottom, across the mast at the top.
    // The leeward lift lies slack over the belly of the spanker.
    const belly = 1.3 * W.belly * state['set.spanker'];
    for (const side of [1, -1]) {
      const lo = xform(V(rig.boom.L - 0.3, 0, side * 0.45), rig.boom.group, this.space);
      const hi = this.P(Mz, 'lowerHead').add(V(0, 0, side * 0.9));
      const bow = side === W.lee ? belly + 0.35 : 0;
      let prev = lo;
      for (let k = 1; k <= 8; k++) {
        const t = k / 8;
        const p = lo.clone().lerp(hi, t);
        p.z += side * bow * Math.sin(Math.PI * Math.min(1, t * 1.25));
        R.add(prev, p, 0.03);
        prev = p;
      }
    }
    R.tag = 'spanker sheet';
    R.addSag(boomEnd, V(-29.0, railTop(-29) + 0.3, 0), 0.04, 0.01, 2);
    R.tag = 'gaff vang';
    R.addSag(peak, xform(V(rig.boom.L - 0.4, 0.15, 0), rig.boom.group, this.space), 0.02, 0.02, 3);
    R.addSag(peak, V(-28.5, railTop(-28.5) + 0.2, -W.lee * (halfBreadth(-28.5, railTop(-28.5)) - 0.1)), 0.02, 0.02, 3);
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
    B.end();
    this.updateSailLines(sails);
  }

  // Lines lying on the sails, rebuilt every frame from the sail surfaces.
  updateSailLines(sails) {
    const R = this.sailLines;
    R.begin();
    const inv = new THREE.Matrix4().copy(this.space.matrixWorld).invert();
    const m = new THREE.Matrix4();
    const a = new THREE.Vector3(), b = new THREE.Vector3(), n = new THREE.Vector3();
    const point = (s, i, j, off, front) => {
      const pos = s.geo.attributes.position, nor = s.geo.attributes.normal;
      const k = j * s.NU + i;
      a.fromBufferAttribute(pos, k);
      n.fromBufferAttribute(nor, k);
      if (n.dot(front) < 0) n.negate();
      return a.clone().addScaledVector(n, off).applyMatrix4(m);
    };
    const along = (s, i, off, front, r, extra) => {
      let prev = null;
      for (let j = s.NV - 1; j >= 0; j--) {
        const p = point(s, i, j, off, front);
        if (prev) R.add(prev, p, r);
        prev = p;
      }
      if (extra) R.add(prev, extra.clone().applyMatrix4(m), r);
    };
    const FWD = new THREE.Vector3(1, 0, 0);
    // Position on a sail grid at fractional (u, v), with its normal, in rig space.
    const sample = (s, u, v, off, front) => {
      const fi = u * (s.NU - 1), fj = v * (s.NV - 1);
      const i0 = Math.min(s.NU - 2, Math.floor(fi)), j0 = Math.min(s.NV - 2, Math.floor(fj));
      const fu = fi - i0, fv = fj - j0;
      // On the same two triangles the sail is drawn with (a-b-d and a-d-c), not a bilinear patch.
      const A = point(s, i0, j0, off, front), Bp = point(s, i0 + 1, j0, off, front);
      const C = point(s, i0, j0 + 1, off, front), D = point(s, i0 + 1, j0 + 1, off, front);
      if (fu >= fv) return A.addScaledVector(Bp.clone().sub(A), fu).addScaledVector(D.clone().sub(Bp), fv);
      return A.addScaledVector(C.clone().sub(A), fv).addScaledVector(D.clone().sub(C), fu);
    };
    // Bolt ropes round the free edges of a sail grid.
    const edgeRope = (s, cols, rowsFoot, r = 0.022) => {
      for (const i of cols) for (let j = 0; j < s.NV - 1; j++) R.add(point(s, i, j, 0, FWD), point(s, i, j + 1, 0, FWD), r);
      if (rowsFoot != null) for (let i = 0; i < s.NU - 1; i++) R.add(point(s, i, rowsFoot, 0, FWD), point(s, i + 1, rowsFoot, 0, FWD), r);
    };
    const BUNT = { course: [0.2, 0.4, 0.6, 0.8], topsail: [0.28, 0.5, 0.72], topgallant: [0.35, 0.65] };
    for (const s of sails.square) {
      if (!s.mesh.visible || !BUNT[s.kind]) continue;
      m.multiplyMatrices(inv, s.yard.group.matrixWorld);
      const hw = s.yard.L * 0.465;
      R.tag = `${s.name} buntline`;
      for (const u of BUNT[s.kind]) {
        const i = Math.round(u * (s.NU - 1));
        const z = -hw + (2 * hw * i) / (s.NU - 1);
        along(s, i, 0.06, FWD, 0.018, new THREE.Vector3(s.yard.r + 0.05, s.yard.r * 0.6, z));
      }
      R.tag = `${s.name} bolt rope`;
      edgeRope(s, [0, s.NU - 1], s.NV - 1);
      // Reef points: short lines hanging from both faces along each reef band of the topsails.
      if (s.reef && s.mesh.visible) {
        R.tag = `${s.name} reef points`;
        const width = s.yard.L * 0.93;
        const n = Math.round(width / 0.6);
        for (const v of [0.12, 0.24, 0.36]) {
          if (v > s.setNow - 0.02) continue;
          for (let k = 1; k < n; k++) {
            for (const off of [0.05, -0.05]) {
              // They hang against the canvas, following its curve.
              const vs = v / Math.max(0.05, s.setNow), dv = 0.26 / Math.max(1, s.height || 10);
              const off2 = off * 1.6;
              const p = sample(s, k / n, vs, off2, FWD), q = sample(s, k / n, Math.min(1, vs + dv), off2, FWD);
              R.add(p, q, 0.008);
            }
          }
        }
      }
      if (s.kind === 'course') {
        R.tag = `${s.name} leechline`;
        for (const u of [0.1, 0.9]) along(s, Math.round(u * (s.NU - 1)), -0.06, FWD, 0.016, null);
      }
      // Clewlines from the clews up abaft the sail to the yard.
      R.tag = `${s.name} clewline`;
      for (const i of [0, s.NU - 1]) {
        const c = point(s, i, s.NV - 1, -0.05, FWD);
        const side = i === 0 ? -1 : 1;
        R.add(c, new THREE.Vector3(-0.25, -s.yard.r, side * hw * 0.55).applyMatrix4(m), 0.018);
      }
    }
    // Bolt ropes on the leech and foot of the headsails and staysails.
    for (const s of sails.stay) {
      if (!s.mesh.visible) continue;
      m.multiplyMatrices(inv, s.mesh.matrixWorld);
      R.tag = `${s.name} bolt rope`;
      for (let j = 0; j < s.NV - 1; j++) R.add(point(s, s.NU - 1, j, 0, FWD), point(s, s.NU - 1, j + 1, 0, FWD), 0.02);
      for (let i = 0; i < s.NU - 1; i++) R.add(point(s, i, 0, 0, FWD), point(s, i + 1, 0, 0, FWD), 0.02);
    }
    // Spanker brails, round both faces of the sail from the leech to the mast.
    const sp = sails.spanker;
    if (sp.mesh.visible) {
      m.multiplyMatrices(inv, sp.mast.group.matrixWorld);
      R.tag = 'spanker bolt rope';
      for (let j = 0; j < sp.NV - 1; j++) R.add(point(sp, sp.NU - 1, j, 0, FWD), point(sp, sp.NU - 1, j + 1, 0, FWD), 0.02);
      R.tag = 'spanker brail';
      const side = new THREE.Vector3(0, 0, 1);
      for (const v of [0.3, 0.55, 0.8]) {
        const j = Math.round(v * (sp.NV - 1));
        for (const off of [0.06, -0.06]) {
          let prev = null;
          for (let i = sp.NU - 1; i >= 0; i--) {
            const p = point(sp, i, j, off, side);
            if (prev) R.add(prev, p, 0.016);
            prev = p;
          }
        }
      }
    }
    R.end();
  }
}
