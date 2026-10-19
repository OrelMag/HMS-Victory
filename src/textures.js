// Procedural canvas textures: hull paint, decks, stern, sails, flags, water detail.
import * as THREE from 'three';
import {
  TEX_X0, TEX_X1, TEX_H0, TEX_H1, sheer, portList, BANDS, COPPER_TOP, DECK,
} from './config.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

// Small deterministic PRNG so textures look the same every load.
export function rng(seed = 1) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function toTexture(c, { srgb = true, repeat = false, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

// 1805 colours after Goodwin's reading of the dockyard accounts: no red at all; the "black"
// was a deep slate grey and the yellow a pale ochre mixed with white.
export const COLORS = {
  black: '#2a2d30',
  ochre: '#cfa65a',
  red: '#a88a52', // port reveals: ochre in shadow (kept as a key for older code)
  deck: '#b49c76',
  canvas: '#e8dfc8',
  copper: '#a8603a',
  gold: '#d4a640',
};

// ---------- Hull side ----------
// Height field (grey, 128 = flat) -> tangent-space normal map.
function heightToNormal(hc, strength = 2.5) {
  const W = hc.width, H = hc.height;
  const src = hc.getContext('2d').getImageData(0, 0, W, H).data;
  const out = canvas(W, H), og = out.getContext('2d'), img = og.createImageData(W, H);
  const h = (x, y) => src[((Math.min(H - 1, Math.max(0, y)) * W) + Math.min(W - 1, Math.max(0, x))) * 4] / 255;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const dx = (h(x + 1, y) - h(x - 1, y)) * strength, dy = (h(x, y + 1) - h(x, y - 1)) * strength;
    const l = Math.hypot(dx, dy, 1);
    const i = (y * W + x) * 4;
    img.data[i] = (-dx / l * 0.5 + 0.5) * 255;
    img.data[i + 1] = (dy / l * 0.5 + 0.5) * 255;
    img.data[i + 2] = (1 / l * 0.5 + 0.5) * 255;
    img.data[i + 3] = 255;
  }
  og.putImageData(img, 0, 0);
  return out;
}

export function hullTextures() {
  const W = 4096, H = 1024;
  const c = canvas(W, H), g = c.getContext('2d');
  const hc = canvas(W / 2, H / 2), hg = hc.getContext('2d'); // height field for the normal map
  const mr = canvas(1024, 256), m = mr.getContext('2d');
  const sx = W / (TEX_X1 - TEX_X0), sy = H / (TEX_H1 - TEX_H0);
  const px = (x) => (x - TEX_X0) * sx;
  const py = (hs) => (TEX_H1 - hs) * sy; // hs = height above the sheer line
  const rand = rng(7);

  g.fillStyle = COLORS.black;
  g.fillRect(0, 0, W, H);
  hg.fillStyle = 'rgb(128,128,128)';
  hg.fillRect(0, 0, W / 2, H / 2);

  // Ochre port bands (the "Nelson chequer").
  g.fillStyle = COLORS.ochre;
  for (const [a, b] of BANDS) g.fillRect(0, py(b), W, py(a) - py(b));
  // Narrow ochre moulding below the rail.
  g.fillRect(0, py(DECK.qd + 1.02), W, 0.09 * sy);

  // Plank seams and butts (grooves in the height field), trenails at the frames, grain.
  for (let hs = TEX_H0; hs < TEX_H1; hs += 0.22) {
    const butts = [];
    let x = TEX_X0 - rand() * 6;
    while (x < TEX_X1) { butts.push(x); x += 5.5 + rand() * 2; }
    g.fillStyle = 'rgba(0,0,0,0.28)';
    g.fillRect(0, py(hs), W, 1.2);
    g.fillStyle = 'rgba(0,0,0,0.22)';
    for (const b of butts) g.fillRect(px(b), py(hs + 0.22), 1.2, 0.22 * sy);
    hg.fillStyle = 'rgb(70,70,70)';
    hg.fillRect(0, py(hs) / 2 - 0.5, W / 2, 1.6);
    for (const b of butts) hg.fillRect(px(b) / 2 - 0.5, py(hs + 0.22) / 2, 1.4, 0.22 * sy / 2);
    hg.fillStyle = 'rgba(100,100,100,0.8)';
    for (let f = TEX_X0; f < TEX_X1; f += 0.75) {
      hg.fillRect(px(f) / 2, py(hs + 0.08) / 2, 1.2, 1.2);
      hg.fillRect(px(f) / 2, py(hs + 0.16) / 2, 1.2, 1.2);
    }
  }
  for (let i = 0; i < 9000; i++) {
    const v = 110 + rand() * 40;
    hg.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.35)`;
    hg.fillRect(rand() * W / 2, rand() * H / 2, 4 + rand() * 30, 1);
  }
  // Weathering speckle.
  for (let i = 0; i < 26000; i++) {
    const a = rand() * 0.07;
    g.fillStyle = rand() < 0.5 ? `rgba(0,0,0,${a})` : `rgba(255,240,210,${a * 0.6})`;
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 5, 1 + rand() * 2);
  }

  // Gunport openings (dark interior, reveal) with water streaks running down from the sills.
  for (const p of portList()) {
    const t = p.tier;
    const hs = p.y - sheer(p.x);
    const x0 = px(p.x - t.w / 2), y0 = py(hs + t.h / 2);
    const w = t.w * sx, h = t.h * sy;
    for (let k = 0; k < 5; k++) {
      const sxp = x0 + rand() * w, len = (0.4 + rand() * 1.2) * sy;
      const grd = g.createLinearGradient(0, y0 + h, 0, y0 + h + len);
      grd.addColorStop(0, `rgba(20,14,8,${0.12 + rand() * 0.12})`);
      grd.addColorStop(1, 'rgba(20,14,8,0)');
      g.fillStyle = grd;
      g.fillRect(sxp, y0 + h, 2 + rand() * 5, len);
    }
    g.fillStyle = COLORS.red;
    g.fillRect(x0, y0, w, h);
    const ins = 0.09;
    g.fillStyle = '#0c0705';
    g.fillRect(x0 + ins * sx, y0 + ins * sy, w - 2 * ins * sx, h - 2 * ins * sy);
    hg.fillStyle = 'rgb(40,40,40)';
    hg.fillRect((x0 + ins * sx) / 2, (y0 + ins * sy) / 2, (w - 2 * ins * sx) / 2, (h - 2 * ins * sy) / 2);
  }
  // Lead scuppers just above each deck, with rust-brown runs below them.
  for (const d of ['lower', 'middle', 'upper']) {
    for (let x = -24; x < 24; x += 4.6) {
      const hs = DECK[d] - 0.05;
      const cx = px(x + (d === 'middle' ? 1.5 : 0)), cy = py(hs);
      const grd = g.createLinearGradient(0, cy, 0, cy + 1.1 * sy);
      grd.addColorStop(0, 'rgba(70,45,25,0.35)');
      grd.addColorStop(1, 'rgba(70,45,25,0)');
      g.fillStyle = grd;
      g.fillRect(cx - 4, cy, 8, 1.1 * sy);
      g.fillStyle = '#3e4042';
      g.fillRect(cx - 5, cy - 4, 10, 8);
      g.fillStyle = '#0a0806';
      g.beginPath(); g.ellipse(cx, cy, 2.6, 2.2, 0, 0, Math.PI * 2); g.fill();
      hg.fillStyle = 'rgb(150,150,150)';
      hg.fillRect(cx / 2 - 3.5, cy / 2 - 3, 7, 6);
      hg.fillStyle = 'rgb(30,30,30)';
      hg.fillRect(cx / 2 - 1.5, cy / 2 - 1.5, 3, 3);
    }
  }

  // Grime and weed just above the copper, following the waterline.
  for (let i = 0; i < 256; i++) {
    const xa = TEX_X0 + (i / 256) * (TEX_X1 - TEX_X0), xb = TEX_X0 + ((i + 1) / 256) * (TEX_X1 - TEX_X0);
    const top = py(COPPER_TOP + 0.45 - sheer(xa)), bot = py(COPPER_TOP - sheer(xa));
    const grd = g.createLinearGradient(0, top, 0, bot);
    grd.addColorStop(0, 'rgba(45,55,35,0)');
    grd.addColorStop(1, 'rgba(45,55,35,0.55)');
    g.fillStyle = grd;
    g.fillRect(px(xa), top, px(xb) - px(xa) + 1, bot - top);
  }

  // Copper sheathing below the (straight) waterline.
  const copperPath = (ctx) => {
    ctx.beginPath();
    ctx.moveTo(0, H);
    for (let i = 0; i <= 256; i++) {
      const x = TEX_X0 + (i / 256) * (TEX_X1 - TEX_X0);
      ctx.lineTo(px(x), py(COPPER_TOP - sheer(x)));
    }
    ctx.lineTo(W, H);
    ctx.closePath();
  };
  g.save();
  copperPath(g);
  g.clip();
  hg.save();
  hg.scale(0.5, 0.5);
  copperPath(hg);
  hg.clip();
  g.fillStyle = COLORS.copper;
  g.fillRect(0, 0, W, H);
  hg.fillStyle = 'rgb(128,128,128)';
  hg.fillRect(0, 0, W, H);
  const pw = 1.22, ph = 0.36;
  for (let row = 0, hs = TEX_H0; hs < 3; hs += ph, row++) {
    for (let x = TEX_X0 - (row % 2) * pw * 0.5; x < TEX_X1; x += pw) {
      const v = rand();
      const r = 150 + v * 40, gr = 82 + v * 30 + rand() * 25, b = 48 + v * 22;
      g.fillStyle = `rgb(${r | 0},${gr | 0},${b | 0})`;
      g.fillRect(px(x) + 1, py(hs + ph) + 1, pw * sx - 2, ph * sy - 2);
      if (rand() < 0.35) {
        g.fillStyle = `rgba(70,140,110,${0.15 + rand() * 0.25})`;
        g.fillRect(px(x) + 1, py(hs + ph) + 1, pw * sx - 2, ph * sy - 2);
      }
      // Overlapping plate edges and nail rows in the height field.
      hg.fillStyle = 'rgb(165,165,165)';
      hg.fillRect(px(x), py(hs + ph), 3, ph * sy);
      hg.fillRect(px(x), py(hs + ph), pw * sx, 3);
      hg.fillStyle = 'rgb(105,105,105)';
      for (let k = 0; k < 12; k++) hg.fillRect(px(x) + 6 + k * (pw * sx - 12) / 11, py(hs + ph) + 6, 2, 2);
    }
  }
  g.restore();
  hg.restore();

  // Metal/roughness map (G = roughness, B = metalness).
  m.fillStyle = 'rgb(0,165,0)';
  m.fillRect(0, 0, 1024, 256);
  m.beginPath();
  m.moveTo(0, 256);
  for (let i = 0; i <= 128; i++) {
    const x = TEX_X0 + (i / 128) * (TEX_X1 - TEX_X0);
    m.lineTo(((x - TEX_X0) / (TEX_X1 - TEX_X0)) * 1024, ((TEX_H1 - (COPPER_TOP - sheer(x))) / (TEX_H1 - TEX_H0)) * 256);
  }
  m.lineTo(1024, 256);
  m.closePath();
  m.fillStyle = 'rgb(0,105,190)';
  m.fill();

  return {
    map: toTexture(c, { aniso: 16 }),
    metalRough: toTexture(mr, { srgb: false }),
    normal: toTexture(heightToNormal(hc), { srgb: false, aniso: 16 }),
  };
}

// ---------- Inside face of the hull planking ----------
// Same mapping as the outside, so gunports line up: bare wood in the hold, whitewash on the
// orlop, pale ochre between the gun decks.
export function interiorHullTexture() {
  const W = 4096, H = 1024;
  const c = canvas(W, H), g = c.getContext('2d');
  const sx = W / (TEX_X1 - TEX_X0), sy = H / (TEX_H1 - TEX_H0);
  const px = (x) => (x - TEX_X0) * sx;
  const py = (hs) => (TEX_H1 - hs) * sy;
  const rand = rng(13);
  const band = (a, b, col) => { g.fillStyle = col; g.fillRect(0, py(b), W, py(a) - py(b)); };
  band(TEX_H0, DECK.orlop, '#7a6549');
  band(DECK.orlop, DECK.lower, '#d8d0bd');
  band(DECK.lower, TEX_H1, '#c9a965');
  for (let hs = TEX_H0; hs < TEX_H1; hs += 0.24) {
    g.fillStyle = 'rgba(0,0,0,0.18)';
    g.fillRect(0, py(hs), W, 1.2);
  }
  for (let i = 0; i < 20000; i++) {
    g.fillStyle = `rgba(0,0,0,${rand() * 0.06})`;
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 6, 1 + rand() * 2);
  }
  // Clamps and waterways: heavier dark strakes along each deck.
  for (const d of ['orlop', 'lower', 'middle', 'upper', 'qd']) {
    g.fillStyle = 'rgba(60,40,20,0.55)';
    g.fillRect(0, py(DECK[d] + 0.3), W, 0.3 * sy);
    g.fillRect(0, py(DECK[d] - 0.25), W, 0.25 * sy);
  }
  for (const p of portList()) {
    const t = p.tier;
    const hs = p.y - sheer(p.x);
    const x0 = px(p.x - t.w / 2), y0 = py(hs + t.h / 2);
    g.fillStyle = '#9c7f48';
    g.fillRect(x0, y0, t.w * sx, t.h * sy);
    g.fillStyle = '#120b06';
    g.fillRect(x0 + 0.08 * sx, y0 + 0.08 * sy, (t.w - 0.16) * sx, (t.h - 0.16) * sy);
  }
  return toTexture(c, { aniso: 16 });
}

// Shingle ballast in the hold.
export function ballastTexture() {
  const S = 256, c = canvas(S, S), g = c.getContext('2d');
  const rand = rng(29);
  g.fillStyle = '#6d6a62';
  g.fillRect(0, 0, S, S);
  for (let i = 0; i < 2200; i++) {
    const v = 70 + rand() * 90;
    g.fillStyle = `rgb(${v | 0},${(v * 0.97) | 0},${(v * 0.9) | 0})`;
    g.beginPath();
    g.ellipse(rand() * S, rand() * S, 1 + rand() * 4, 1 + rand() * 3, rand() * 3, 0, Math.PI * 2);
    g.fill();
  }
  return toTexture(c, { repeat: true });
}

// ---------- Deck planking (tiles every 8 m) ----------
export function deckTexture() {
  const S = 1024, c = canvas(S, S), g = c.getContext('2d');
  const rand = rng(3);
  const plank = S / 8 * 0.28;
  for (let y = 0, row = 0; y < S; y += plank, row++) {
    let x = -rand() * S * 0.5;
    while (x < S) {
      const len = S / 8 * (5 + rand() * 3);
      const v = rand();
      g.fillStyle = `rgb(${(168 + v * 26) | 0},${(146 + v * 22) | 0},${(108 + v * 18) | 0})`;
      g.fillRect(x, y, len, plank);
      for (let k = 0; k < 14; k++) {
        g.fillStyle = `rgba(90,60,30,${rand() * 0.08})`;
        g.fillRect(x, y + rand() * plank, len, 1);
      }
      g.fillStyle = 'rgba(40,25,10,0.7)';
      g.fillRect(x, y, 2, plank);
      g.fillStyle = 'rgba(60,40,20,0.55)';
      g.fillRect(x + 6, y + plank * 0.3, 3, 3);
      g.fillRect(x + 6, y + plank * 0.65, 3, 3);
      x += len;
    }
    g.fillStyle = 'rgba(25,18,10,0.85)';
    g.fillRect(0, y, S, 2);
  }
  const t = toTexture(c, { repeat: true, aniso: 16 });
  return t;
}

// ---------- Stern face ----------
// u: 0..1 across (port..starboard), v: height from h0..h1.
export const STERN_H0 = -2.4, STERN_H1 = 13.6;
export function sternTexture(widthAt) {
  const W = 2048, H = 2048, c = canvas(W, H), g = c.getContext('2d');
  const gc = canvas(512, 512), gg = gc.getContext('2d'); // lit windows after dark
  gg.fillStyle = '#000';
  gg.fillRect(0, 0, 512, 512);
  const py = (h) => (STERN_H1 - h) / (STERN_H1 - STERN_H0) * H;
  const s0 = sheer(-28.5);
  g.fillStyle = COLORS.black;
  g.fillRect(0, 0, W, H);

  // Copper below the waterline.
  g.fillStyle = COLORS.copper;
  g.fillRect(0, py(COPPER_TOP), W, H);

  const deck = (n) => DECK[n] + s0;
  // Name board.
  g.fillStyle = COLORS.ochre;
  g.fillRect(0, py(deck('middle') - 0.1), W, (0.25 / 16) * H);
  g.font = `bold ${(0.55 / 16) * H}px Georgia, serif`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillStyle = COLORS.gold;
  g.fillText('V I C T O R Y', W / 2, py(deck('middle') - 0.75));

  // Three tiers of stern windows with balustrade bands.
  const tiers = [
    [deck('middle') + 0.45, deck('middle') + 1.75],
    [deck('upper') + 0.45, deck('upper') + 1.75],
    [deck('qd') + 0.4, deck('qd') + 1.6],
  ];
  for (const [a, b] of tiers) {
    const hw = widthAt((a + b) / 2); // half-width in metres at this height
    const span = hw * 2;
    const toX = (z) => (z / span + 0.5) * W;
    // Balustrade band below.
    g.fillStyle = COLORS.ochre;
    g.fillRect(0, py(a), W, py(a - 0.45) - py(a));
    g.fillStyle = 'rgba(0,0,0,0.5)';
    for (let z = -hw; z < hw; z += 0.22) g.fillRect(toX(z), py(a - 0.08), 3, py(a - 0.38) - py(a - 0.08));
    // Pilasters & windows.
    const n = 9, ww = (span - 0.5) / n;
    for (let i = 0; i < n; i++) {
      const z0 = -hw + 0.25 + i * ww;
      g.fillStyle = COLORS.ochre;
      g.fillRect(toX(z0), py(b + 0.15), (0.18 / span) * W, py(a) - py(b + 0.15));
      const wx0 = toX(z0 + 0.22), wx1 = toX(z0 + ww - 0.05);
      g.fillStyle = '#e7dcc0';
      g.fillRect(wx0, py(b), wx1 - wx0, py(a) - py(b));
      // Glass panes.
      const cols = 3, rows = 4;
      const pw = (wx1 - wx0) / cols, ph = (py(a) - py(b)) / rows;
      for (let cc = 0; cc < cols; cc++) for (let rr = 0; rr < rows; rr++) {
        const sh = 30 + ((cc * 7 + rr * 13 + i * 5) % 9) * 6;
        g.fillStyle = `rgb(${sh * 0.6 | 0},${sh * 0.8 | 0},${sh | 0})`;
        g.fillRect(wx0 + cc * pw + 3, py(b) + rr * ph + 3, pw - 6, ph - 6);
        gg.fillStyle = `rgb(255,${190 + ((cc + rr + i) % 3) * 15},${110 + ((cc * rr + i) % 4) * 12})`;
        gg.fillRect((wx0 + cc * pw + 3) / 4, (py(b) + rr * ph + 3) / 4, (pw - 6) / 4, (ph - 6) / 4);
      }
    }
    g.fillStyle = COLORS.ochre;
    g.fillRect(0, py(b + 0.4), W, py(b) - py(b + 0.4));
  }

  // Taffrail with the royal arms.
  const ta = deck('poop') + 0.3;
  g.fillStyle = COLORS.ochre;
  g.fillRect(0, 0, W, py(ta));
  const tex = toTexture(c, { aniso: 16 });
  tex.userData.glow = toTexture(gc);
  return tex;
}

// Quarter-gallery / poop-front window strip (tileable horizontally).
export function windowStripTexture() {
  const c = canvas(512, 256), g = c.getContext('2d');
  g.fillStyle = COLORS.ochre;
  g.fillRect(0, 0, 512, 256);
  for (let i = 0; i < 4; i++) {
    const x = 16 + i * 128;
    g.fillStyle = '#e7dcc0';
    g.fillRect(x, 40, 96, 176);
    for (let cc = 0; cc < 2; cc++) for (let rr = 0; rr < 3; rr++) {
      g.fillStyle = '#26323e';
      g.fillRect(x + 6 + cc * 45, 46 + rr * 57, 39, 51);
    }
  }
  return toTexture(c, { repeat: true });
}

// ---------- Sailcloth (tiles every 2 m across, 4 m down) ----------
export function sailTexture() {
  const W = 256, H = 512, c = canvas(W, H), g = c.getContext('2d');
  const rand = rng(11);
  g.fillStyle = COLORS.canvas;
  g.fillRect(0, 0, W, H);
  for (let i = 0; i < 4000; i++) {
    g.fillStyle = `rgba(120,100,70,${rand() * 0.05})`;
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 3, 1);
  }
  // Weathering: faint water stains, mildew speckle and the odd patch of newer cloth.
  for (let i = 0; i < 14; i++) {
    const x = rand() * W, y = rand() * H, r = 20 + rand() * 60;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, `rgba(120,105,75,${0.04 + rand() * 0.06})`);
    grd.addColorStop(1, 'rgba(120,105,75,0)');
    g.fillStyle = grd;
    g.fillRect(x - r, y - r, 2 * r, 2 * r);
  }
  for (let i = 0; i < 900; i++) {
    g.fillStyle = `rgba(70,75,60,${rand() * 0.1})`;
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 2, 1 + rand() * 2);
  }
  {
    const px = Math.floor(rand() * 3) * (W / 3), py = rand() * (H - 120);
    g.fillStyle = 'rgba(255,252,240,0.35)';
    g.fillRect(px + 3, py, W / 3 - 3, 90 + rand() * 50);
  }
  // Cloth seams every ~0.6 m.
  for (let k = 0; k < 3; k++) {
    const x = (k / 3) * W;
    g.fillStyle = 'rgba(110,90,60,0.35)';
    g.fillRect(x, 0, 3, H);
    g.fillStyle = 'rgba(255,255,255,0.25)';
    g.fillRect(x + 3, 0, 2, H);
  }
  return toTexture(c, { repeat: true });
}

// Cloth relief: doubled seams, slight puckering and weave, tiling with the sail texture.
export function sailNormalTexture() {
  const W = 256, H = 512, c = canvas(W, H), g = c.getContext('2d');
  const rand = rng(12);
  g.fillStyle = 'rgb(128,128,128)';
  g.fillRect(0, 0, W, H);
  for (let i = 0; i < 260; i++) {
    const v = 105 + rand() * 46;
    g.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.5)`;
    g.fillRect(rand() * W, rand() * H, 2 + rand() * 6, 20 + rand() * 90);
  }
  for (let k = 0; k < 3; k++) {
    const x = (k / 3) * W;
    g.fillStyle = 'rgb(185,185,185)';
    g.fillRect(x, 0, 5, H);
    g.fillStyle = 'rgb(90,90,90)';
    g.fillRect(x + 5, 0, 1.5, H);
    g.fillRect(x - 1.5, 0, 1.5, H);
  }
  return toTexture(heightToNormal(c, 3), { srgb: false, repeat: true });
}

// Topsail cloth with three reef bands near the head (u tiles every 2 m, v spans the sail).
export function reefSailTexture() {
  const W = 256, H = 1024, c = canvas(W, H), g = c.getContext('2d');
  g.drawImage(sailTexture().image, 0, 0, W, 512);
  g.drawImage(sailTexture().image, 0, 512, W, 512);
  for (const f of [0.12, 0.24, 0.36]) {
    const y = f * H;
    g.fillStyle = 'rgba(150,130,95,0.55)';
    g.fillRect(0, y - 7, W, 14);
    g.fillStyle = 'rgba(110,90,60,0.6)';
    g.fillRect(0, y - 8, W, 2);
    g.fillRect(0, y + 6, W, 2);
    for (let x = 10; x < W; x += 21) {
      g.fillStyle = 'rgba(70,55,35,0.85)';
      g.fillRect(x, y - 3, 3, 22);
    }
  }
  return toTexture(c, { repeat: true });
}

// ---------- Flags ----------
function drawUnion(g, x, y, w, h) {
  g.fillStyle = '#1f2f6b';
  g.fillRect(x, y, w, h);
  const diag = (lw, col) => {
    g.strokeStyle = col;
    g.lineWidth = lw;
    g.beginPath();
    g.moveTo(x, y); g.lineTo(x + w, y + h);
    g.moveTo(x + w, y); g.lineTo(x, y + h);
    g.stroke();
  };
  g.save();
  g.beginPath(); g.rect(x, y, w, h); g.clip();
  diag(h * 0.2, '#fff');
  diag(h * 0.07, '#c8202f');
  g.restore();
  g.fillStyle = '#fff';
  g.fillRect(x + w / 2 - h * 0.17, y, h * 0.34, h);
  g.fillRect(x, y + h / 2 - h * 0.17, w, h * 0.34);
  g.fillStyle = '#c8202f';
  g.fillRect(x + w / 2 - h * 0.1, y, h * 0.2, h);
  g.fillRect(x, y + h / 2 - h * 0.1, w, h * 0.2);
}

export function flagTexture(kind) {
  const W = 512, H = 256, c = canvas(W, H), g = c.getContext('2d');
  if (kind === 'union') {
    drawUnion(g, 0, 0, W, H);
  } else if (kind === 'pennant') {
    g.fillStyle = '#fff';
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#c8202f';
    g.fillRect(0, 0, 40, H);
    g.fillRect(0, H / 2 - 18, 40, 36);
  } else {
    // White ensign (1801) or Vice-Admiral of the White.
    g.fillStyle = '#f4f2ec';
    g.fillRect(0, 0, W, H);
    g.fillStyle = '#c8202f';
    g.fillRect(W / 2 - 20, 0, 40, H);
    g.fillRect(0, H / 2 - 20, W, 40);
    if (kind === 'ensign') drawUnion(g, 0, 0, W / 2 - 20, H / 2 - 20);
  }
  return toTexture(c);
}

// ---------- Hammock cloths ----------
export function hammockTexture() {
  const c = canvas(256, 64), g = c.getContext('2d');
  g.fillStyle = '#d9cfb4';
  g.fillRect(0, 0, 256, 64);
  const rand = rng(5);
  for (let i = 0; i < 40; i++) {
    g.fillStyle = `rgba(150,130,95,${0.2 + rand() * 0.3})`;
    g.fillRect(i * 6.4, 0, 4 + rand() * 2, 64);
  }
  g.strokeStyle = 'rgba(40,30,20,0.6)';
  g.lineWidth = 1.5;
  for (let x = -64; x < 256; x += 12) {
    g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 64, 64); g.stroke();
    g.beginPath(); g.moveTo(x + 64, 0); g.lineTo(x, 64); g.stroke();
  }
  return toTexture(c, { repeat: true });
}

// ---------- Soft round sprite for smoke and flashes ----------
export function puffTexture() {
  const S = 128, c = canvas(S, S), g = c.getContext('2d');
  const rand = rng(17);
  for (let i = 0; i < 18; i++) {
    const x = S / 2 + (rand() - 0.5) * S * 0.35, y = S / 2 + (rand() - 0.5) * S * 0.35;
    const r = S * (0.18 + rand() * 0.2);
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    grd.addColorStop(0, 'rgba(255,255,255,0.35)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  }
  return toTexture(c);
}

// ---------- Tileable water detail normal map ----------
export function waterNormalTexture() {
  const S = 256, hgt = new Float32Array(S * S);
  const rand = rng(23);
  const waves = [];
  for (let i = 0; i < 40; i++) {
    const kx = Math.round((rand() - 0.5) * 24), ky = Math.round((rand() - 0.5) * 24);
    if (!kx && !ky) continue;
    waves.push([kx, ky, rand() * Math.PI * 2, 1 / Math.hypot(kx, ky)]);
  }
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    let v = 0;
    for (const [kx, ky, ph, a] of waves) v += a * Math.sin(((kx * x + ky * y) / S) * Math.PI * 2 + ph);
    hgt[y * S + x] = v;
  }
  const c = canvas(S, S), g = c.getContext('2d'), img = g.createImageData(S, S);
  const k = 2.2;
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    const dx = hgt[y * S + ((x + 1) % S)] - hgt[y * S + ((x - 1 + S) % S)];
    const dy = hgt[((y + 1) % S) * S + x] - hgt[((y - 1 + S) % S) * S + x];
    let nx = -dx * k, ny = -dy * k, nz = 1;
    const l = Math.hypot(nx, ny, nz);
    nx /= l; ny /= l; nz /= l;
    const i = (y * S + x) * 4;
    img.data[i] = (nx * 0.5 + 0.5) * 255;
    img.data[i + 1] = (ny * 0.5 + 0.5) * 255;
    img.data[i + 2] = (nz * 0.5 + 0.5) * 255;
    img.data[i + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return toTexture(c, { srgb: false, repeat: true });
}

// Simple wood grain for spars.
export function woodTexture(base = '#9a7448') {
  const c = canvas(64, 512), g = c.getContext('2d');
  const rand = rng(31);
  g.fillStyle = base;
  g.fillRect(0, 0, 64, 512);
  for (let i = 0; i < 90; i++) {
    g.fillStyle = `rgba(60,35,15,${rand() * 0.18})`;
    g.fillRect(rand() * 64, 0, 1 + rand() * 2, 512);
  }
  return toTexture(c, { repeat: true });
}
