// Report rope/spar/sail intersections for every pose, across wind directions and strengths,
// and through every pose transition.
// Usage: node tools/clash.mjs [pose ...]
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const poses = process.argv.slice(2).length ? process.argv.slice(2) : ['sail', 'trafalgar', 'action', 'anchor'];
const url = pathToFileURL(resolve('index.html')).href;
const browser = await chromium.launch({
  channel: process.env.SHOT_CHANNEL || 'msedge', headless: true,
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
page.on('pageerror', (e) => console.log('pageerror:', e.message));
await page.goto(`${url}?shot=1&ui=0&t=12`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });

const result = await page.evaluate((poses) => {
  const { ship, clashes } = window.__victory;
  const out = { states: 0, hits: [] };
  const step = (t) => { ship.update(t, 0.016); ship.update(t + 0.4, 0.016); };
  // Steady poses across the wind.
  const dirs = [-180, -155, -130, -105, -80, -60, -45, 0, 45, 60, 80, 105, 130, 155];
  for (const p of poses) {
    ship.setPose(p, true);
    for (const dir of dirs) for (const str of [0.2, 0.6, 1.0]) for (const t of [3, 11.3]) {
      ship.setWind(dir, str, true);
      step(t);
      out.states++;
      for (const c of clashes()) out.hits.push(`${p} wind ${dir}/${str} t${t}  ${c}`);
    }
  }
  // Transitions between every pair of poses.
  for (const dir of [-135, 90]) {
    ship.setWind(dir, 0.7, true);
    for (const a of ship.poseNames()) for (const b of ship.poseNames()) {
      if (a === b) continue;
      ship.setPose(a, true);
      ship.update(5, 0.01);
      ship.setPose(b);
      for (let k = 1; k <= 16; k++) {
        ship.update(5 + k * 0.7, 0.5);
        out.states++;
        for (const c of clashes()) out.hits.push(`${a}->${b} wind ${dir} @${(k / 16).toFixed(2)}  ${c}`);
      }
    }
  }
  return out;
}, poses);

console.log(`checked ${result.states} states: ${result.hits.length} clash(es)`);
// Group by clash, show a few example states for each.
const groups = new Map();
for (const h of result.hits) {
  const [state, what] = h.split(/\s{2}(?=\d+\t)/);
  const key = what.replace(/^\d+\t/, '');
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(state);
}
for (const [k, v] of [...groups].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${v.length}x  ${k}\n      e.g. ${v.slice(0, 3).join(' | ')}`);
}
await browser.close();
process.exit(result.hits.length ? 1 : 0);
