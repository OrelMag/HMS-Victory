// Sails: square sails on yards, headsails/staysails on stays, spanker on gaff and boom.
// Each sail has a "set" value: 1 = set and drawing, 0 = furled.
import * as THREE from 'three';
import { mats } from './materials.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { deckY, railTop, halfBreadth } from './config.js';

const _m = new THREE.Matrix4();
const _m2 = new THREE.Matrix4();
const _v = new THREE.Vector3();

// Transform a point from `from` object space into `to` object space (both under the same root).
export function xform(p, from, to, out = new THREE.Vector3()) {
  out.copy(p);
  from.localToWorld(out);
  return to.worldToLocal(out);
}

function sailGeometry(nu, nv) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(nu * nv * 3), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(nu * nv * 2), 2));
  const idx = [];
  for (let j = 0; j < nv - 1; j++) for (let i = 0; i < nu - 1; i++) {
    const a = j * nu + i, b = a + 1, c = a + nu, d = c + 1;
    idx.push(a, b, d, a, d, c);
  }
  g.setIndex(idx);
  return g;
}

const smooth = (t) => t * t * (3 - 2 * t);

// A sail furled on its yard: fat in the bunt, lumpy between the gaskets that hold it, with
// the gaskets themselves (axis along y, like a capsule).
export function furledSail(L, R) {
  const M = mats();
  const prof = [];
  const n = 60, gap = 1.35;
  for (let i = 0; i <= n; i++) {
    const y = -L / 2 + (i / n) * L, t = (2 * y) / L;
    const bunt = 0.5 + 0.5 * Math.pow(Math.max(0, 1 - t * t), 0.7);
    const lump = 0.9 + 0.1 * Math.abs(Math.sin((Math.PI * y) / gap));
    const end = Math.sqrt(Math.max(0, 1 - Math.pow(Math.abs(t), 8)));
    prof.push(new THREE.Vector2(Math.max(0.001, R * bunt * lump * end), y));
  }
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 12), M.furl);
  body.castShadow = true;
  g.add(body);
  const rings = [];
  for (let y = gap * Math.ceil(-L / 2 / gap + 0.3); y < L / 2 - 0.3; y += gap) {
    const t = (2 * y) / L;
    const r = R * (0.5 + 0.5 * Math.pow(Math.max(0, 1 - t * t), 0.7)) * 0.9;
    rings.push(new THREE.TorusGeometry(r, 0.022, 4, 14).rotateX(Math.PI / 2).translate(0, y, 0));
  }
  if (rings.length) g.add(new THREE.Mesh(mergeGeometries(rings), M.rope));
  return g;
}

export class SquareSail {
  // foot: { yard } (clews at the yardarms of the yard below) or { drop } (course: metres below the yard)
  constructor(name, yard, foot, fullness) {
    const M = mats();
    this.name = name;
    this.yard = yard;
    this.foot = foot;
    this.fullness = fullness;
    // Upper sails are cut with a curved foot to clear the stays.
    this.roach = foot.yard ? 0.13 : 0.03;
    this.NU = 15; this.NV = 13;
    this.geo = sailGeometry(this.NU, this.NV);
    this.mesh = new THREE.Mesh(this.geo, M.canvas);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.frustumCulled = false;
    yard.group.add(this.mesh);
    const fl = yard.L * 0.86;
    const fr = Math.min(0.38, 0.12 + yard.L * 0.009);
    this.furl = furledSail(fl, fr * 1.15);
    this.furl.rotation.x = Math.PI / 2;
    this.furl.position.set(0.12, yard.r + fr * 0.7, 0);
    yard.group.add(this.furl);
    this.set = -1;
  }

  update(set, wind, time, luff = 0) {
    const NU = this.NU, NV = this.NV, y = this.yard;
    this.setNow = set;
    const show = set > 0.015;
    this.mesh.visible = show;
    const fs = 1 - smooth(Math.min(1, set / 0.35));
    this.furl.visible = fs > 0.02;
    this.furl.scale.set(Math.max(0.05, fs), 1, Math.max(0.05, fs));
    if (!show) return;

    const hw = y.L * 0.465;
    const H0 = new THREE.Vector3(0, -y.r, -hw), H1 = new THREE.Vector3(0, -y.r, hw);
    let F0, F1;
    if (this.foot.yard) {
      const ly = this.foot.yard;
      const lw = ly.L * 0.465;
      F0 = xform(new THREE.Vector3(0, ly.r, -lw), ly.group, y.group);
      F1 = xform(new THREE.Vector3(0, ly.r, lw), ly.group, y.group);
    } else {
      const d = this.foot.drop();
      F0 = new THREE.Vector3(0.6, -d, -hw * 0.74);
      F1 = new THREE.Vector3(0.6, -d, hw * 0.74);
    }
    const height = (F0.y + F1.y) / 2 * -1;
    this.height = Math.max(1, height);
    const belly = this.fullness * wind * set;
    const pos = this.geo.attributes.position.array, uv = this.geo.attributes.uv.array;
    const ripple = Math.sin(time * 2.1 + y.L) * 0.04 * wind;
    for (let j = 0; j < NV; j++) {
      const v = j / (NV - 1);
      for (let i = 0; i < NU; i++) {
        const u = i / (NU - 1);
        const k = j * NU + i;
        const hx = H0.x + (H1.x - H0.x) * u, hy = H0.y + (H1.y - H0.y) * u, hz = H0.z + (H1.z - H0.z) * u;
        const roach = Math.sin(Math.PI * u) * this.roach * height;
        const fx = F0.x + (F1.x - F0.x) * u, fy = F0.y + (F1.y - F0.y) * u + roach, fz = F0.z + (F1.z - F0.z) * u;
        const vv = v * set;
        let x = hx + (fx - hx) * vv;
        let py = hy + (fy - hy) * vv;
        let z = hz + (fz - hz) * vv;
        // Billow: zero at the head, deepest in the middle.
        const b = Math.sin(Math.PI * u) ** 0.9 * Math.sin(Math.PI * (0.06 + 0.82 * v));
        x += belly * b * (1 + ripple * Math.sin(u * 9 + time * 3));
        // Gathering wrinkles while clewing up.
        x += (1 - set) * 0.25 * Math.sin(u * Math.PI * 14) * v;
        // Tension wrinkles fanning in from the clews.
        for (const cu of [0, 1]) {
          const d = Math.hypot(u - cu, (v - 1) * 0.7);
          if (d < 0.35) x += belly * 0.06 * Math.sin(d * 45 + Math.atan2(v - 1, u - cu) * 6) * (1 - d / 0.35);
        }
        // Shivering when the wind is too far forward to fill her.
        if (luff > 0) x += luff * 0.3 * (0.5 + 0.5 * Math.sin(time * 9 + u * 7 + v * 4)) * Math.sin(Math.PI * u) * v;
        pos[k * 3] = x; pos[k * 3 + 1] = py; pos[k * 3 + 2] = z;
        uv[k * 2] = z / 2;
        uv[k * 2 + 1] = this.reef ? 1 - v : py / 4;
      }
    }
    if (this.colliders?.length || this.stays?.length) this.drape(pos);
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.computeVertexNormals();
  }

  // Canvas cannot pass behind the shrouds and backstays: where it would, it is pushed
  // forward so it lies against them, fading out over a short distance inboard.
  drape(pos) {
    const toSpace = _m.copy(this.space.matrixWorld).invert().multiply(this.yard.group.matrixWorld);
    const back = _m2.copy(toSpace).invert();
    const P = _v;
    const margin = 0.35, ramp = 2.0;
    for (let k = 0; k < pos.length; k += 3) {
      P.set(pos[k], pos[k + 1], pos[k + 2]).applyMatrix4(toSpace);
      let need = -Infinity;
      for (const [a, b] of this.colliders) {
        if (P.y < Math.min(a.y, b.y) || P.y > Math.max(a.y, b.y) || Math.sign(P.z) !== Math.sign(a.z)) continue;
        const t = (P.y - a.y) / (b.y - a.y);
        const sx = a.x + (b.x - a.x) * t, sz = Math.abs(a.z + (b.z - a.z) * t);
        const w = Math.min(1, Math.max(0, (Math.abs(P.z) - (sz - ramp)) / ramp));
        if (w <= 0) continue;
        const target = sx + margin;
        if (P.x < target) need = Math.max(need, P.x + (target - P.x) * w * w * (3 - 2 * w));
      }
      let moved = false;
      if (need > P.x) { P.x = need; moved = true; }
      // Stays ahead: the canvas bellies up against them but not through them.
      for (const [a, b] of this.stays || []) {
        if (P.y < Math.min(a.y, b.y) || P.y > Math.max(a.y, b.y)) continue;
        const t = (P.y - a.y) / (b.y - a.y);
        const sx = a.x + (b.x - a.x) * t, sz = a.z + (b.z - a.z) * t;
        const w = 1 - Math.min(1, Math.abs(P.z - sz) / 2.2);
        const limit = sx - 0.3;
        if (w > 0 && P.x > limit) { P.x -= (P.x - limit) * w * w * (3 - 2 * w); moved = true; }
      }
      if (moved) {
        P.applyMatrix4(back);
        pos[k] = P.x; pos[k + 1] = P.y; pos[k + 2] = P.z;
      }
    }
  }
}

// Triangular headsail / staysail in ship-body space.
export class StaySail {
  constructor(name, parent, tack, head, clew, fullness) {
    this.name = name;
    this.tack = tack; this.head = head; this.clew = clew;
    this.fullness = fullness;
    this.NU = 12; this.NV = 9;
    this.geo = sailGeometry(this.NU, this.NV);
    this.mesh = new THREE.Mesh(this.geo, mats().canvas);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    parent.add(this.mesh);
  }

  update(set, wind, time, side = 1) {
    this.mesh.visible = set > 0.015;
    if (!this.mesh.visible) return;
    const T = this.tack, Hd = T.clone().lerp(this.head, set);
    // Clew goes to whichever side is leeward.
    const clew = this.clew.clone();
    clew.z = Math.abs(clew.z) * side;
    const C = T.clone().lerp(clew, 0.15 + 0.85 * set);
    this.side = side;
    const n = new THREE.Vector3().subVectors(Hd, T).cross(new THREE.Vector3().subVectors(C, T)).normalize();
    if (n.z * side < 0) n.negate();
    const luff = Hd.distanceTo(T);
    const belly = this.fullness * wind * set * luff * 0.06;
    const pos = this.geo.attributes.position.array, uv = this.geo.attributes.uv.array;
    const NU = this.NU, NV = this.NV;
    const p = new THREE.Vector3(), a = new THREE.Vector3();
    for (let j = 0; j < NV; j++) {
      const s = j / (NV - 1); // toward the head
      for (let i = 0; i < NU; i++) {
        const r = i / (NU - 1); // luff -> leech
        a.copy(T).lerp(C, r);
        p.copy(a).lerp(Hd, s);
        const b = Math.sin(Math.PI * r) * Math.sin(Math.PI * Math.min(1, s * 0.9 + 0.08)) * (1 - s * 0.4);
        p.addScaledVector(n, belly * b * (1 + 0.03 * Math.sin(time * 3 + r * 8)));
        const k = j * NU + i;
        pos[k * 3] = p.x; pos[k * 3 + 1] = p.y; pos[k * 3 + 2] = p.z;
        uv[k * 2] = r * T.distanceTo(this.clew) / 2;
        uv[k * 2 + 1] = s * luff / 4;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.computeVertexNormals();
  }
}

// Spanker: quadrilateral between gaff and boom, brailed in toward the mast when furled.
export class Spanker {
  constructor(mast, gaff, boom) {
    this.name = 'spanker';
    this.mast = mast; this.gaff = gaff; this.boom = boom;
    this.NU = 12; this.NV = 12;
    this.geo = sailGeometry(this.NU, this.NV);
    this.mesh = new THREE.Mesh(this.geo, mats().canvas);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    mast.group.add(this.mesh);
    const M = mats();
    this.brail = new THREE.Mesh(new THREE.CapsuleGeometry(0.35, 1, 4, 8), M.furl);
    this.brail.castShadow = true;
    mast.group.add(this.brail);
  }

  update(set, wind, time, side = 1) {
    const g = this.mast.group;
    const throat = xform(new THREE.Vector3(0.3, -0.15, 0), this.gaff.group, g);
    const peak = xform(new THREE.Vector3(this.gaff.L - 0.3, -0.15, 0), this.gaff.group, g);
    const tack = xform(new THREE.Vector3(0.3, 0.2, 0), this.boom.group, g);
    const clew = xform(new THREE.Vector3(this.boom.L - 2.0, 0.2, 0), this.boom.group, g);
    // Brailed sail bundle hangs along the mast.
    const bs = 1 - smooth(Math.min(1, set / 0.4));
    this.brail.visible = bs > 0.02;
    const mid = throat.clone().lerp(tack, 0.5).add(new THREE.Vector3(-0.5, 0, 0));
    this.brail.position.copy(mid);
    this.brail.scale.set(bs, (throat.y - tack.y - 0.7) / 1.7, bs);
    this.mesh.visible = set > 0.015;
    if (!this.mesh.visible) return;
    const n = new THREE.Vector3(0, 0, side);
    const pos = this.geo.attributes.position.array, uv = this.geo.attributes.uv.array;
    const NU = this.NU, NV = this.NV;
    const lo = new THREE.Vector3(), hi = new THREE.Vector3(), p = new THREE.Vector3();
    const belly = 1.3 * wind * set;
    for (let j = 0; j < NV; j++) {
      const v = j / (NV - 1);
      for (let i = 0; i < NU; i++) {
        const u = (i / (NU - 1)) * set;
        lo.copy(tack).lerp(clew, u);
        hi.copy(throat).lerp(peak, u);
        p.copy(lo).lerp(hi, v);
        const b = Math.sin(Math.PI * Math.min(1, u / Math.max(set, 0.01))) * Math.sin(Math.PI * (0.08 + 0.84 * v));
        p.addScaledVector(n, belly * b + (1 - set) * 0.2 * Math.sin(u * 30));
        const k = j * NU + i;
        pos[k * 3] = p.x; pos[k * 3 + 1] = p.y; pos[k * 3 + 2] = p.z;
        uv[k * 2] = p.x / 2;
        uv[k * 2 + 1] = p.y / 4;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.computeVertexNormals();
  }
}

// Studding sail: set outboard of a square sail, between the yardarm above and the boom end
// of the yard below (or, for a lower studding sail, a boom swung out from the ship's side).
export class StunSail {
  constructor(name, yard, footYard, side, lower = null) {
    this.name = name;
    this.yard = yard; this.footYard = footYard; this.side = side; this.lower = lower;
    this.NU = 8; this.NV = 10;
    this.geo = sailGeometry(this.NU, this.NV);
    this.mesh = new THREE.Mesh(this.geo, mats().canvas);
    this.mesh.castShadow = true;
    this.mesh.frustumCulled = false;
    yard.group.add(this.mesh);
    if (lower) {
      // The lower studding-sail boom, swung out from the fore channels.
      this.boom = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.08, 1, 8).translate(0, 0.5, 0).rotateZ(-Math.PI / 2), mats().spar);
      this.boom.castShadow = true;
      lower.parent.add(this.boom);
    }
  }

  update(set, wind, time) {
    const on = set > 0.02;
    this.mesh.visible = on;
    if (this.boom) this.boom.visible = on;
    if (!on) return;
    const y = this.yard, sd = this.side;
    const L = y.L, inner = L * 0.465, boomEnd = L / 2 + 2.4 * y.mast.scale;
    const wHead = Math.min(boomEnd - inner + 0.6, L * 0.32);
    const H0 = new THREE.Vector3(0.25, -y.r, sd * inner);
    const H1 = new THREE.Vector3(0.25, -y.r, sd * (inner + wHead * set));
    let F0, F1;
    if (this.footYard) {
      const fy = this.footYard;
      const fEnd = fy.L / 2 + 2.4 * fy.mast.scale;
      F0 = xform(new THREE.Vector3(0.25, fy.r, sd * fy.L * 0.465), fy.group, y.group);
      F1 = xform(new THREE.Vector3(0.25, fy.r, sd * (fy.L * 0.465 + (fEnd - fy.L * 0.465) * set)), fy.group, y.group);
    } else {
      // Lower studding sail: foot spread by the boom out from the side.
      const { root, dropTo, reach } = this.lower;
      const zIn = inner * 0.78 + 0.6;
      F0 = new THREE.Vector3(0.6, -dropTo(), sd * zIn);
      F1 = new THREE.Vector3(0.6, -dropTo(), sd * (zIn + reach * set));
      const a = xform(root.clone(), this.lower.parent, this.lower.parent);
      const b = xform(F1.clone(), y.group, this.lower.parent);
      this.boom.position.copy(a);
      this.boom.scale.set(a.distanceTo(b), 1, 1);
      this.boom.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), b.clone().sub(a).normalize());
    }
    const pos = this.geo.attributes.position.array, uv = this.geo.attributes.uv.array;
    const NU = this.NU, NV = this.NV;
    const p = new THREE.Vector3(), hi = new THREE.Vector3(), lo = new THREE.Vector3();
    for (let j = 0; j < NV; j++) {
      const v = j / (NV - 1);
      for (let i = 0; i < NU; i++) {
        const u = i / (NU - 1);
        hi.copy(H0).lerp(H1, u);
        lo.copy(F0).lerp(F1, u);
        p.copy(hi).lerp(lo, v);
        p.x += 1.1 * wind * set * Math.sin(Math.PI * u) * Math.sin(Math.PI * (0.06 + 0.82 * v));
        const k = j * NU + i;
        pos[k * 3] = p.x; pos[k * 3 + 1] = p.y; pos[k * 3 + 2] = p.z;
        uv[k * 2] = p.z / 2;
        uv[k * 2 + 1] = p.y / 4;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.computeVertexNormals();
  }
}

// Build every sail for the rig.
export function buildSails(rig, body) {
  const sails = { square: [], stay: [], spanker: null };
  const full = { course: 1.7, topsail: 2.0, topgallant: 1.3, royal: 0.8 };
  for (const mast of Object.values(rig.masts)) {
    const Y = mast.yards;
    const add = (key, footYard) => {
      if (!Y[key]) return;
      if (!footYard && key !== 'course') return;
      const foot = footYard ? { yard: footYard } : {
        drop: () => {
          const yy = Y.course.group.position.y;
          return yy - (railTop(mast.x) + 2.2);
        },
      };
      const s = new SquareSail(`${mast.name}-${key}`, Y[key], foot, full[key] * mast.scale);
      s.mastName = mast.name; s.kind = key;
      if (key === 'topsail') { s.reef = true; s.mesh.material = mats().canvasReef; }
      sails.square.push(s);
    };
    if (mast.name !== 'mizzen') add('course');
    add('topsail', Y.course);
    add('topgallant', Y.topsail);
    add('royal', Y.topgallant);
  }

  // Spritsail under the bowsprit.
  {
    const y = rig.spritYard;
    const s = new SquareSail('spritsail', y, { drop: () => 3.0 }, 0.8);
    s.kind = 'sprit';
    sails.square.push(s);
  }

  // Headsails & staysails (points in rig/body space).
  const bs = rig.bowsprit;
  const fore = rig.masts.fore, main = rig.masts.main, miz = rig.masts.mizzen;
  rig.group.updateMatrixWorld(true);
  const P = (mast, key) => xform(mast.local[key].clone(), mast.group, rig.group);
  const stay = (name, tack, head, clew, f) => {
    const s = new StaySail(name, rig.group, tack, head, clew, f);
    s.kind = name;
    sails.stay.push(s);
  };
  const along = (a, b, t) => a.clone().lerp(b, t);
  const foreTM = P(fore, 'topmastShroudHead'), foreTG = P(fore, 'tgHead');
  stay('foreTopmastStaysail', along(bs.cap, foreTM, 0.04), along(bs.cap, foreTM, 0.82),
    new THREE.Vector3(fore.x + 4.5, deckY('qd', 24) + 5.0, 1.8), 1.0);
  stay('jib', along(bs.jibEnd, foreTM, 0.05), along(bs.jibEnd, foreTM, 0.78),
    new THREE.Vector3(fore.x + 7.0, deckY('qd', 24) + 8.0, 4.0), 1.0);
  stay('flyingJib', along(bs.flyEnd, foreTG, 0.04), along(bs.flyEnd, foreTG, 0.62),
    new THREE.Vector3(fore.x + 10.5, deckY('qd', 24) + 13, 6.0), 0.9);
  const mainTM = P(main, 'topmastShroudHead'), foreTop = P(fore, 'lowerHead');
  stay('mainTopmastStaysail', along(foreTop, mainTM, 0.14), along(foreTop, mainTM, 0.85),
    new THREE.Vector3(main.x + 4.5, main.h.topY + 1.5, 0.6), 0.9);
  const mizTM = P(miz, 'topmastShroudHead'), mainTop = P(main, 'topBack');
  stay('mizzenStaysail', along(mainTop, mizTM, 0.14), along(mainTop, mizTM, 0.8),
    new THREE.Vector3(miz.x + 3, miz.h.topY + 0.5, 0.6), 0.8);

  sails.spanker = new Spanker(miz, rig.gaff, rig.boom);

  // Studding sails on the fore and main: topmast and topgallant both sides; lower on the fore.
  sails.stun = [];
  for (const mast of [fore, main]) {
    const Y = mast.yards;
    for (const side of [1, -1]) {
      const add = (kind, s) => { s.kind = kind; s.mastName = mast.name; sails.stun.push(s); };
      add('stunTop', new StunSail(`${mast.name}-topmast-stunsail`, Y.topsail, Y.course, side));
      add('stunTg', new StunSail(`${mast.name}-topgallant-stunsail`, Y.topgallant, Y.topsail, side));
      if (mast === fore) {
        const yc = deckY('upper', mast.x) + 1.95;
        add('stunLower', new StunSail(`fore-lower-stunsail`, Y.course, null, side, {
          parent: rig.group,
          root: new THREE.Vector3(mast.x + 0.5, yc + 0.4, side * (halfBreadth(mast.x + 0.5, yc) + 0.9)),
          dropTo: () => Y.course.group.position.y - (railTop(mast.x) + 1.4),
          reach: 7.5,
        }));
      }
    }
  }
  return sails;
}
