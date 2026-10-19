// The ship: assembles all parts, rides the waves and blends between poses.
import * as THREE from 'three';
import { buildHull } from './hull.js';
import { Rig } from './masts.js';
import { buildSails, xform } from './sails.js';
import { Rigging } from './rigging.js';
import { Guns } from './guns.js';
import { Fittings } from './fittings.js';
import { Flag } from './flags.js';
import { Effects, Wake } from './effects.js';

const SAIL_KEYS = ['course', 'topsail', 'topgallant', 'royal', 'sprit',
  'foreTopmastStaysail', 'jib', 'flyingJib', 'mainTopmastStaysail', 'mizzenStaysail', 'spanker'];

const allSails = (v) => Object.fromEntries(SAIL_KEYS.map((k) => [k, v]));

export const POSES = {
  sail: {
    set: { ...allSails(1), sprit: 0 },
    hoist: { topsail: 1, topgallant: 1, royal: 1 },
    brace: -0.38, boomSwing: 0.3, heel: 0.07, speed: 5.0, wind: 1, ports: 0, runOut: 0,
    anchor: 0, waveScale: 1, gaffEnsign: 1, jack: 0,
  },
  action: {
    set: { ...allSails(0), topsail: 1, foreTopmastStaysail: 1, jib: 1, spanker: 1 },
    hoist: { topsail: 1, topgallant: 1, royal: 0 },
    brace: -0.26, boomSwing: 0.2, heel: 0.03, speed: 2.2, wind: 0.85, ports: 1, runOut: 1,
    anchor: 0, waveScale: 0.8, gaffEnsign: 1, jack: 0,
  },
  anchor: {
    set: allSails(0),
    hoist: { topsail: 0, topgallant: 0, royal: 0 },
    brace: 0, boomSwing: 0, heel: 0, speed: 0, wind: 0.35, ports: 0, runOut: 0,
    anchor: 1, waveScale: 0.5, gaffEnsign: 0, jack: 1,
  },
};

// Flatten a pose into key -> number.
function flat(p) {
  const o = {};
  for (const [k, v] of Object.entries(p)) {
    if (typeof v === 'object') for (const [k2, v2] of Object.entries(v)) o[`${k}.${k2}`] = v2;
    else o[k] = v;
  }
  return o;
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// Timing window (fraction of the transition) for each key, by direction.
function windowFor(key, from, to) {
  const up = to > from;
  if (key.startsWith('set.')) return up ? [0.35, 0.9] : [0.0, 0.55];
  if (key.startsWith('hoist.')) return up ? [0.05, 0.45] : [0.45, 0.9];
  if (key === 'ports') return up ? [0.1, 0.45] : [0.5, 0.85];
  if (key === 'runOut') return up ? [0.45, 0.95] : [0.05, 0.45];
  if (key === 'anchor') return up ? [0.55, 0.95] : [0.0, 0.4];
  if (key === 'gaffEnsign' || key === 'jack') return [0.5, 0.52];
  return [0, 1];
}

export class Ship {
  constructor(scene, sea) {
    this.scene = scene;
    this.sea = sea;
    this.root = new THREE.Group();   // follows the waves
    this.body = new THREE.Group();   // heel applied here
    this.root.add(this.body);
    this.body.add(buildHull());

    this.rig = new Rig();
    this.body.add(this.rig.group);
    this.root.updateMatrixWorld(true);
    this.sails = buildSails(this.rig, this.body);
    this.rigging = new Rigging(this.rig);
    this.guns = new Guns(this.body);
    this.fittings = new Fittings(this.body, this.rig);

    // Flags (in body space; placed every frame).
    this.flags = {
      ensign: new Flag('ensign', 8.5, 4.25, this.body),
      admiral: new Flag('admiral', 5.0, 2.5, this.body),
      pennant: new Flag('pennant', 16, 0.9, this.body, 0.85),
      jack: new Flag('union', 4.2, 2.1, this.body),
    };

    this.effects = new Effects(scene);
    this.wake = new Wake(scene, sea.uniforms);

    this.distance = 0;
    this.pose = 'sail';
    this.cur = flat(POSES.sail);
    this.tween = null;
    this.dirty = true;
    this.broadside = null;
    this.time = 0;
  }

  poseNames() { return Object.keys(POSES); }

  setPose(name, instant = false) {
    if (!POSES[name]) return;
    this.pose = name;
    const target = flat(POSES[name]);
    if (instant) {
      this.cur = target;
      this.tween = null;
      this.dirty = true;
      return;
    }
    this.tween = { from: { ...this.cur }, to: target, k: 0, dur: 8 };
  }

  fireBroadside() {
    if (this.pose !== 'action' || this.broadside) return;
    const list = this.guns.ports.filter((p) => p.side === 1).sort((a, b) => b.x - a.x);
    let t = 0;
    for (const p of list) {
      p.fireAt = this.time + t + Math.random() * 0.08;
      t += 0.075;
    }
    this.broadside = { list, end: this.time + t + 4 };
  }

  update(t, dt) {
    this.time = t;
    // Pose transition.
    if (this.tween) {
      const tw = this.tween;
      tw.k = Math.min(1, tw.k + dt / tw.dur);
      for (const key of Object.keys(tw.to)) {
        const a = tw.from[key], b = tw.to[key];
        const [w0, w1] = windowFor(key, a, b);
        const local = Math.min(1, Math.max(0, (tw.k - w0) / (w1 - w0)));
        this.cur[key] = a + (b - a) * ease(local);
      }
      if (tw.k >= 1) this.tween = null;
      this.dirty = true;
    }
    const S = this.cur;

    // Wave motion and heel.
    const sea = this.sea;
    sea.setScale(S.waveScale);
    const L = 22, B = 6;
    const hb = sea.heightAt(L, 0), hs = sea.heightAt(-L, 0);
    const hp = sea.heightAt(0, -B), hst = sea.heightAt(0, B), hc = sea.heightAt(0, 0);
    this.root.position.y = ((hb + hs + hp + hst + hc * 2) / 6) * 0.85;
    this.root.rotation.z = Math.atan2(hb - hs, 2 * L) * 0.8;
    this.root.rotation.x = -Math.atan2(hst - hp, 2 * B) * 0.6;
    this.body.rotation.x = S.heel;
    this.distance += S.speed * dt;

    if (this.dirty) {
      this.rig.applyYards({
        hoist: { topsail: S['hoist.topsail'], topgallant: S['hoist.topgallant'], royal: S['hoist.royal'] },
        brace: S.brace, boomSwing: S.boomSwing,
      });
    }
    this.root.updateMatrixWorld(true);

    // Sails animate every frame (they ripple).
    const wind = S.wind;
    for (const s of this.sails.square) {
      const key = s.kind === 'sprit' ? 'sprit' : s.kind;
      s.update(S[`set.${key}`], wind, t);
    }
    for (const s of this.sails.stay) s.update(S[`set.${s.kind}`], wind, t, 1);
    this.sails.spanker.update(S['set.spanker'], wind, t);

    // Broadside: recoil and run out again.
    let gunsDirty = this.dirty;
    if (this.broadside) {
      const bd = this.broadside;
      const windW = new THREE.Vector3(3.5, 0, 2.5).add(new THREE.Vector3(-S.speed, 0, 0));
      for (const p of bd.list) {
        if (p.fireAt > 0 && t >= p.fireAt) {
          p.fireAt = -1;
          p.firedAt = t;
          const m = this.guns.muzzle(p, S.runOut);
          const wp = this.body.localToWorld(m.clone());
          const wd = p.out.clone().transformDirection(this.body.matrixWorld);
          this.effects.gunshot(wp, wd, windW);
        }
        if (p.firedAt != null) {
          const e = t - p.firedAt;
          p.recoil = e < 0.12 ? e / 0.12 : Math.max(0, 1 - (e - 0.6) / 2.4);
          if (e > 3.2) { p.recoil = 0; p.firedAt = null; }
        }
      }
      gunsDirty = true;
      if (t > bd.end) this.broadside = null;
    }
    if (gunsDirty) this.guns.apply(S.ports, S.runOut);

    if (this.dirty) {
      this.rigging.updateRunning(this.sails, S);
      this.fittings.setAnchor(S.anchor);
    }

    // Flags stream downwind (wind from the port quarter, or from ahead at anchor).
    const rig = this.rig;
    const atAnchor = S.anchor > 0.5;
    const flagDir = atAnchor ? new THREE.Vector3(-1, 0, 0.25).normalize() : new THREE.Vector3(1, 0, 0.75).normalize();
    Flag.update(t, 0.35 + 0.65 * Math.max(wind, atAnchor ? 0.55 : 0));
    const P = (m, key) => xform(m.local[key].clone(), m.group, this.body);
    const peak = xform(new THREE.Vector3(rig.gaff.L - 0.1, 0, 0), rig.gaff.group, this.body);
    const ens = this.flags.ensign;
    if (S.gaffEnsign > 0.5) ens.place(peak, flagDir);
    else ens.place(this.fittings.ensignStaff, flagDir);
    this.flags.admiral.place(P(rig.masts.fore, 'poleHead').add(new THREE.Vector3(0, 0.1, 0)), flagDir);
    this.flags.pennant.place(P(rig.masts.main, 'poleHead').add(new THREE.Vector3(0, 0.1, 0)), flagDir);
    this.flags.jack.mesh.visible = S.jack > 0.5;
    this.flags.jack.place(this.fittings.jackStaff, flagDir);

    this.effects.update(dt, this.scene.userData.camera?.position);
    this.wake.update(this.distance, S.speed);
    this.dirty = false;
  }
}
