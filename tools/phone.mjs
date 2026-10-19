// Phone test: touch emulation, collapsed panel, sailor mode with the stick, pinch zoom, quality.
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const b = await chromium.launch({ channel: process.env.SHOT_CHANNEL || 'msedge', headless: true, args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(e.message));
const t0 = Date.now();
await p.goto(pathToFileURL(resolve('index.html')).href);
await p.waitForFunction(() => window.__ready === true, null, { timeout: 120000 });
console.log(`ready in ${((Date.now() - t0) / 1000).toFixed(1)} s`);
await p.waitForTimeout(800);
const st = () => p.evaluate(() => ({
  quality: localStorage.getItem('victory-quality'), pr: window.__victory && devicePixelRatio,
  collapsed: document.getElementById('ui').classList.contains('collapsed'),
  mode: window.__victory.iso.active, level: window.__victory.iso.sailor.level,
  x: +window.__victory.iso.sailor.x.toFixed(2), zoom: +window.__victory.iso.zoom.toFixed(1),
}));
console.log('start', JSON.stringify(await st()));
await p.screenshot({ path: 'screenshots/tmp/phone1.png' });
await p.tap('#collapse');
await p.tap('text=Sailor (isometric)');
await p.tap('#collapse');
await p.waitForTimeout(600);
const before = await st();
// Push the stick up (forward) for a second with a touch drag.
const box = await p.locator('#stick').boundingBox();
const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
const s = await ctx.newCDPSession(p);
await s.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: cx, y: cy, id: 1 }] });
for (let k = 1; k <= 10; k++) { await s.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: cx, y: cy - 4 * k, id: 1 }] }); await p.waitForTimeout(16); }
await p.waitForTimeout(1200);
await s.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
const after = await st();
console.log('stick moved the sailor:', before.x !== after.x, JSON.stringify(after));
// Pinch out to zoom in.
await s.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 150, y: 400, id: 1 }, { x: 240, y: 400, id: 2 }] });
for (let k = 1; k <= 8; k++) { await s.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 150 - 8 * k, y: 400, id: 1 }, { x: 240 + 8 * k, y: 400, id: 2 }] }); await p.waitForTimeout(16); }
await s.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
console.log('pinch zoom:', before.zoom, '->', (await st()).zoom);
await p.screenshot({ path: 'screenshots/tmp/phone2.png' });
await p.tap('#collapse');
await p.locator('#qualities').scrollIntoViewIfNeeded();
await p.tap('#qualities >> text=High');
await p.waitForTimeout(500);
console.log('after tapping High:', (await st()).quality);
await p.tap('#qualities >> text=Low');
await p.waitForTimeout(300);
await p.screenshot({ path: 'screenshots/tmp/phone3.png' });
console.log('errors:', errs.length ? errs : 'none');
await b.close();
process.exit(errs.length ? 1 : 0);
