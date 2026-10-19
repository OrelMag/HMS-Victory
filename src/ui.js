// On-screen controls.
const LABELS = {
  sail: 'Full sail', trafalgar: 'Trafalgar, 1805', action: 'Cleared for action', anchor: 'At anchor',
  quarter: 'Quarter', broadside: 'Broadside', bow: 'Bow', stern: 'Stern', deck: 'Deck',
  aloft: 'Aloft', galleries: 'Galleries', head: 'Figurehead', inside: 'Inside',
  all: 'All', quarterdeck: 'Quarterdeck', upper: 'Upper deck', middle: 'Middle deck', lower: 'Lower deck', orlop: 'Orlop', hold: 'Hold',
};

export function windName(dir, str) {
  const a = Math.abs(dir);
  const side = dir < 0 ? 'port' : 'starboard';
  const where = a < 22.5 ? 'dead ahead' : a < 67.5 ? `on the ${side} bow` : a < 112.5 ? `on the ${side} beam`
    : a < 157.5 ? `on the ${side} quarter` : 'dead astern';
  const force = str < 0.12 ? 'Light air' : str < 0.3 ? 'Light breeze' : str < 0.5 ? 'Moderate breeze'
    : str < 0.7 ? 'Fresh breeze' : str < 0.88 ? 'Strong breeze' : 'Near gale';
  return `${force}, ${where}`;
}

export class UI {
  constructor({ onPose, onView, onFire, onWind, wind, poses, views, levels, onLevel, onCut, onXray, onLabels, onMode, onTime }) {
    const el = document.getElementById('ui');
    el.innerHTML = `
      <h1>HMS Victory <span>1805</span></h1>
      <div class="group"><div class="label">Mode</div><div class="row" id="modes"></div>
        <div class="hint" id="sailorHint" style="display:none">WASD or arrows to walk, Shift to run, click to walk there.
        Walk into a ladder to climb. Q / E turn the view, scroll to zoom.</div></div>
      <div class="group"><div class="label">Pose</div><div class="row" id="poses"></div></div>
      <div class="group" id="fireGroup"><button id="fire" class="accent">Fire broadside</button></div>
      <div class="group"><div class="label">Wind</div>
        <div class="slider"><span>From</span><input id="windDir" type="range" min="-180" max="180" step="5"></div>
        <div class="slider"><span>Strength</span><input id="windStr" type="range" min="0" max="100" step="1"></div>
        <div class="windText" id="windText"></div>
        <div class="windHint" id="windHint"></div></div>
      <div class="group"><div class="label">Time</div><div class="row" id="times"></div></div>
      <div class="group"><div class="label">Inside: show decks down to</div><div class="row" id="levels"></div>
        <div class="slider"><span>Cut open</span><input id="cut" type="range" min="0" max="100" step="1" value="0"></div>
        <label class="check"><input id="xray" type="checkbox"> X-ray hull</label>
        <label class="check"><input id="labels" type="checkbox" checked> Room labels</label></div>
      <div class="group"><div class="label">View</div><div class="row" id="views"></div></div>
      <div class="hint">Drag to orbit · scroll to zoom · right-drag to pan</div>`;
    this.modeButtons = {};
    const me = el.querySelector('#modes');
    for (const [m, label] of [['free', 'Free camera'], ['sailor', 'Sailor (isometric)']]) {
      const b = document.createElement('button');
      b.textContent = label;
      b.onclick = () => { onMode(m); this.setMode(m); };
      me.appendChild(b);
      this.modeButtons[m] = b;
    }
    this.el = el;
    this.timeButtons = {};
    const te = el.querySelector('#times');
    for (const [k, label] of [['day', 'Day'], ['dusk', 'Dusk'], ['night', 'Night']]) {
      const b = document.createElement('button');
      b.textContent = label;
      b.onclick = () => onTime(k);
      te.appendChild(b);
      this.timeButtons[k] = b;
    }
    this.poseButtons = {};
    const pe = el.querySelector('#poses');
    for (const p of poses) {
      const b = document.createElement('button');
      b.textContent = LABELS[p] || p;
      b.onclick = () => { onPose(p); this.setPose(p); };
      pe.appendChild(b);
      this.poseButtons[p] = b;
    }
    const ve = el.querySelector('#views');
    for (const v of views) {
      const b = document.createElement('button');
      b.textContent = LABELS[v] || v;
      b.onclick = () => onView(v);
      ve.appendChild(b);
    }
    this.levelButtons = {};
    const le = el.querySelector('#levels');
    for (const l of levels) {
      const b = document.createElement('button');
      b.textContent = LABELS[l] || l;
      b.onclick = () => { onLevel(l); this.setLevel(l); };
      le.appendChild(b);
      this.levelButtons[l] = b;
    }
    this.setLevel('all');
    el.querySelector('#cut').oninput = (e) => onCut(+e.target.value / 100);
    el.querySelector('#xray').onchange = (e) => onXray(e.target.checked);
    el.querySelector('#labels').onchange = (e) => onLabels(e.target.checked);
    this.fireGroup = el.querySelector('#fireGroup');
    el.querySelector('#fire').onclick = onFire;
    const wd = el.querySelector('#windDir'), ws = el.querySelector('#windStr');
    const wt = el.querySelector('#windText'), wh = el.querySelector('#windHint');
    wd.value = wind.dir; ws.value = Math.round(wind.str * 100);
    const upd = () => {
      const dir = +wd.value, str = +ws.value / 100;
      wt.textContent = windName(dir, str);
      wh.textContent = Math.abs(dir) < 50 ? 'Too close to the wind: her sails shiver and she loses way.' : '';
      onWind(dir, str);
    };
    wd.oninput = ws.oninput = upd;
    wt.textContent = windName(wind.dir, wind.str);
    this.windSet = (dir, str) => {
      wd.value = dir; ws.value = Math.round(str * 100);
      wt.textContent = windName(dir, str);
      wh.textContent = '';
    };
  }

  setTime(t) {
    for (const [k, b] of Object.entries(this.timeButtons)) b.classList.toggle('active', k === t);
  }

  setMode(m) {
    for (const [k, b] of Object.entries(this.modeButtons)) b.classList.toggle('active', k === m);
    this.el.querySelector('#sailorHint').style.display = m === 'sailor' ? '' : 'none';
    this.el.querySelector('#levels').style.opacity = m === 'sailor' ? 0.45 : 1;
    this.el.querySelector('#levels').style.pointerEvents = m === 'sailor' ? 'none' : '';
    this.el.querySelector('#views').style.opacity = m === 'sailor' ? 0.45 : 1;
    this.el.querySelector('#views').style.pointerEvents = m === 'sailor' ? 'none' : '';
  }

  setLevel(l) {
    for (const [k, b] of Object.entries(this.levelButtons)) b.classList.toggle('active', k === l);
  }

  setPose(p) {
    for (const [k, b] of Object.entries(this.poseButtons)) b.classList.toggle('active', k === p);
    this.fireGroup.style.display = p === 'action' || p === 'trafalgar' ? '' : 'none';
  }
}
