// Scripted walk test for the sailor: ladders up and down, deck breaks, collisions.
import { chromium } from 'playwright-core';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
const b = await chromium.launch({ channel: process.env.SHOT_CHANNEL || 'msedge', headless: true, args: ['--use-angle=d3d11', '--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 800, height: 450 } });
p.on('pageerror', (e) => console.log('pageerror:', e.message));
await p.goto(pathToFileURL(resolve('index.html')).href + '?shot=1&ui=0&t=12&pose=anchor&mode=sailor');
await p.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
const out = await p.evaluate(() => {
  const { ship, iso } = window.__victory;
  const s = iso.sailor;
  const log = [];
  const at = (level, x, z) => { s.level = level; s.x = x; s.z = z; s.climb = null; s.lastPortal = null; s.target = null; };
  const walk = (mx, mz, secs) => { for (let t = 0; t < secs; t += 1 / 30) s.update(1 / 30, { x: mx, z: mz }, false, ship); };
  const report = (name, wantLevel) => {
    const ok = !wantLevel || s.level === wantLevel;
    log.push(`${ok ? 'PASS' : 'FAIL'}  ${name}: level=${s.level} x=${s.x.toFixed(2)} z=${s.z.toFixed(2)}`);
  };
  // 1. Up the main ladderway from the middle deck to the upper deck.
  at('middle', 6.0, 3.25); log.push(`start free: ${s.map.free('middle', 6.0, 3.25)}`);
  walk(0, -1, 3.5); report('middle -> upper by main ladderway', 'upper');
  // 2. Step away, then walk back into the opening to go down again.
  walk(0, 1, 0.8); walk(0, -1, 3.5); report('upper -> middle back down', 'middle');
  // 3. Companion ladder from the waist up to the quarterdeck.
  at('upper', 4.6, 2.6); walk(-1, 0, 4); report('waist -> quarterdeck by companion', 'qd');
  // 4. Quarterdeck aft to the poop ladder, up to the poop.
  at('qd', -9.8, 3.4); walk(-1, 0, 4.5); report('quarterdeck -> poop', 'poop');
  // 5. Collision: walk into a gun on the lower deck; must stop short of the side.
  at('lower', -9.0, 2.0); walk(0, 1, 4); report(`stopped by gun/side (z<6)`, s.z < 6 ? 'lower' : 'X');
  // 6. Doorway: from Nelson's dining cabin aft into the great cabin through the bulkhead door.
  at('upper', -23.0, 0.0); walk(-1, 0, 4); report('through doorway into the great cabin (x<-23.8)', s.x < -23.8 ? 'upper' : 'X');
  // 8. Down the long ladder into the hold, and back up.
  at('orlop', 1.8, -2.4); walk(0, 1, 5); report('orlop -> hold', 'hold');
  walk(0, -1, 0.8); walk(0, 1, 5); report('hold -> orlop', 'orlop');
  // 7. Orlop ladder up to the lower deck at the after ladderway.
  at('orlop', -12.2, 3.6); walk(0, -1, 3.5); report('orlop -> lower', 'lower');
  return log;
});
// Reachability: flood-fill every deck from the quarterdeck, joined by the ladders, and check that
// each room can be entered (in the normal pose and cleared for action).
for (const pose of ['anchor', 'action']) {
  const res = await p.evaluate(async (pose) => {
    const { ship, iso, ROOMS } = window.__victory;
    ship.setPose(pose, true);
    ship.update(12, 0.01);
    const s = iso.sailor;
    s.rebuild(ship);
    const M = s.map, X0 = -31, Z0 = -8.6, C = 0.1, NX = 620, NZ = 172;
    const seen = Object.fromEntries(Object.keys(M.grids).map((l) => [l, new Uint8Array(NX * NZ)]));
    const queue = [];
    const push = (l, x, z) => {
      const c = M.cell(x, z);
      if (c < 0 || !M.grids[l][c] || seen[l][c]) return false;
      seen[l][c] = 1; queue.push([l, c]); return true;
    };
    push('qd', -9.5, 2.4);
    let changed = true;
    while (changed) {
      while (queue.length) {
        const [l, c] = queue.pop();
        const i = c % NX, j = (c / NX) | 0;
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const ni = i + di, nj = j + dj;
          if (ni < 0 || nj < 0 || ni >= NX || nj >= NZ) continue;
          const nc = nj * NX + ni;
          if (M.grids[l][nc] && !seen[l][nc]) { seen[l][nc] = 1; queue.push([l, nc]); }
        }
      }
      changed = false;
      for (const pt of M.portals) {
        const a = seen[pt.lo][M.cell(pt.foot.x, pt.foot.z)], b = seen[pt.hi][M.cell(pt.top.x, pt.top.z)];
        if (a && !b) changed = push(pt.hi, pt.top.x, pt.top.z) || changed;
        if (b && !a) changed = push(pt.lo, pt.foot.x, pt.foot.z) || changed;
      }
    }
    const missing = [];
    for (const r of ROOMS) {
      if (r.obj) continue;
      const l = r.deck;
      let ok = false;
      for (let x = Math.min(r.x0, r.x1) + 0.2; x < Math.max(r.x0, r.x1) - 0.2 && !ok; x += 0.1) {
        for (let z = Math.min(r.z0, r.z1) + 0.2; z < Math.max(r.z0, r.z1) - 0.2 && !ok; z += 0.1) {
          const c = M.cell(x, z);
          if (c >= 0 && seen[l][c]) ok = true;
        }
      }
      if (!ok) missing.push(`${r.name} (${r.deck})`);
    }
    const counts = Object.fromEntries(Object.keys(seen).map((l) => [l, seen[l].reduce((a, v) => a + v, 0)]));
    return { missing, counts };
  }, pose);
  console.log(`${pose}: reachable cells per deck ${JSON.stringify(res.counts)}`);
  console.log(res.missing.length ? `  FAIL unreachable: ${res.missing.join(', ')}` : '  PASS every room reachable');
  if (res.missing.length) process.exitCode = 1;
}
console.log(out.join('\n'));
await b.close();
process.exit(out.some((l) => l.startsWith('FAIL')) ? 1 : 0);
