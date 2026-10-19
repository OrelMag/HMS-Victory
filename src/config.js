// Shared dimensions and hull-form math for HMS Victory (1805).
// Units: metres. Axes: +x toward the bow, +y up, +z to starboard. Waterline at y = 0.

export const clamp01 = (t) => Math.min(1, Math.max(0, t));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

export const KEEL = -7.4;   // underside of keel amidships
export const BM = 7.9;      // maximum half-breadth (beam 15.8 m)
export const ZB = 1.6;      // height of maximum breadth
export const ZTOP = 13.0;   // reference height for tumblehome
export const TUMBLE = 0.17; // fraction the side draws in by ZTOP

// Deck heights amidships (above waterline); decks rise toward the ends with the sheer.
export const DECK = { hold: -5.2, orlop: -0.6, lower: 1.55, middle: 3.65, upper: 5.75, qd: 7.8, poop: 9.7 };

// Fore-and-aft extents of the raised decks.
export const QD_FWD = 1.2;      // forward edge of the quarterdeck
export const FC_AFT = 15.6;     // after edge of the forecastle
export const POOP_FWD = -13.4;  // forward edge of the poop

export function sheer(x) {
  const t = (x - 2) / 28;
  return 0.85 * t * t;
}

export function deckY(name, x) {
  return DECK[name] + sheer(x);
}

// Top of the hull side (bulwark rail).
export function railTop(x) {
  let y = 9.2 + sheer(x);
  y += 1.9 * smoothstep(POOP_FWD + 1.0, POOP_FWD - 1.0, x);
  y += 0.9 * smoothstep(-25, -29.5, x);
  return y;
}

// Stem profile: x of the bow at height h.
export function xBow(h) {
  if (h < 2) {
    const t = clamp01((h - KEEL) / (2 - KEEL));
    return 24.4 + 4.3 * (1 - (1 - t) * (1 - t));
  }
  return 28.7 + 0.06 * (h - 2);
}

// Stern profile: sternpost below the wing transom, raking counter above.
export const WING = 1.6; // height of the wing transom
export function xStern(h) {
  if (h < WING) {
    const t = clamp01((h - KEEL) / (WING - KEEL));
    return lerp(-25.4, -27.3, t);
  }
  return -27.3 - 1.1 * smoothstep(WING, 4.5, h) - 0.11 * Math.max(0, h - 4.5);
}

// Midship section half-breadth at height h.
export function bSec(h) {
  if (h <= KEEL) return 0;
  if (h < ZB) {
    const r = (ZB - h) / (ZB - KEEL);
    return BM * Math.pow(1 - Math.pow(r, 2.4), 1 / 2.4);
  }
  const r = (h - ZB) / (ZTOP - ZB);
  return BM * (1 - TUMBLE * Math.pow(r, 1.6));
}

// Fraction of the stern end that stays open (transom) at height h.
export function wEnd(h) {
  return 0.8 * smoothstep(-2.4, 2.4, h);
}

// Waterline shape: fraction of bSec at normalised length u (0 stern .. 1 bow).
export function wShape(u, h) {
  const s = smoothstep(-6.5, 1.5, h); // 0 deep (fine) .. 1 high (bluff)
  const ub = lerp(0.58, 0.73, s);
  if (u > ub) {
    const r = clamp01((u - ub) / (1 - ub));
    const a = lerp(1.7, 2.2, s);
    const b = lerp(1.05, 0.46, s);
    return Math.pow(Math.max(0, 1 - Math.pow(r, a)), b);
  }
  const us = lerp(0.44, 0.24, s);
  if (u < us) {
    const r = clamp01((us - u) / us);
    const a = lerp(1.6, 2.0, s);
    const b = lerp(1.15, 0.65, s);
    const we = wEnd(h);
    return we + (1 - we) * Math.pow(Math.max(0, 1 - Math.pow(r, a)), b);
  }
  return 1;
}

export function halfBreadth(x, h) {
  const xs = xStern(h), xb = xBow(h);
  if (x < xs || x > xb) return 0;
  return bSec(h) * wShape((x - xs) / (xb - xs), h);
}

// Hull texture mapping: u along the length, v by height relative to the sheer.
export const TEX_X0 = -31, TEX_X1 = 31, TEX_H0 = -10, TEX_H1 = 14;
export const texU = (x) => (x - TEX_X0) / (TEX_X1 - TEX_X0);
export const texV = (x, h) => (h - sheer(x) - TEX_H0) / (TEX_H1 - TEX_H0);

// Gun tiers. Heights are port centres relative to the sheer line.
export const TIERS = [
  { name: 'lower', deck: 'lower', count: 15, x0: -20.4, dx: 3.0, cy: 0.82, w: 1.05, h: 0.95, lid: true, bore: 0.165, len: 3.0 },
  { name: 'middle', deck: 'middle', count: 15, x0: -21.0, dx: 3.05, cy: 0.78, w: 0.95, h: 0.86, lid: true, bore: 0.15, len: 2.9 },
  { name: 'upper', deck: 'upper', count: 15, x0: -21.0, dx: 3.05, cy: 0.74, w: 0.85, h: 0.8, lid: true, bore: 0.12, len: 2.6 },
  { name: 'qd', deck: 'qd', count: 6, x0: -20.4, dx: 3.0, cy: 0.68, w: 0.75, h: 0.7, lid: false, bore: 0.12, len: 2.2 },
  { name: 'fc', deck: 'qd', count: 2, x0: 19.0, dx: 3.0, cy: 0.68, w: 0.75, h: 0.7, lid: false, bore: 0.12, len: 2.2 },
];

export function portList() {
  const ports = [];
  for (const t of TIERS) {
    for (let i = 0; i < t.count; i++) {
      const x = t.x0 + i * t.dx;
      ports.push({ tier: t, x, y: DECK[t.deck] + t.cy + sheer(x) });
    }
  }
  return ports;
}

// Paint bands (heights relative to the sheer line).
export const BANDS = TIERS.slice(0, 3).map((t) => {
  const c = DECK[t.deck] + t.cy;
  return [c - t.h / 2 - 0.2, c + t.h / 2 + 0.2];
});
export const COPPER_TOP = 0.45; // absolute height of the copper sheathing

// Masts: x position, heights above waterline, rake (radians, aft).
export const MASTS = {
  fore: { x: 19.6, scale: 0.9, rake: 0.015 },
  main: { x: -0.6, scale: 1.0, rake: 0.03 },
  mizzen: { x: -17.4, scale: 0.72, rake: 0.05 },
};
