// The sailor you steer in the isometric view: figure, walkability map of every deck, ladders.
import * as THREE from 'three';
import {
  DECK, HATCHES, COMPANIONS, GANGWAY, MASTS, QD_FWD, FC_AFT, POOP_FWD, ladderwayLadder, holdLadder, HOLD_FLOOR,
  deckY, halfBreadth, xStern, xBow,
} from './config.js';
import { floor } from './furnish.js';
import { roomWallSegments } from './rooms.js';

export const LEVEL_ORDER = ['hold', 'orlop', 'lower', 'middle', 'upper', 'qd', 'poop'];
const RADIUS = 0.24;            // the sailor's body
const X0 = -31, Z0 = -8.6, CELL = 0.1, NX = 620, NZ = 172;

// ---------- The figure ----------
function buildFigure() {
  const g = new THREE.Group();
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 });
  const jacket = mat('#22335a'), duck = mat('#e4ddcc'), skin = mat('#d9a882'), black = mat('#151515'), shirt = mat('#d8d0c0');
  const legs = [], arms = [];
  for (const s of [1, -1]) {
    const leg = new THREE.Group();
    leg.position.set(0, 0.93, s * 0.1);
    const m = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.72, 4, 8), duck);
    m.position.y = -0.44;
    const shoe = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.07, 0.11), black);
    shoe.position.set(0.05, -0.9, 0);
    leg.add(m, shoe);
    g.add(leg);
    legs.push(leg);
    const arm = new THREE.Group();
    arm.position.set(0, 1.44, s * 0.25);
    const a = new THREE.Mesh(new THREE.CapsuleGeometry(0.058, 0.48, 4, 8), jacket);
    a.position.y = -0.3;
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), skin);
    hand.position.y = -0.6;
    arm.add(a, hand);
    g.add(arm);
    arms.push(arm);
  }
  const torso = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.58, 0.42), jacket);
  torso.position.y = 1.2;
  const shirtFront = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.3, 0.14), shirt);
  shirtFront.position.set(0.125, 1.32, 0);
  const kerchief = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.025, 6, 12), black);
  kerchief.rotation.x = Math.PI / 2;
  kerchief.position.y = 1.5;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 12, 10), skin);
  head.position.y = 1.62;
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.118, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat('#3a2614'));
  hair.position.y = 1.625;
  hair.rotation.z = 0.3;
  const queue = new THREE.Mesh(new THREE.CapsuleGeometry(0.02, 0.18, 3, 6), mat('#3a2614'));
  queue.position.set(-0.12, 1.5, 0);
  const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.14, 0.1, 14), black);
  crown.position.y = 1.74;
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.015, 16), black);
  brim.position.y = 1.695;
  const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(0.142, 0.142, 0.03, 14), mat('#e8e0c8'));
  ribbon.position.y = 1.71;
  g.add(torso, shirtFront, kerchief, head, hair, queue, crown, brim, ribbon);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  g.userData = { legs, arms };
  return g;
}

// ---------- Walkability map ----------
function deckRange(level) {
  switch (level) {
    case 'hold': return [-20.6, 19.6];
    case 'orlop': return [xStern(DECK.orlop) + 0.5, xBow(DECK.orlop) - 0.7];
    case 'lower': case 'middle': return [xStern(DECK[level]) + 0.45, xBow(DECK[level]) - 0.6];
    case 'upper': return [xStern(DECK.upper) + 0.8, xBow(DECK.upper) - 0.8];
    case 'qd': return [xStern(DECK.qd) + 0.6, xBow(DECK.qd) - 0.6];
    default: return [xStern(DECK.poop) + 0.6, POOP_FWD - 0.15];
  }
}
const weather = (level) => level === 'qd' || level === 'poop';

function holesFor(level) {
  if (weather(level) || level === 'hold') return [];
  if (level === 'orlop') return HATCHES.filter((h) => h.x > -14 && h.x < 15);
  return HATCHES;
}

export class WalkMap {
  constructor() {
    this.grids = Object.fromEntries(LEVEL_ORDER.map((l) => [l, new Uint8Array(NX * NZ)]));
    this.portals = [];
  }

  cell(x, z) {
    const i = Math.floor((x - X0) / CELL), j = Math.floor((z - Z0) / CELL);
    return i < 0 || j < 0 || i >= NX || j >= NZ ? -1 : j * NX + i;
  }
  free(level, x, z) {
    const c = this.cell(x, z);
    return c >= 0 && this.grids[level][c] === 1;
  }

  build(ship) {
    const shapes = Object.fromEntries(LEVEL_ORDER.map((l) => [l, []]));
    const box = (l, cx, cz, hx, hz, rot = 0) => shapes[l].push({ t: 'box', cx, cz, hx, hz, c: Math.cos(rot), s: Math.sin(rot) });
    const circle = (l, cx, cz, r) => shapes[l].push({ t: 'circle', cx, cz, r });
    const seg = (l, ax, az, bx, bz, w = 0.06) => shapes[l].push({ t: 'seg', ax, az, bx, bz, w });

    // Hatchways and their coamings.
    for (const l of LEVEL_ORDER) for (const h of holesFor(l)) box(l, h.x, 0, h.w / 2 + 0.2, h.d / 2 + 0.2);
    // Guns, oriented square to the side.
    const S = ship.cur;
    const tierLevel = { lower: 'lower', middle: 'middle', upper: 'upper', qd: 'qd', fc: 'qd', carronade: 'qd' };
    for (const p of ship.guns.ports) {
      const t = p.tier;
      // Barrel and carriage span from the cascabel to the hull (the muzzle may be outboard).
      const out = -0.9 + S.runOut * 1.6;
      const a = out - t.len - 0.15, bEnd = Math.min(out, 0);
      const c = p.basis.p.clone().addScaledVector(p.out, (a + bEnd) / 2);
      box(tierLevel[t.name], c.x, c.z, (bEnd - a) / 2, t.carronade ? 0.4 : 0.5, Math.atan2(p.out.z, p.out.x));
    }
    // Masts go through every deck; pillars between the gun decks.
    for (const m of Object.values(MASTS)) for (const l of LEVEL_ORDER) if (l !== 'poop' || m.x < POOP_FWD) circle(l, m.x, 0, 0.62);
    for (const [lo] of [['orlop'], ['lower'], ['middle']]) {
      for (let x = -20; x < 20; x += 2.5) {
        if (HATCHES.some((h) => Math.abs(x - h.x) < h.w / 2 + 0.3)) continue;
        if (lo === 'orlop' && (x < -14 || x > 15)) continue;
        circle(lo, x, 0, 0.12);
      }
    }
    // Capstans and quarterdeck fittings.
    for (const l of ['middle', 'lower']) { circle(l, -6.4, 0, l === 'middle' ? 0.95 : 0.8); circle(l, 3.7, 0, l === 'middle' ? 0.72 : 0.62); }
    box('qd', POOP_FWD - 1.0, 0, 0.95, 0.55);
    box('qd', POOP_FWD + 1.0, 0, 0.4, 0.65);
    box('qd', -8.8, 0, 1.35, 1.05);
    box('qd', FC_AFT + 0.8, 0, 0.5, 0.5);
    box('qd', 20.3, 1.6, 0.35, 0.35);
    // Ladders block their own footprint; the ends are where you get on and off.
    this.portals = [];
    // A portal: stand at `foot` facing footDir to climb up, or at `top` facing topDir to go down.
    const portal = (lo, hi, a, b, foot, footDir, top, topDir) => {
      box(lo, (a.x + b.x) / 2, (a.z + b.z) / 2, Math.abs(b.x - a.x) / 2 + 0.42 * (a.x === b.x ? 1 : 0) + 0.05, Math.abs(b.z - a.z) / 2 + 0.42 * (a.z === b.z ? 1 : 0) + 0.05);
      this.portals.push({ lo, hi, rail: [a, b], foot, footDir, top, topDir });
    };
    const stack = ['orlop', 'lower', 'middle', 'upper'];
    for (let i = 0; i < stack.length - 1; i++) {
      for (const h of HATCHES.filter((q) => q.ladder)) {
        if (stack[i] === 'orlop' && !(h.x > -14 && h.x < 15)) continue;
        const L = ladderwayLadder(h, i % 2 ? -1 : 1), sd = L.side;
        // Up: walk to the foot (beside the hatch) and on towards the centreline. Down: from the
        // deck above, stand on the same side of the opening and walk into it.
        portal(stack[i], stack[i + 1], { x: L.x, z: L.zFoot }, { x: L.x, z: L.zTop },
          { x: L.x, z: L.zFoot + sd * 0.32 }, { x: 0, z: -sd }, { x: L.x, z: sd * (h.d / 2 + 0.68) }, { x: 0, z: -sd });
      }
    }
    {
      const L = holdLadder(), h = L.hatch;
      portal('hold', 'orlop', { x: L.x, z: L.zFoot }, { x: L.x, z: L.zTop },
        { x: L.x, z: L.zFoot - 0.32 }, { x: 0, z: 1 }, { x: L.x, z: -(h.d / 2 + 0.68) }, { x: 0, z: 1 });
    }
    for (const c of COMPANIONS) {
      for (const s of [1, -1]) {
        const dir = Math.sign(c.run), z = s * c.z;
        portal(c.from, c.to, { x: c.x, z }, { x: c.x + c.run, z },
          { x: c.x - dir * 0.5, z }, { x: dir, z: 0 }, { x: c.x + c.run + dir * 0.6, z }, { x: -dir, z: 0 });
      }
    }

    // Bulkheads, with their doorways open (gun-deck ones are down when cleared for action).
    const levelOf = { qd: 'qd', upper: 'upper', middle: 'middle', lower: 'lower', orlop: 'orlop', hold: 'hold' };
    for (const w of roomWallSegments()) {
      const l = levelOf[w.deck];
      if (!l || (ship.isCleared && l !== 'orlop' && l !== 'hold')) continue;
      const len = Math.hypot(w.b.x - w.a.x, w.b.z - w.a.z);
      const at = (d) => [w.a.x + (w.b.x - w.a.x) * d / len, w.a.z + (w.b.z - w.a.z) * d / len];
      if (w.door == null) seg(l, w.a.x, w.a.z, w.b.x, w.b.z);
      else {
        const d0 = Math.max(0, w.door - 0.5), d1 = Math.min(len, w.door + 0.5);
        if (d0 > 0.05) seg(l, w.a.x, w.a.z, ...at(d0));
        if (d1 < len - 0.05) seg(l, ...at(d1), w.b.x, w.b.z);
      }
    }
    // The captain's bulkhead under the poop, door in the middle.
    {
      const x = POOP_FWD - 4.2, hw = halfBreadth(x, deckY('qd', x) + 1) - 0.3;
      seg('qd', x, -hw, x, -0.5); seg('qd', x, 0.5, x, hw);
    }
    // Furniture (props whose underside is low enough to walk into).
    const bb = new THREE.Box3(), m = new THREE.Matrix4();
    ship.furnishing.traverse((o) => {
      if (!o.isInstancedMesh || ['hammock', 'lantern', 'plate'].includes(o.name)) return;
      if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
      for (let i = 0; i < o.count; i++) {
        o.getMatrixAt(i, m);
        if (m.elements[0] === 0 && m.elements[5] === 0) continue; // struck down
        bb.copy(o.geometry.boundingBox).applyMatrix4(m);
        const l = LEVEL_ORDER.slice().reverse().find((lv) => {
          const fy = floor(lv === 'qd' ? 'qd' : lv, (bb.min.x + bb.max.x) / 2, 0);
          return bb.min.y > fy - 0.4 && bb.min.y < fy + 1.0;
        });
        if (!l || bb.max.y - bb.min.y < 0.05) continue;
        box(l, (bb.min.x + bb.max.x) / 2, (bb.min.z + bb.max.z) / 2, (bb.max.x - bb.min.x) / 2, (bb.max.z - bb.min.z) / 2);
      }
    });

    // Rasterise: deck surface inside the hull, minus the obstacles grown by the sailor's radius.
    for (const l of LEVEL_ORDER) {
      const G = this.grids[l];
      const [xa, xb] = deckRange(l);
      const name = l;
      for (let i = 0; i < NX; i++) {
        const x = X0 + (i + 0.5) * CELL;
        const inX = x > xa && x < xb;
        const y = l === 'hold' ? HOLD_FLOOR : deckY(name, x);
        const hw = halfBreadth(x, y + 0.5) - (weather(l) || l === 'upper' ? 0.32 : 0) - 0.35;
        for (let j = 0; j < NZ; j++) {
          const z = Z0 + (j + 0.5) * CELL;
          let ok = inX && Math.abs(z) < hw;
          if (ok && l === 'qd' && x > QD_FWD && x < FC_AFT) ok = Math.abs(z) > hw + 0.35 - GANGWAY + 0.25;
          G[j * NX + i] = ok ? 1 : 0;
        }
      }
      for (const sh of shapes[l]) this.stamp(G, sh);
    }
  }

  stamp(G, sh) {
    const R = RADIUS;
    let x0, x1, z0, z1;
    if (sh.t === 'circle') { x0 = sh.cx - sh.r - R; x1 = sh.cx + sh.r + R; z0 = sh.cz - sh.r - R; z1 = sh.cz + sh.r + R; }
    else if (sh.t === 'box') {
      const ex = Math.abs(sh.c) * sh.hx + Math.abs(sh.s) * sh.hz + R, ez = Math.abs(sh.s) * sh.hx + Math.abs(sh.c) * sh.hz + R;
      x0 = sh.cx - ex; x1 = sh.cx + ex; z0 = sh.cz - ez; z1 = sh.cz + ez;
    } else { x0 = Math.min(sh.ax, sh.bx) - R - sh.w; x1 = Math.max(sh.ax, sh.bx) + R + sh.w; z0 = Math.min(sh.az, sh.bz) - R - sh.w; z1 = Math.max(sh.az, sh.bz) + R + sh.w; }
    const i0 = Math.max(0, Math.floor((x0 - X0) / CELL)), i1 = Math.min(NX - 1, Math.floor((x1 - X0) / CELL));
    const j0 = Math.max(0, Math.floor((z0 - Z0) / CELL)), j1 = Math.min(NZ - 1, Math.floor((z1 - Z0) / CELL));
    for (let i = i0; i <= i1; i++) {
      const x = X0 + (i + 0.5) * CELL;
      for (let j = j0; j <= j1; j++) {
        const z = Z0 + (j + 0.5) * CELL;
        let hit;
        if (sh.t === 'circle') hit = Math.hypot(x - sh.cx, z - sh.cz) < sh.r + R;
        else if (sh.t === 'box') {
          const dx = x - sh.cx, dz = z - sh.cz;
          const lx = dx * sh.c + dz * sh.s, lz = -dx * sh.s + dz * sh.c;
          hit = Math.abs(lx) < sh.hx + R && Math.abs(lz) < sh.hz + R;
        } else {
          const vx = sh.bx - sh.ax, vz = sh.bz - sh.az, L2 = vx * vx + vz * vz || 1;
          const t = Math.max(0, Math.min(1, ((x - sh.ax) * vx + (z - sh.az) * vz) / L2));
          hit = Math.hypot(x - (sh.ax + vx * t), z - (sh.az + vz * t)) < sh.w + R;
        }
        if (hit) G[j * NX + i] = 0;
      }
    }
  }
}

// ---------- The sailor ----------
export class Sailor {
  constructor(parent) {
    this.figure = buildFigure();
    this.figure.visible = false;
    parent.add(this.figure);
    this.map = new WalkMap();
    this.level = 'qd';
    this.x = -9.5; this.z = 2.4;
    this.heading = 0;
    this.phase = 0;
    this.climb = null;
    this.target = null;
    this.blocked = 0;
    this.lastPortal = null;
    this.version = -1;
  }

  setActive(on, ship) {
    this.figure.visible = on;
    if (on) this.rebuild(ship);
  }

  rebuild(ship) {
    this.map.build(ship);
    this.version = ship.layoutVersion;
    if (!this.map.free(this.level, this.x, this.z)) this.respawn();
  }

  respawn() {
    // Find the nearest free spot on the current deck (or the quarterdeck).
    for (const l of [this.level, 'qd']) {
      for (let r = 0; r < 12; r += 0.2) {
        for (let a = 0; a < Math.PI * 2; a += 0.4) {
          const x = this.x + Math.cos(a) * r, z = this.z + Math.sin(a) * r;
          if (this.map.free(l, x, z)) { this.level = l; this.x = x; this.z = z; return; }
        }
      }
    }
  }

  floorY(level = this.level, x = this.x, z = this.z) { return floor(level, x, z); }

  walkTo(x, z) { this.target = { x, z }; this.blocked = 0; }

  // move: {x, z} desired direction (ship frame), run: bool.
  update(dt, move, run, ship) {
    if (ship.layoutVersion !== this.version) this.rebuild(ship);
    const U = this.figure.userData;
    if (this.climb) {
      const c = this.climb;
      c.t = Math.min(1, c.t + dt / c.dur);
      const k = c.t;
      const p = c.path;
      const seg = Math.min(p.length - 2, Math.floor(k * (p.length - 1)));
      const f = k * (p.length - 1) - seg;
      const a = p[seg], b = p[seg + 1];
      this.x = a.x + (b.x - a.x) * f; this.z = a.z + (b.z - a.z) * f;
      const y = a.y + (b.y - a.y) * f;
      this.figure.position.set(this.x, y, this.z);
      this.phase += dt * 9;
      U.arms.forEach((arm, i) => { arm.rotation.z = 2.3 + Math.sin(this.phase + i * Math.PI) * 0.35; });
      U.legs.forEach((leg, i) => { leg.rotation.z = 0.4 + Math.sin(this.phase + i * Math.PI) * 0.4; });
      if (c.t >= 1) {
        this.level = c.to; this.climb = null; this.lastPortal = c.portalKey;
        U.arms.forEach((arm) => { arm.rotation.z = 0; });
      }
      return;
    }
    let mx = move.x, mz = move.z;
    if (this.target && !mx && !mz) {
      const dx = this.target.x - this.x, dz = this.target.z - this.z, d = Math.hypot(dx, dz);
      if (d < 0.12) this.target = null; else { mx = dx / d; mz = dz / d; }
    } else if (mx || mz) this.target = null;
    const len = Math.hypot(mx, mz);
    let speed = 0;
    if (len > 0.01) {
      mx /= len; mz /= len;
      speed = run ? 3.2 : 1.5;
      const step = speed * dt;
      const nx = this.x + mx * step, nz = this.z + mz * step;
      let moved = false;
      if (this.map.free(this.level, nx, nz)) { this.x = nx; this.z = nz; moved = true; }
      else if (this.map.free(this.level, nx, this.z)) { this.x = nx; moved = true; }
      else if (this.map.free(this.level, this.x, nz)) { this.z = nz; moved = true; }
      if (!moved && this.target && (this.blocked += dt) > 0.5) this.target = null;
      this.heading = Math.atan2(-mz, mx);
      this.checkPortals(mx, mz, ship);
    }
    // Walk cycle.
    const amp = Math.min(1, speed / 1.5) * (speed > 2 ? 0.75 : 0.55);
    if (speed > 0) this.phase += dt * (speed > 2 ? 11 : 7.5);
    U.legs.forEach((leg, i) => { leg.rotation.z = Math.sin(this.phase + i * Math.PI) * amp; });
    U.arms.forEach((arm, i) => { arm.rotation.z = -Math.sin(this.phase + i * Math.PI) * amp * 0.8; });
    if (!speed) { U.legs.forEach((l) => { l.rotation.z *= 0.8; }); U.arms.forEach((a) => { a.rotation.z *= 0.8; }); }
    const rot = this.figure.rotation.y;
    let d = this.heading - rot;
    d = Math.atan2(Math.sin(d), Math.cos(d));
    this.figure.rotation.y = rot + d * Math.min(1, dt * 12);
    this.figure.position.set(this.x, this.floorY(), this.z);
  }

  checkPortals(mx, mz, ship) {
    for (let i = 0; i < this.map.portals.length; i++) {
      const p = this.map.portals[i];
      for (const end of ['foot', 'top']) {
        const lvl = end === 'foot' ? p.lo : p.hi;
        if (lvl !== this.level) continue;
        const pt = p[end], dir = end === 'foot' ? p.footDir : p.topDir;
        const key = `${i}${end}`;
        const near = Math.hypot(this.x - pt.x, this.z - pt.z) < 0.55;
        if (!near) { if (this.lastPortal === key) this.lastPortal = null; continue; }
        if (this.lastPortal === key || mx * dir.x + mz * dir.z < 0.6) continue;
        // Climb: walk to the ladder, up (or down) it, and step off at the other end.
        const other = end === 'foot' ? p.top : p.foot;
        const toLvl = end === 'foot' ? p.hi : p.lo;
        const [ra, rb] = p.rail;
        const lo = { x: ra.x, y: floor(p.lo, ra.x, ra.z), z: ra.z }, hi = { x: rb.x, y: floor(p.hi, rb.x, rb.z), z: rb.z };
        const start = { x: pt.x, y: this.floorY(), z: pt.z }, finish = { x: other.x, y: floor(toLvl, other.x, other.z), z: other.z };
        const path = end === 'foot' ? [start, lo, hi, finish] : [start, hi, lo, finish];
        this.climb = { path, t: 0, dur: 1.9, to: toLvl, portalKey: `${i}${end === 'foot' ? 'top' : 'foot'}` };
        const fx = (end === 'foot' ? 1 : -1) * (rb.x - ra.x), fz = (end === 'foot' ? 1 : -1) * (rb.z - ra.z);
        this.heading = Math.atan2(-fz, fx);
        this.figure.rotation.y = this.heading;
        this.target = null;
        return;
      }
    }
  }
}
