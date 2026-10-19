// Report rope/spar/sail intersections for each pose.
// Usage: node tools/clash.mjs [pose ...]
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const poses = process.argv.slice(2).length ? process.argv.slice(2) : ['sail', 'action', 'anchor'];
const url = pathToFileURL(resolve('index.html')).href;
const browser = await chromium.launch({
  channel: process.env.SHOT_CHANNEL || 'msedge', headless: true,
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'],
});
const page = await browser.newPage({ viewport: { width: 800, height: 450 } });
page.on('pageerror', (e) => console.log('pageerror:', e.message));
let total = 0;
for (const pose of poses) {
  await page.goto(`${url}?shot=1&ui=0&t=12&pose=${pose}`);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
  const list = await page.evaluate(() => window.__victory.clashes());
  total += list.length;
  console.log(`\n== ${pose}: ${list.length} clash group(s)`);
  for (const l of list) console.log('  ' + l);
}
// Transitions between every pair of poses, sampled through the change, at several moments.
await page.goto(`${url}?shot=1&ui=0&t=12&pose=sail`);
await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
const trans = await page.evaluate(() => {
  const { ship, clashes } = window.__victory;
  const names = ship.poseNames();
  const out = [];
  for (const a of names) for (const b of names) {
    if (a === b) continue;
    ship.setPose(a, true);
    ship.update(5, 0.01);
    ship.setPose(b);
    for (let k = 1; k <= 16; k++) {
      ship.update(5 + k * 0.7, 0.5);
      for (const c of clashes()) out.push(`${a}->${b} @${(k / 16).toFixed(2)}  ${c}`);
    }
  }
  return out;
});
total += trans.length;
console.log(`
== transitions: ${trans.length} clash(es)`);
for (const l of trans.slice(0, 40)) console.log('  ' + l);
await browser.close();
process.exit(total ? 1 : 0);
