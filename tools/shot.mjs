// Render screenshots of the page with headless Edge/Chrome.
// Usage: node tools/shot.mjs name1 "query1" [name2 "query2" ...]
// e.g.   node tools/shot.mjs sail "pose=sail&view=quarter"
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('usage: node tools/shot.mjs <name> <query> [...]');
  process.exit(1);
}
const outDir = resolve('screenshots/tmp');
mkdirSync(outDir, { recursive: true });
const page0 = pathToFileURL(resolve('index.html')).href;
const W = +(process.env.SHOT_W || 1600), H = +(process.env.SHOT_H || 900);

const browser = await chromium.launch({
  channel: process.env.SHOT_CHANNEL || 'msedge',
  headless: true,
  args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader'],
});
const page = await browser.newPage({ viewport: { width: W, height: H } });
const errors = [];
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));

for (let i = 0; i < args.length; i += 2) {
  const name = args[i], q = args[i + 1];
  const t0 = Date.now();
  await page.goto(`${page0}?shot=1&ui=0&t=12&${q}`);
  try {
    await page.waitForFunction(() => window.__ready === true, null, { timeout: +(process.env.SHOT_TIMEOUT || 60000) });
  } catch {
    console.log('timeout waiting for render');
    console.log(errors.splice(0).filter((e) => !e.includes('X4122')).slice(0, 10).join('\n'));
  }
  await page.waitForTimeout(+(process.env.SHOT_WAIT || 400));
  const file = `${outDir}/${name}.png`;
  await page.screenshot({ path: file });
  console.log(`${file}  (${Date.now() - t0} ms)`);
}
if (errors.length) console.log(errors.slice(0, 20).join('\n'));
await browser.close();
