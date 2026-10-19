// Sails: square sails on yards, headsails/staysails on stays, spanker on gaff and boom.
// Each sail has a "set" value: 1 = set and drawing, 0 = furled.
import * as THREE from 'three';
import { mats } from './materials.js';
import { deckY, railTop } from './config.js';

const _m = new THREE.Matrix4();
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
    this.furl = new THREE.Mesh(new THREE.CapsuleGeometry(fr, fl - 2 * fr, 4, 10), M.furl);
    this.furl.rotation.x = Math.PI / 2;
    this.furl.position.set(0.12, yard.r + fr * 0.7, 0);
    this.furl.castShadow = true;
    yard.group.add(this.furl);
    this.set = -1;
  }

  update(set, wind, time) {
    const NU = this.NU, NV = this.NV, y = this.yard;
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
        pos[k * 3] = x; pos[k * 3 + 1] = py; pos[k * 3 + 2] = z;
        uv[k * 2] = z / 2;
        uv[k * 2 + 1] = py / 4;
      }
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.uv.needsUpdate = true;
    this.geo.computeVertexNormals();
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
    const C = T.clone().lerp(this.clew, 0.15 + 0.85 * set);
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

  update(set, wind, time) {
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
    const n = new THREE.Vector3(0, 0, 1);
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
  return sails;
}
