// On-screen controls.
const LABELS = {
  sail: 'Full sail', action: 'Cleared for action', anchor: 'At anchor',
  quarter: 'Quarter', broadside: 'Broadside', bow: 'Bow', stern: 'Stern', deck: 'Deck',
  aloft: 'Aloft', galleries: 'Galleries', head: 'Figurehead',
};

export class UI {
  constructor({ onPose, onView, onFire, poses, views }) {
    const el = document.getElementById('ui');
    el.innerHTML = `
      <h1>HMS Victory <span>1805</span></h1>
      <div class="group"><div class="label">Pose</div><div class="row" id="poses"></div></div>
      <div class="group" id="fireGroup"><button id="fire" class="accent">Fire broadside</button></div>
      <div class="group"><div class="label">View</div><div class="row" id="views"></div></div>
      <div class="hint">Drag to orbit · scroll to zoom · right-drag to pan</div>`;
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
    this.fireGroup = el.querySelector('#fireGroup');
    el.querySelector('#fire').onclick = onFire;
  }

  setPose(p) {
    for (const [k, b] of Object.entries(this.poseButtons)) b.classList.toggle('active', k === p);
    this.fireGroup.style.display = p === 'action' ? '' : 'none';
  }
}
