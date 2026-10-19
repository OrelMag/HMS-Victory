// Frame time at 1080p for a few views: node tools/fps.mjs ["query" ...]
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const qs = process.argv.slice(2).length ? process.argv.slice(2) : ['pose=trafalgar', 'view=deck&pose=anchor', 'time=night', 'mode=sailor&pose=anchor'];
const b = await chromium.launch({ channel: process.env.SHOT_CHANNEL || 'msedge', headless: true, args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist', '--disable-gpu-vsync', '--disable-frame-rate-limit'] });
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
for (const q of qs) {
  await p.goto(pathToFileURL(resolve('index.html')).href + '?' + q);
  await p.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
  await p.waitForTimeout(1500);
  const n = await p.evaluate(() => new Promise((res) => { let k = 0; const t0 = performance.now(); const f = (t) => { k++; if (t - t0 < 4000) requestAnimationFrame(f); else res(k); }; requestAnimationFrame(f); }));
  console.log(q.padEnd(30), `${(4000 / n).toFixed(1)} ms/frame`);
}
console.log('errors:', errs.length ? errs : 'none');
await b.close();
