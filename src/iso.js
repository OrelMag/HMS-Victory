// Isometric sailor mode: an orthographic camera follows the sailor; the decks above him are
// peeled away automatically, Desperados-style.
import * as THREE from 'three';
import { Sailor } from './sailor.js';

const CUT_FOR = { orlop: 'orlop', lower: 'lower', middle: 'middle', upper: 'upper', qd: 'quarterdeck', poop: 'poop' };
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
    let down = null;
    el.addEventListener('pointerdown', (e) => { if (this.active) down = { x: e.clientX, y: e.clientY }; });
    el.addEventListener('pointerup', (e) => {
      if (!this.active || !down) return;
      if (Math.hypot(e.clientX - down.x, e.clientY - down.y) < 6) this.clickTo(e.clientX, e.clientY);
      down = null;
    });
  }

  enter() {
    this.active = true;
    this.saved = { level: this.cut.level, cutZ: this.cut.cutZ };
    this.cut.setCut(0);
    this.sailor.setActive(true, this.ship);
    this.level = null;
    this.snap = true;
  }

  exit() {
    this.active = false;
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
    const move = { x: -c * fwd + s * right, z: -s * fwd - c * right };
    this.sailor.update(dt, move, k.has('ShiftLeft') || k.has('ShiftRight'), this.ship);

    // Peel the decks above him, and show the labels for his deck.
    const lvl = CUT_FOR[this.sailor.level];
    if (lvl !== this.level) {
      this.level = lvl;
      this.cut.setLevel(lvl);
      this.rooms.setLevel(lvl);
      this.ui?.setLevel(lvl);
    }

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
