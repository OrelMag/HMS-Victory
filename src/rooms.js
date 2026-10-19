// Rooms: bulkheads with doorways, and labels that open a short historical note.
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { deckY, halfBreadth, lerp } from './config.js';
import { merge } from './geom.js';
import { ROOMS, DECK_ABOVE, LEVEL_OF } from './roomData.js';

// Bare planking for storerooms and bulkheads below the gun decks.
function plankTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  for (let i = 0; i < 8; i++) {
    const v = 120 + ((i * 37) % 30);
    g.fillStyle = `rgb(${v},${(v * 0.82) | 0},${(v * 0.6) | 0})`;
    g.fillRect(i * 32, 0, 32, 256);
    g.fillStyle = 'rgba(40,25,10,0.6)';
    g.fillRect(i * 32, 0, 2, 256);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function panelTexture() {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.fillStyle = '#cfc5ad';
  g.fillRect(0, 0, 256, 256);
  g.strokeStyle = 'rgba(90,70,40,0.45)';
  g.lineWidth = 4;
  for (const [x, y, w, h] of [[14, 14, 100, 100], [142, 14, 100, 100], [14, 142, 100, 100], [142, 142, 100, 100]]) g.strokeRect(x, y, w, h);
  g.fillStyle = 'rgba(90,70,40,0.25)';
  g.fillRect(0, 124, 256, 8);
  g.fillRect(124, 0, 8, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

// A vertical wall between two points on a deck, with an optional doorway (centre offset along it).
function wall(deck, a, b, door, parts) {
  const len = Math.hypot(b.x - a.x, b.z - a.z);
  const above = DECK_ABOVE[deck];
  const yTop = (x) => (above ? deckY(above, x) - 0.33 : deckY(deck, x) + 2.0);
  const segs = [];
  if (door != null) {
    const d0 = Math.max(0, door - 0.45), d1 = Math.min(len, door + 0.45);
    if (d0 > 0.05) segs.push([0, d0, 0]);
    if (d1 < len - 0.05) segs.push([d1, len, 0]);
    segs.push([d0, d1, 1.75]); // lintel over the doorway
  } else segs.push([0, len, 0]);
  for (const [s0, s1, floorOff] of segs) {
    const pa = { x: lerp(a.x, b.x, s0 / len), z: lerp(a.z, b.z, s0 / len) };
    const pb = { x: lerp(a.x, b.x, s1 / len), z: lerp(a.z, b.z, s1 / len) };
    const g = new THREE.BufferGeometry();
    const yb0 = deckY(deck, pa.x) + floorOff, yb1 = deckY(deck, pb.x) + floorOff;
    const yt0 = yTop(pa.x), yt1 = yTop(pb.x);
    const P = [pa.x, yb0, pa.z, pb.x, yb1, pb.z, pb.x, yt1, pb.z, pa.x, yt0, pa.z];
    const U = [s0 / 1.6, yb0 / 1.6, s1 / 1.6, yb1 / 1.6, s1 / 1.6, yt1 / 1.6, s0 / 1.6, yt0 / 1.6];
    g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(U, 2));
    g.setIndex([0, 1, 2, 0, 2, 3]);
    g.computeVertexNormals();
    parts.push(g);
  }
}

// Clamp a z to the inside of the hull at x on a deck.
const inHull = (deck, x, z) => {
  const w = halfBreadth(x, deckY(deck, x) + 1.0) - 0.1;
  return Math.max(-w, Math.min(w, z));
};

export class Rooms {
  constructor(parent, container, onPick) {
    this.group = new THREE.Group();
    this.group.name = 'rooms';
    parent.add(this.group);
    // Partitions on the gun decks come down when the ship clears for action; the orlop and hold stay.
    const painted = [], bareGun = [], bare = [];
    for (const r of ROOMS) {
      const parts = r.deck === 'lower' ? bareGun : (r.deck === 'orlop' || r.deck === 'hold') ? bare : painted;
      for (const w of r.walls || []) {
        const [side, door] = Array.isArray(w) ? w : [w, null];
        let a, b;
        if (side === 'fore' || side === 'aft') {
          const x = side === 'fore' ? r.x1 : r.x0;
          a = { x, z: inHull(r.deck, x, r.z0) };
          b = { x, z: inHull(r.deck, x, r.z1) };
        } else {
          const z = side === 'stbd' ? r.z1 : r.z0;
          a = { x: r.x0, z: inHull(r.deck, r.x0, z) };
          b = { x: r.x1, z: inHull(r.deck, r.x1, z) };
        }
        wall(r.deck, a, b, door, parts);
      }
    }
    const plank = plankTexture();
    this.clearable = [];
    for (const [parts, map, clear] of [[painted, panelTexture(), true], [bareGun, plank, true], [bare, plank, false]]) {
      if (!parts.length) continue;
      const mesh = new THREE.Mesh(merge(parts), new THREE.MeshStandardMaterial({ map, roughness: 0.85, side: THREE.DoubleSide }));
      mesh.castShadow = mesh.receiveShadow = true;
      mesh.name = 'bulkheads';
      this.group.add(mesh);
      if (clear) this.clearable.push(mesh);
    }

    // Labels.
    this.renderer = new CSS2DRenderer();
    this.renderer.domElement.className = 'labels';
    container.appendChild(this.renderer.domElement);
    this.labels = [];
    for (const r of ROOMS) {
      const el = document.createElement('div');
      el.className = 'room-label';
      el.textContent = r.name;
      el.onclick = (e) => { e.stopPropagation(); onPick(r); };
      const obj = new CSS2DObject(el);
      const x = r.lx ?? (r.x0 + r.x1) / 2, z = r.lz ?? (r.z0 + r.z1) / 2;
      obj.position.set(x, deckY(r.deck, x) + (r.ly ?? 1.1), z);
      obj.userData.room = r;
      this.group.add(obj);
      this.labels.push(obj);
    }
    this.level = 'all';
    this.enabled = true;
    this.refresh();
  }

  setLevel(level) { this.level = level; this.refresh(); }
  setCleared(cleared) { for (const m of this.clearable) m.visible = !cleared; }
  setEnabled(on) { this.enabled = on; this.refresh(); }

  refresh() {
    for (const l of this.labels) {
      const r = l.userData.room;
      l.visible = this.enabled && this.level !== 'all' && LEVEL_OF[r.deck] === this.level;
    }
  }

  render(scene, camera, w, h) {
    this.renderer.setSize(w, h);
    this.renderer.render(scene, camera);
  }
}
