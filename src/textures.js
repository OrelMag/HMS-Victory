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
export function hullTextures() {
  const W = 4096, H = 1024;
  const c = canvas(W, H), g = c.getContext('2d');
  const mr = canvas(1024, 256), m = mr.getContext('2d');
  const sx = W / (TEX_X1 - TEX_X0), sy = H / (TEX_H1 - TEX_H0);
  const px = (x) => (x - TEX_X0) * sx;
  const py = (hs) => (TEX_H1 - hs) * sy; // hs = height above the sheer line
  const rand = rng(7);

  g.fillStyle = COLORS.black;
  g.fillRect(0, 0, W, H);

  // Ochre port bands (the "Nelson chequer").
  g.fillStyle = COLORS.ochre;
  for (const [a, b] of BANDS) g.fillRect(0, py(b), W, py(a) - py(b));
  // Narrow ochre moulding below the rail.
  g.fillRect(0, py(DECK.qd + 1.02), W, 0.09 * sy);

  // Plank seams and butts.
  for (let hs = TEX_H0; hs < TEX_H1; hs += 0.22) {
    g.fillStyle = 'rgba(0,0,0,0.28)';
    g.fillRect(0, py(hs), W, 1.2);
    let x = TEX_X0 - rand() * 6;
    g.fillStyle = 'rgba(0,0,0,0.22)';
    while (x < TEX_X1) {
      g.fillRect(px(x), py(hs + 0.22), 1.2, 0.22 * sy);
      x += 5.5 + rand() * 2;
    }
  }
  // Weathering speckle.
  for (let i = 0; i < 26000; i++) {
    const a = rand() * 0.07;
    g.fillStyle = rand() < 0.5 ? `rgba(0,0,0,${a})` : `rgba(255,240,210,${a * 0.6})`;
    g.fillRect(rand() * W, rand() * H, 1 + rand() * 5, 1 + rand() * 2);
  }
  // Main wales: slightly glossier black strakes below the lower ports.
  g.fillStyle = 'rgba(0,0,0,0.35)';
  g.fillRect(0, py(BANDS[0][0]), W, 0.9 * sy);

  // Gunport openings (dark interior, red reveal) — the lids are separate meshes.
  for (const p of portList()) {
    const t = p.tier;
    const hs = p.y - sheer(p.x);
    const x0 = px(p.x - t.w / 2), y0 = py(hs + t.h / 2);
    const w = t.w * sx, h = t.h * sy;
    g.fillStyle = COLORS.red;
    g.fillRect(x0, y0, w, h);
    const ins = 0.09;
    g.fillStyle = '#0c0705';
    g.fillRect(x0 + ins * sx, y0 + ins * sy, w - 2 * ins * sx, h - 2 * ins * sy);
  }

  // Copper sheathing below the (straight) waterline.
  g.save();
  g.beginPath();
  g.moveTo(0, H);
  for (let i = 0; i <= 256; i++) {
    const x = TEX_X0 + (i / 256) * (TEX_X1 - TEX_X0);
    g.lineTo(px(x), py(COPPER_TOP - sheer(x)));
  }
  g.lineTo(W, H);
  g.closePath();
  g.clip();
  g.fillStyle = COLORS.copper;
  g.fillRect(0, 0, W, H);
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
    }
  }
  g.restore();

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

  return { map: toTexture(c, { aniso: 16 }), metalRough: toTexture(mr, { srgb: false }) };
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
      }
    }
    g.fillStyle = COLORS.ochre;
    g.fillRect(0, py(b + 0.4), W, py(b) - py(b + 0.4));
  }

  // Taffrail with the royal arms.
  const ta = deck('poop') + 0.3;
  g.fillStyle = COLORS.ochre;
  g.fillRect(0, 0, W, py(ta));
  g.fillStyle = COLORS.gold;
  const cx = W / 2, cy = py(ta + 1.1), r = (0.75 / 16) * H;
  g.beginPath();
  g.moveTo(cx - r, cy - r);
  g.lineTo(cx + r, cy - r);
  g.lineTo(cx + r, cy + r * 0.3);
  g.quadraticCurveTo(cx + r, cy + r * 1.3, cx, cy + r * 1.5);
  g.quadraticCurveTo(cx - r, cy + r * 1.3, cx - r, cy + r * 0.3);
  g.closePath();
  g.fill();
  g.fillStyle = '#7a1b14';
  g.fillRect(cx - r * 0.8, cy - r * 0.8, r * 0.75, r * 0.9);
  g.fillStyle = '#20306a';
  g.fillRect(cx + r * 0.05, cy - r * 0.8, r * 0.75, r * 0.9);
  // Scrollwork flourishes.
  g.strokeStyle = COLORS.gold;
  g.lineWidth = 6;
  for (let k = 1; k <= 3; k++) {
    g.beginPath();
    g.arc(cx - r * (1.6 + k * 1.3), cy, r * 0.6, 0, Math.PI * 1.6);
    g.stroke();
    g.beginPath();
    g.arc(cx + r * (1.6 + k * 1.3), cy, r * 0.6, Math.PI * 1.4, Math.PI * 3);
    g.stroke();
  }
  return toTexture(c, { aniso: 16 });
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
