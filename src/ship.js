// The ship: assembles all parts, rides the waves and blends between poses.
import * as THREE from 'three';
import { buildHull } from './hull.js';
import { buildInterior } from './interior.js';
import { buildFurnishing } from './furnish.js';
import { buildDeckGear } from './deckgear.js';
import { TRIM } from './config.js';
import { Rig } from './masts.js';
import { buildSails, xform } from './sails.js';
import { Rigging } from './rigging.js';
import { Guns } from './guns.js';
import { Fittings } from './fittings.js';
import { Flag } from './flags.js';
import { Effects, Wake } from './effects.js';
import { mats } from './materials.js';

const SAIL_KEYS = ['course', 'topsail', 'topgallant', 'royal', 'sprit',
  'foreTopmastStaysail', 'jib', 'flyingJib', 'mainTopmastStaysail', 'mizzenStaysail', 'spanker',
  'stunTop', 'stunTg', 'stunLower'];
const NO_STUNS = { stunTop: 0, stunTg: 0, stunLower: 0 };

const allSails = (v) => Object.fromEntries(SAIL_KEYS.map((k) => [k, v]));

// Poses set which sails are set, ports, guns and anchor. Heel, speed, bracing and the
// rest follow from the wind (see windEffects).
export const POSES = {
  sail: {
    set: { ...allSails(1), sprit: 0, ...NO_STUNS },
    hoist: { topsail: 1, topgallant: 1, royal: 1 },
    ports: 0, runOut: 0, anchor: 0, gaffEnsign: 1, jack: 0, unionStays: 0, cleared: 0,
  },
  // Going into action at Trafalgar: very light wind from astern, every stitch set including
  // studding sails, ports open and guns run out, Union flags on the stays (Nelson's order).
  trafalgar: {
    set: { ...allSails(1), sprit: 0 },
    hoist: { topsail: 1, topgallant: 1, royal: 1 },
    ports: 1, runOut: 1, anchor: 0, gaffEnsign: 1, jack: 0, unionStays: 1, cleared: 1,
    wind: { dir: -160, str: 0.15 },
  },
  action: {
    set: { ...allSails(0), topsail: 1, foreTopmastStaysail: 1, jib: 1, spanker: 1 },
    hoist: { topsail: 1, topgallant: 1, royal: 0 },
    ports: 1, runOut: 1, anchor: 0, gaffEnsign: 1, jack: 0, unionStays: 0, cleared: 1,
  },
  anchor: {
    set: allSails(0),
    hoist: { topsail: 0, topgallant: 0, royal: 0 },
    ports: 0, runOut: 0, anchor: 1, gaffEnsign: 0, jack: 1, unionStays: 0, cleared: 0,
  },
};

// Share of the total driving canvas each sail contributes.
const AREA = {
  course: 0.3, topsail: 0.32, topgallant: 0.13, royal: 0.05, sprit: 0,
  foreTopmastStaysail: 0.04, jib: 0.04, flyingJib: 0.03, mainTopmastStaysail: 0.02, mizzenStaysail: 0.02, spanker: 0.05,
  stunTop: 0.06, stunTg: 0.03, stunLower: 0.05,
};
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const wrapDeg = (a) => ((a + 540) % 360) - 180;

// Everything the wind drives. dir: degrees the wind comes FROM, relative to the bow
// (0 ahead, +90 starboard beam, -90 port beam, 180 astern). str: 0 calm .. 1 near gale.
export function windEffects(S, dir, str) {
  const rel = THREE.MathUtils.degToRad(wrapDeg(dir * (1 - S.anchor))); // at anchor she swings head to wind
  const abs = Math.abs(rel);
  const sign = rel < 0 ? -1 : 1;
  const lee = rel <= 0 ? 1 : -1; // +1 = starboard is leeward
  let area = 0;
  for (const [k, a] of Object.entries(AREA)) area += a * (S[`set.${k}`] ?? 0);
  const drive = clamp01((abs - THREE.MathUtils.degToRad(48)) / THREE.MathUtils.degToRad(30));
  const free = 1 - S.anchor;
  const speed = 6.0 * str * Math.pow(area, 0.8) * drive * (0.75 + 0.25 * Math.sin(abs)) * free;
  const trueSpeed = 2 + 12 * str;
  const toward = new THREE.Vector3(-Math.cos(rel), 0, -Math.sin(rel)).multiplyScalar(trueSpeed);
  const apparent = toward.clone().add(new THREE.Vector3(-speed, 0, 0));
  return {
    rel, lee, area, drive, speed, toward, apparent,
    brace: sign * 0.5 * clamp01((Math.PI - abs) / THREE.MathUtils.degToRad(110)) * free,
    heel: -sign * str * 0.12 * area * Math.abs(Math.sin(rel)) * drive,
    boomSwing: -sign * (0.06 + 0.5 * clamp01((abs - 0.8) / 2.35)) * free,
    belly: (0.3 + 0.7 * str) * Math.max(drive, 0.06),
    luff: (1 - drive) * (0.2 + str),
    waveScale: (0.35 + 0.9 * str) * (1 - 0.35 * S.anchor),
  };
}

// Flatten a pose into key -> number.
function flat(p) {
  const o = {};
  for (const [k, v] of Object.entries(p)) {
    if (k === 'wind') continue;
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
  if (key === 'gaffEnsign' || key === 'jack' || key === 'unionStays') return [0.5, 0.52];
  if (key.startsWith('set.stun')) return up ? [0.75, 1.0] : [0.0, 0.3];
  if (key === 'cleared') return up ? [0.05, 0.25] : [0.7, 0.9];
  return [0, 1];
}

export class Ship {
  constructor(scene, sea) {
    this.scene = scene;
    this.sea = sea;
    this.root = new THREE.Group();   // follows the waves
    this.body = new THREE.Group();   // heel applied here
    this.root.add(this.body);
    const hull = buildHull();
    this.body.add(hull);
    this.body.add(buildInterior());
    // The shell (made see-through by the X-ray view).
    hull.traverse((o) => {
      if (o.isMesh && ['planking', 'innerPlanking', 'stern', 'bulwark'].includes(o.name)) o.userData.shell = true;
    });
    hull.getObjectByName('quarterGalleries')?.traverse((o) => { if (o.isMesh) o.userData.shell = true; });

    this.rig = new Rig();
    this.body.add(this.rig.group);
    this.root.updateMatrixWorld(true);
    this.sails = buildSails(this.rig, this.body);
    this.rigging = new Rigging(this.rig);
    this.guns = new Guns(this.body);
    this.fittings = new Fittings(this.body, this.rig);
    this.furnishing = buildFurnishing(this.fittings);
    this.body.add(this.furnishing);
    // Deck gear lives in the furnishing group so the sailor's walk map sees it (not struck down).
    this.furnishing.add(buildDeckGear());
    // After dark: what glows (material, day intensity, night intensity) and where the lanterns hang.
    const M = mats();
    this.nightMaterials = [[this.furnishing.userData.glow, 0.9, 3.0], [M.lantern, 0, 3.5]];
    hull.traverse((o) => { if (o.userData.glow) for (const m of o.userData.glow) this.nightMaterials.push([m, 0, 0.75]); });
    this.lanterns = this.furnishing.userData.lanterns.map((p) => ({ p }));
    this.root.updateMatrixWorld(true);
    for (const glass of this.fittings.lanterns) {
      const p = glass.getWorldPosition(new THREE.Vector3());
      this.lanterns.push({ p: this.body.worldToLocal(p) });
    }
    // Things that are struck down when clearing for action (rooms register here too).
    this.clearables = [{ setCleared: (c) => this.furnishing.userData.setCleared(c) }];
    this.isCleared = null;
    this.layoutVersion = 0; // bumps whenever what stands on the decks changes
    // Sails press against (and drape round) the standing rigging of their own mast.
    for (const s of this.sails.square) {
      const c = this.rigging.colliders[s.mastName];
      if (!c) continue;
      s.space = this.rig.group;
      s.colliders = {
        course: [...c.lower, ...c.futtock, ...c.backstay],
        topsail: [...c.topmast, ...c.backstay],
        topgallant: [...c.tg, ...c.backstay],
        royal: [...c.backstay],
      }[s.kind] || [];
      // ...and are held back by the stays in front of them.
      const ahead = {
        fore: { course: ['fore stay', 'fore preventer stay'], topsail: ['fore topmast stay', 'jib stay'], topgallant: ['fore topgallant stay'], royal: ['fore royal stay'] },
        main: { course: ['main stay', 'main preventer stay'], topsail: ['main topmast stay'], topgallant: ['main topgallant stay'], royal: ['main royal stay'] },
        mizzen: { topsail: ['mizzen topmast stay'], topgallant: ['mizzen topgallant stay'] },
      }[s.mastName]?.[s.kind] || [];
      s.stays = ahead.map((n) => this.rigging.stayLines[n]).filter(Boolean);
    }

    // Flags (in body space; placed every frame).
    this.flags = {
      ensign: new Flag('ensign', 8.5, 4.25, this.body),
      admiral: new Flag('admiral', 5.0, 2.5, this.body),
      jack: new Flag('union', 4.2, 2.1, this.body),
      // Nelson's order: Union flags at the fore topgallant stay and main topmast stay.
      unionFore: new Flag('union', 3.6, 1.8, this.body),
      unionMain: new Flag('union', 3.6, 1.8, this.body),
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
    this.windTarget = { dir: -135, str: 0.6 };
    this.windNow = { ...this.windTarget };
  }

  setWind(dir, str, instant = false) {
    if (dir != null) this.windTarget.dir = dir;
    if (str != null) this.windTarget.str = str;
    if (instant) this.windNow = { ...this.windTarget };
    this.dirty = true;
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
    if (!POSES[this.pose].ports || this.broadside) return;
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
      if (tw.k >= 1) { this.tween = null; this.layoutVersion++; }
      this.dirty = true;
    }
    const S = this.cur;

    // Ease the wind toward the target so yards swing round smoothly.
    const wn = this.windNow, wt = this.windTarget;
    const k = 1 - Math.exp(-dt * 1.2);
    const dd = wrapDeg(wt.dir - wn.dir), ds = wt.str - wn.str;
    if (Math.abs(dd) > 0.05 || Math.abs(ds) > 0.001) {
      wn.dir = wrapDeg(wn.dir + dd * k);
      wn.str += ds * k;
      this.dirty = true;
    }
    const W = windEffects(S, wn.dir, wn.str);
    this.W = W;
    this.sea.setCaps(wn.str);

    // Wave motion and heel.
    const sea = this.sea;
    sea.setScale(W.waveScale);
    sea.setDirection(Math.atan2(W.toward.z, W.toward.x));
    const L = 22, B = 6;
    const hb = sea.heightAt(L, 0), hs = sea.heightAt(-L, 0);
    const hp = sea.heightAt(0, -B), hst = sea.heightAt(0, B), hc = sea.heightAt(0, 0);
    this.root.position.y = ((hb + hs + hp + hst + hc * 2) / 6) * 0.85;
    this.root.rotation.z = Math.atan2(hb - hs, 2 * L) * 0.8;
    this.root.rotation.x = -Math.atan2(hst - hp, 2 * B) * 0.6;
    this.body.rotation.x = W.heel;
    this.body.rotation.z = TRIM;
    this.distance += W.speed * dt;

    if (this.dirty) {
      this.rig.applyYards({
        hoist: { topsail: S['hoist.topsail'], topgallant: S['hoist.topgallant'], royal: S['hoist.royal'] },
        brace: W.brace, boomSwing: W.boomSwing,
      });
    }
    this.root.updateMatrixWorld(true);
    this.sea.uniforms.uShipInv.value.copy(this.body.matrixWorld).invert();

    // Sails animate every frame (they ripple, and shiver when the wind is too far forward).
    for (const s of this.sails.square) s.update(S[`set.${s.kind}`], W.belly, t, W.luff);
    for (const s of this.sails.stay) s.update(S[`set.${s.kind}`], W.belly, t, W.lee);
    this.sails.spanker.update(S['set.spanker'], W.belly, t, W.lee);
    for (const s of this.sails.stun) s.update(S[`set.${s.kind}`], W.belly, t);

    // Broadside: recoil and run out again.
    let gunsDirty = this.dirty;
    if (this.broadside) {
      const bd = this.broadside;
      const windW = W.apparent.clone().multiplyScalar(0.5);
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

    this.rigging.updateRunning(this.sails, S, W);
    if (this.dirty) this.fittings.setAnchor(S.anchor);
    const cleared = S.cleared > 0.5;
    if (cleared !== this.isCleared) {
      this.isCleared = cleared;
      for (const c of this.clearables) c.setCleared(cleared);
      this.layoutVersion++;
    }

    // Flags stream along the apparent wind.
    const rig = this.rig;
    const flagDir = W.apparent.clone().setY(0).normalize();
    Flag.update(t, 0.2 + 0.8 * Math.min(1, W.apparent.length() / 12));
    const P = (m, key) => xform(m.local[key].clone(), m.group, this.body);
    const peak = xform(new THREE.Vector3(rig.gaff.L - 0.1, 0, 0), rig.gaff.group, this.body);
    const ens = this.flags.ensign;
    if (S.gaffEnsign > 0.5) ens.place(peak, flagDir);
    else ens.place(this.fittings.ensignStaff, flagDir);
    this.flags.admiral.place(P(rig.masts.fore, 'poleHead').add(new THREE.Vector3(0, 0.1, 0)), flagDir);
    const onStay = (name, f) => {
      const [a, b] = this.rigging.stayLines[name];
      return a.clone().lerp(b, f).add(new THREE.Vector3(0, -0.3, 0));
    };
    for (const [flag, stay, f] of [[this.flags.unionFore, 'fore topgallant stay', 0.42], [this.flags.unionMain, 'main topmast stay', 0.5]]) {
      flag.mesh.visible = S.unionStays > 0.5;
      flag.place(onStay(stay, f), flagDir);
    }
    this.flags.jack.mesh.visible = S.jack > 0.5;
    this.flags.jack.place(this.fittings.jackStaff, flagDir);

    // Spray at the bow when she is going fast or pitching into a sea.
    if (dt > 0 && W.speed > 0.5) {
      const bowH = this.sea.heightAt(27.5, 0);
      const pitch = Math.max(0, bowH - this.root.position.y + 0.2);
      const amount = (W.speed / 6) * (0.6 + 3 * pitch) * dt * 60 * 0.9;
      if (amount > 0.05) {
        for (const side of [1, -1]) {
          const p = this.body.localToWorld(new THREE.Vector3(27.2, 0.2, side * 1.6));
          const out = new THREE.Vector3(0.5, 0, side).normalize().transformDirection(this.body.matrixWorld);
          this.effects.spray(p, out, new THREE.Vector3(0, 0, 0), amount);
        }
      }
    }
    this.effects.update(dt, this.scene.userData.camera?.position);
    this.wake.update(this.distance, W.speed);
    this.dirty = false;
  }
}
