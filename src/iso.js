// Isometric sailor mode: an orthographic camera follows the sailor; the decks above him are
// peeled away automatically, Desperados-style.
import * as THREE from 'three';
import { Sailor } from './sailor.js';

const CUT_FOR = { hold: 'hold', orlop: 'orlop', lower: 'lower', middle: 'middle', upper: 'upper', qd: 'quarterdeck', poop: 'poop' };
const ELEV = THREE.MathUtils.degToRad(40);

export class IsoMode {
  constructor({ ship, cut, rooms, renderer, ui }) {
    this.ship = ship; this.cut = cut; this.rooms = rooms; this.renderer = renderer; this.ui = ui;
    this.sailor = new Sailor(ship.body);
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 2000);
    this.zoom = 9;
    this.theta = THREE.MathUtils.degToRad(135); // camera over the starboard quarter
    this.thetaTarget = this.theta;
    this.focus = new THREE.Vector3();
    this.keys = new Set();
    this.active = false;
    this.level = null;
    this.ray = new THREE.Raycaster();

    window.addEventListener('keydown', (e) => {
      if (!this.active) return;
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) e.preventDefault();
      if (e.code === 'KeyQ') this.thetaTarget -= Math.PI / 2;
      if (e.code === 'KeyE') this.thetaTarget += Math.PI / 2;
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => this.keys.clear());
    const el = renderer.domElement;
    el.addEventListener('wheel', (e) => {
      if (!this.active) return;
      e.preventDefault();
      this.zoom = THREE.MathUtils.clamp(this.zoom * (e.deltaY > 0 ? 1.12 : 1 / 1.12), 4, 40);
    }, { passive: false });
    // Touch: a joystick to walk, buttons to turn the view, pinch to zoom.
    this.stick = { x: 0, y: 0 };
    const pad = document.createElement('div');
    pad.id = 'stick';
    pad.innerHTML = '<div class="nub"></div>';
    const turn = document.createElement('div');
    turn.id = 'turn';
    turn.innerHTML = '<button data-d="-1">&#10226;</button><button data-d="1">&#10227;</button>';
    document.body.append(pad, turn);
    this.touchUI = [pad, turn];
    const nub = pad.firstChild;
    let sid = null;
    const moveStick = (e) => {
      const r = pad.getBoundingClientRect();
      let dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2), dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const l = Math.hypot(dx, dy);
      if (l > 1) { dx /= l; dy /= l; }
      this.stick = { x: dx, y: dy };
      nub.style.transform = `translate(${dx * 38}px, ${dy * 38}px)`;
    };
    pad.addEventListener('pointerdown', (e) => { sid = e.pointerId; pad.setPointerCapture(sid); moveStick(e); });
    pad.addEventListener('pointermove', (e) => { if (e.pointerId === sid) moveStick(e); });
    const endStick = () => { sid = null; this.stick = { x: 0, y: 0 }; nub.style.transform = ''; };
    pad.addEventListener('pointerup', endStick);
    pad.addEventListener('pointercancel', endStick);
    turn.querySelectorAll('button').forEach((b) => { b.onclick = () => { this.thetaTarget += (+b.dataset.d) * Math.PI / 2; }; });
    const touches = new Map();
    let pinch0 = null;
    el.addEventListener('pointerdown', (e) => {
      if (!this.active || e.pointerType !== 'touch') return;
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (touches.size === 2) {
        const [a, c] = [...touches.values()];
        pinch0 = { d: Math.hypot(a.x - c.x, a.y - c.y), zoom: this.zoom };
      }
    });
    el.addEventListener('pointermove', (e) => {
      if (!touches.has(e.pointerId)) return;
      touches.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pinch0 && touches.size === 2) {
        const [a, c] = [...touches.values()];
        this.zoom = THREE.MathUtils.clamp(pinch0.zoom * pinch0.d / Math.max(10, Math.hypot(a.x - c.x, a.y - c.y)), 4, 40);
      }
    });
    const lift = (e) => { touches.delete(e.pointerId); if (touches.size < 2) pinch0 = null; };
    el.addEventListener('pointerup', lift);
    el.addEventListener('pointercancel', lift);
    let down = null;
    el.addEventListener('pointerdown', (e) => { if (this.active) down = { x: e.clientX, y: e.clientY }; });
    el.addEventListener('pointerup', (e) => {
      if (!this.active || !down) return;
      if (Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6 && !pinch0) this.clickTo(e.clientX, e.clientY);
      down = null;
    });
  }

  enter() {
    this.active = true;
    document.body.classList.add('sailor-mode');
    this.saved = { level: this.cut.level, cutZ: this.cut.cutZ };
    this.cut.setCut(0);
    this.sailor.setActive(true, this.ship);
    this.level = null;
    this.snap = true;
  }

  exit() {
    this.active = false;
    document.body.classList.remove('sailor-mode');
    this.sailor.setActive(false, this.ship);
    this.cut.setLevel(this.saved?.level ?? 'all');
    this.rooms.setLevel(this.saved?.level ?? 'all');
    this.ui?.setLevel(this.saved?.level ?? 'all');
  }

  clickTo(cx, cy) {
    const ndc = new THREE.Vector2((cx / window.innerWidth) * 2 - 1, -(cy / window.innerHeight) * 2 + 1);
    this.ray.setFromCamera(ndc, this.camera);
    const inv = new THREE.Matrix4().copy(this.ship.body.matrixWorld).invert();
    const o = this.ray.ray.origin.clone().applyMatrix4(inv);
    const d = this.ray.ray.direction.clone().transformDirection(inv);
    const y = this.sailor.floorY();
    if (Math.abs(d.y) < 1e-4) return;
    const t = (y - o.y) / d.y;
    if (t < 0) return;
    this.sailor.walkTo(o.x + d.x * t, o.z + d.z * t);
  }

  update(dt) {
    const k = this.keys;
    const fwd = (k.has('KeyW') || k.has('ArrowUp') ? 1 : 0) - (k.has('KeyS') || k.has('ArrowDown') ? 1 : 0);
    const right = (k.has('KeyD') || k.has('ArrowRight') ? 1 : 0) - (k.has('KeyA') || k.has('ArrowLeft') ? 1 : 0);
    const c = Math.cos(this.theta), s = Math.sin(this.theta);
    // Keys, or the touch stick (screen up = forward).
    const f2 = fwd || -this.stick.y, r2 = right || this.stick.x;
    const move = { x: -c * f2 + s * r2, z: -s * f2 - c * r2 };
    this.sailor.update(dt, move, k.has('ShiftLeft') || k.has('ShiftRight'), this.ship);

    // Peel the decks above him, and show the labels for his deck.
    const lvl = CUT_FOR[this.sailor.level];
    if (lvl !== this.level) {
      this.level = lvl;
      this.cut.setLevel(lvl);
      this.rooms.setLevel(lvl);
      this.ui?.setLevel(lvl);
    }

    // Below the waterline the ship's side stays up; cut away the side nearest the camera instead.
    if (this.sailor.level === 'hold' || this.sailor.level === 'orlop') {
      const side = Math.sin(this.theta) >= 0 ? 1 : -1;
      this.cut.setCutPlane(side * this.sailor.z + 2.4, side);
    } else if (this.cut.cutZ < 50) this.cut.setCutPlane(1e5, 1);

    // Follow camera.
    this.theta += (this.thetaTarget - this.theta) * Math.min(1, dt * 6);
    const p = this.sailor.figure.position.clone().add(new THREE.Vector3(0, 1.0, 0));
    this.ship.body.localToWorld(p);
    if (this.snap) { this.focus.copy(p); this.snap = false; } else this.focus.lerp(p, Math.min(1, dt * 6));
    const dist = 160;
    const off = new THREE.Vector3(Math.cos(this.theta) * Math.cos(ELEV), Math.sin(ELEV), Math.sin(this.theta) * Math.cos(ELEV)).multiplyScalar(dist);
    this.camera.position.copy(this.focus).add(off);
    this.camera.lookAt(this.focus);
    const a = window.innerWidth / window.innerHeight;
    Object.assign(this.camera, { left: -this.zoom * a, right: this.zoom * a, top: this.zoom, bottom: -this.zoom });
    this.camera.updateProjectionMatrix();
  }
}
