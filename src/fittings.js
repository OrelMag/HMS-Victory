// Deck fittings: boats, anchors, wheel, binnacle, capstan, belfry, lanterns, gratings, staffs.
import * as THREE from 'three';
import { deckY, railTop, halfBreadth, xStern, QD_FWD, FC_AFT, POOP_FWD, lerp, HATCHES } from './config.js';
import { gridGeometry, merge, beamBetween, cylBetween } from './geom.js';
import { mats } from './materials.js';

function boatGeometry(L, B, D) {
  const NU = 24, NV = 10;
  const hull = gridGeometry(NU, NV, (i, j) => {
    const u = i / (NU - 1);
    const xn = u * 2 - 1;
    const w = (B / 2) * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(xn), xn > 0 ? 1.7 : 3.0)), 0.55);
    const d = D * (0.75 + 0.25 * (1 - xn * xn)) ;
    const th = (j / (NV - 1)) * Math.PI - Math.PI / 2;
    const sheer = 0.25 * xn * xn * D;
    return [xn * L / 2, -d * Math.cos(th) * (1 - 0.1 * Math.abs(xn)) + sheer, w * Math.sin(th)];
  }, null, true);
  return hull;
}

export function buildBoat(L, B, D, color = '#2a2622') {
  const M = mats();
  const g = new THREE.Group();
  const hm = new THREE.MeshStandardMaterial({ color, roughness: 0.7, side: THREE.DoubleSide });
  const hull = new THREE.Mesh(boatGeometry(L, B, D), hm);
  hull.castShadow = true;
  g.add(hull);
  // Gunwale strake and thwarts.
  const inner = [];
  for (let k = 1; k <= 4; k++) {
    const x = -L / 2 + (k / 5) * L;
    const w = (B / 2) * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(x / (L / 2)), x > 0 ? 1.7 : 3.0)), 0.55);
    const t = new THREE.BoxGeometry(0.28, 0.06, w * 1.8);
    t.translate(x, -D * 0.35, 0);
    inner.push(t);
  }
  const tm = new THREE.Mesh(merge(inner), M.darkWood);
  g.add(tm);
  const rim = [];
  for (let k = 0; k <= 40; k++) {
    const a = (k / 40) * Math.PI * 2;
    const xn = Math.cos(a);
    const w = (B / 2) * Math.pow(Math.max(0, 1 - Math.pow(Math.abs(xn), xn > 0 ? 1.7 : 3.0)), 0.55);
    rim.push(new THREE.Vector3(xn * L / 2, 0.25 * xn * xn * D + 0.02, Math.sign(Math.sin(a)) * w));
  }
  const gm = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(rim, true), 80, 0.06, 5, true),
    new THREE.MeshStandardMaterial({ color: '#d8cfb6', roughness: 0.6 }));
  g.add(gm);
  return g;
}

export function buildAnchor() {
  const M = mats();
  const parts = [];
  const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
  parts.push(cylBetween(V(0, 0), V(0, 5.3), 0.13, 0.1, 8));
  const arms = [];
  for (const s of [1, -1]) {
    const curve = new THREE.QuadraticBezierCurve3(V(0, 0.1), V(s * 1.1, 0.0), V(s * 1.85, 1.35));
    arms.push(new THREE.TubeGeometry(curve, 10, 0.11, 6));
    const palm = new THREE.BoxGeometry(0.85, 1.0, 0.08);
    palm.rotateZ(-s * 0.55);
    palm.translate(s * 1.7, 1.15, 0);
    arms.push(palm);
  }
  parts.push(...arms);
  const ring = new THREE.TorusGeometry(0.32, 0.05, 6, 16);
  ring.translate(0, 5.65, 0);
  parts.push(ring);
  const iron = new THREE.Mesh(merge(parts), M.iron);
  const stock = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.32, 5.0), M.darkWood);
  stock.position.y = 5.0;
  const g = new THREE.Group();
  g.add(iron, stock);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function buildWheel(M) {
  const g = new THREE.Group();
  const one = () => {
    const w = new THREE.Group();
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.82, 0.05, 6, 28), M.darkWood);
    w.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.22, 10), M.brass);
    hub.rotation.x = Math.PI / 2;
    w.add(hub);
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 1.18, 6), M.darkWood);
      sp.position.set(Math.cos(a) * 0.59, Math.sin(a) * 0.59, 0);
      sp.rotation.z = a - Math.PI / 2;
      w.add(sp);
    }
    return w;
  };
  const w1 = one(), w2 = one();
  w1.rotation.y = w2.rotation.y = Math.PI / 2;
  w1.position.set(0.55, 1.15, 0);
  w2.position.set(-0.55, 1.15, 0);
  g.add(w1, w2);
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.0, 12), M.darkWood);
  drum.rotation.z = Math.PI / 2;
  drum.position.y = 1.15;
  g.add(drum);
  for (const x of [0.85, -0.85]) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.2, 0.4), M.darkWood);
    st.position.set(x, 0.6, 0);
    g.add(st);
  }
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function gratingTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#0e0905';
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = '#8c7354';
  for (let i = 0; i < 8; i++) {
    g.fillRect(i * 16, 0, 9, 128);
    g.fillRect(0, i * 16, 128, 9);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

export class Fittings {
  constructor(parent, rig) {
    const M = mats();
    this.group = new THREE.Group();
    this.group.name = 'fittings';
    parent.add(this.group);
    const G = this.group;
    const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

    // Boats on the skid beams in the waist.
    const skidY = (x) => deckY('qd', x) + 0.35;
    const launch = buildBoat(10.2, 3.0, 1.15, '#3a2c20');
    launch.position.set(8.8, skidY(8.8) + 1.1, 0);
    const barge = buildBoat(9.4, 2.4, 0.95, '#1d1b19');
    barge.position.set(8.4, skidY(8.4) + 0.95, 2.95);
    const pinnace = buildBoat(8.6, 2.3, 0.9, '#1d1b19');
    pinnace.position.set(8.8, skidY(8.8) + 0.9, -2.9);
    G.add(launch, barge, pinnace);

    // Quarter boats on davits.
    for (const side of [1, -1]) {
      const x = -26.4, y = railTop(x) - 0.4;
      const z = halfBreadth(x, y) + 1.7;
      const cutter = buildBoat(7.4, 2.0, 0.8, '#1d1b19');
      cutter.position.set(x, y, side * z);
      G.add(cutter);
      for (const dx of [-2.6, 2.6]) {
        const a = V(x + dx, railTop(x + dx) - 0.2, side * (halfBreadth(x + dx, 9) - 0.2));
        const b = V(x + dx, railTop(x + dx) + 1.2, side * (z + 0.1));
        const d = new THREE.Mesh(cylBetween(a, b, 0.12, 0.09, 8), M.black);
        d.castShadow = true;
        G.add(d);
        this.davitRope = this.davitRope || [];
        this.davitRope.push([b, V(x + dx * 0.85, y + 0.2, side * z)]);
      }
    }

    // Wheel just forward of the poop, binnacle before it.
    const wx = POOP_FWD - 1.0;
    const wheel = buildWheel(M);
    wheel.position.set(wx, deckY('qd', wx), 0);
    G.add(wheel);
    const bin = new THREE.Group();
    const bb = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.0, 1.2), M.darkWood);
    bb.position.y = 0.5;
    const bt = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.brass);
    bt.position.y = 1.0;
    bin.add(bb, bt);
    bin.position.set(wx + 2.0, deckY('qd', wx + 2.0), 0);
    G.add(bin);

    // Capstan drumhead on the quarterdeck, jeer capstan in the waist.
    const capstan = (x, deck, r = 0.75) => {
      const c = new THREE.Group();
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.75, r * 0.9, 1.0, 16), M.darkWood);
      barrel.position.y = 0.5;
      const head = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.2, r * 1.2, 0.35, 16), M.darkWood);
      head.position.y = 1.15;
      c.add(barrel, head);
      for (let k = 0; k < 12; k++) {
        const a = (k / 12) * Math.PI * 2;
        const w = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.9, 0.18), M.darkWood);
        w.position.set(Math.cos(a) * r * 0.85, 0.5, Math.sin(a) * r * 0.85);
        w.rotation.y = -a;
        c.add(w);
      }
      c.position.set(x, deckY(deck, x), 0);
      c.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      G.add(c);
    };
    for (const deck of ['middle', 'lower']) {
      capstan(-6.4, deck, deck === 'middle' ? 0.75 : 0.62);
      capstan(3.7, deck, deck === 'middle' ? 0.55 : 0.48);
    }

    // Skylight over the admiral's quarters.
    {
      const sk = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.5, 2.0), M.darkWood);
      base.position.y = 0.25;
      const roof = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 2.6, 3, 1), M.glass);
      roof.rotation.z = Math.PI / 2;
      roof.rotation.x = Math.PI / 6;
      roof.scale.set(1, 1, 0.9);
      roof.position.y = 0.75;
      sk.add(base, roof);
      sk.position.set(-8.8, deckY('qd', -8.8), 0);
      G.add(sk);
    }

    // Hatch gratings on the upper deck in the waist (seen from above).
    const gt = gratingTexture();
    const gm = new THREE.MeshStandardMaterial({ map: gt, roughness: 0.85 });
    for (const { x, w, d } of HATCHES.filter((h) => h.x > QD_FWD + 1 && h.x < FC_AFT - 1 && !h.ladder)) {
      const coam = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.3, d + 0.3), M.darkWood);
      coam.position.set(x, deckY('upper', x) + 0.15, 0);
      const gr = new THREE.Mesh(new THREE.PlaneGeometry(w, d), gm);
      gr.rotation.x = -Math.PI / 2;
      gr.position.set(x, deckY('upper', x) + 0.31, 0);
      gt.repeat.set(1, 1);
      G.add(coam, gr);
    }

    // Belfry at the after edge of the forecastle.
    {
      const b = new THREE.Group();
      const parts = [];
      for (const [dx, dz] of [[0.4, 0.4], [0.4, -0.4], [-0.4, 0.4], [-0.4, -0.4]]) {
        const p = new THREE.CylinderGeometry(0.06, 0.07, 1.6, 6);
        p.translate(dx, 0.8, dz);
        parts.push(p);
      }
      const roof = new THREE.ConeGeometry(0.75, 0.6, 4);
      roof.rotateY(Math.PI / 4);
      roof.translate(0, 1.9, 0);
      parts.push(roof);
      b.add(new THREE.Mesh(merge(parts), M.ochre));
      const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.28, 0.4, 14, 1, true), M.brass);
      bell.material = M.brass;
      bell.position.y = 1.25;
      b.add(bell);
      b.position.set(FC_AFT + 0.8, deckY('qd', FC_AFT + 0.8), 0);
      G.add(b);
    }

    // Galley chimney through the forecastle.
    {
      const ch = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.6, 0.6), M.copper);
      ch.position.set(20.3, deckY('qd', 20.3) + 0.8, 1.6);
      ch.castShadow = true;
      G.add(ch);
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.5, 10), M.copper);
      cap.rotation.z = Math.PI / 2;
      cap.position.set(20.3, deckY('qd', 20.3) + 1.75, 1.6);
      G.add(cap);
    }

    // Three poop lanterns on the taffrail.
    this.lanterns = [];
    {
      const xt = xStern(railTop(-29.4)) + 0.5;
      const y0 = railTop(-29.4) + 0.1;
      for (const [z, s] of [[0, 1.25], [3.2, 0.9], [-3.2, 0.9]]) {
        const l = new THREE.Group();
        const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.42 * s, 0.32 * s, 1.1 * s, 6), M.lantern);
        glass.position.y = 0.55 * s;
        const top = new THREE.Mesh(new THREE.ConeGeometry(0.5 * s, 0.6 * s, 6), M.gold);
        top.position.y = 1.4 * s;
        const fin = new THREE.Mesh(new THREE.SphereGeometry(0.12 * s, 8, 6), M.gold);
        fin.position.y = 1.8 * s;
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2 * s, 0.35 * s, 0.35 * s, 6), M.gold);
        base.position.y = -0.1;
        l.add(glass, top, fin, base);
        const arm = new THREE.Mesh(cylBetween(V(0.6, -0.6), V(0, 0), 0.06, 0.06, 6), M.gold);
        l.add(arm);
        l.position.set(xt - 0.3, y0 + 0.4, z);
        G.add(l);
        this.lanterns.push(glass);
      }
    }

    // Ensign staff at the taffrail, jackstaff on the bowsprit cap.
    {
      const xt = xStern(railTop(-29.4)) + 0.6;
      const a = V(xt, railTop(-29.4) - 0.5), b = V(xt - 2.2, railTop(-29.4) + 6.5);
      G.add(new THREE.Mesh(cylBetween(a, b, 0.09, 0.05, 8), M.spar));
      this.ensignStaff = b;
      const bs = rig.bowsprit;
      const c = bs.cap.clone().add(V(0, 0.4, 0));
      const d = c.clone().add(V(0.6, 4.2, 0));
      G.add(new THREE.Mesh(cylBetween(c, d, 0.07, 0.04, 8), M.spar));
      this.jackStaff = d;
    }

    // Anchors: bowers catted at the catheads, sheet anchors on the sides.
    this.anchors = [];
    for (const side of [1, -1]) {
      const x = 25.6, y = deckY('qd', x) + 0.55;
      const z = halfBreadth(x, y) - 0.4;
      const cat = V(x + 1.35, y + 0.2, side * (z + 1.85));
      const a = buildAnchor();
      // Shank slopes down and aft from the cathead; arms lie across the side.
      const d = V(Math.cos(1.05), Math.sin(1.05), side * 0.05).normalize();
      const ring = cat.clone().add(V(0, -0.5, 0));
      const crown = ring.clone().addScaledVector(d, -5.65);
      crown.z = side * (halfBreadth(crown.x, crown.y) + 1.25);
      const yAxis = ring.clone().sub(crown).normalize();
      const xAxis = V(0, 0, side).sub(yAxis.clone().multiplyScalar(yAxis.z * side)).normalize();
      const zAxis = V().crossVectors(xAxis, yAxis);
      a.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(xAxis, yAxis, zAxis));
      a.position.copy(crown);
      G.add(a);
      this.anchors.push({ obj: a, side, home: a.position.clone() });
    }
    // Sheet anchors (one each side) and the spare (starboard) stowed upright against the side,
    // in the gaps between the middle- and upper-deck ports abaft the fore channels.
    const upright = (x, side) => {
      const a = buildAnchor();
      const yTop = deckY('upper', x) + 3.4;
      const z = halfBreadth(x, yTop - 4) + 0.35;
      a.position.set(x, yTop - 5.65, side * z);
      a.rotation.set(side * 0.06, Math.PI / 2, 0);
      G.add(a);
    };
    upright(14.075, 1);
    upright(14.075, -1);
    upright(11.025, 1);
    // Stream anchor and kedge lashed on the booms in the waist.
    const flat = (scale, x, z) => {
      const a = buildAnchor();
      a.scale.setScalar(scale);
      a.rotation.set(Math.PI / 2, 0, -Math.PI / 2);
      a.position.set(x - 2.6 * scale, deckY('qd', x) + 0.5, z);
      G.add(a);
    };
    flat(0.6, 12.6, 4.7);
    flat(0.42, 12.4, -4.7);

    // Anchor cable (shown when the bower is let go).
    this.cable = new THREE.Mesh(new THREE.BufferGeometry(), M.rope);
    this.cable.castShadow = true;
    G.add(this.cable);
    this.hawse = V(26.9, deckY('middle', 26.9) + 0.9, halfBreadth(26.9, deckY('middle', 26.9) + 0.9) + 0.1);
  }

  // drop: 0 = catted, 1 = let go and holding.
  setAnchor(drop) {
    const A = this.anchors[0];
    A.obj.visible = drop < 0.95;
    A.obj.position.copy(A.home).add(new THREE.Vector3(0, -drop * 16, 0));
    if (drop > 0.02) {
      const a = this.hawse;
      const b = new THREE.Vector3(a.x + 4 + drop * 18, lerp(a.y - 1, -9, drop), a.z + drop * 3);
      const mid = a.clone().lerp(b, 0.5).add(new THREE.Vector3(0, -drop * 2.5, 0));
      const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
      this.cable.geometry.dispose();
      this.cable.geometry = new THREE.TubeGeometry(curve, 16, 0.14, 6);
      this.cable.visible = true;
    } else {
      this.cable.visible = false;
    }
  }
}
