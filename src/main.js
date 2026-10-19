import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Environment, LanternLights } from './environment.js';
import { Sea } from './sea.js';
import { Ship, POSES } from './ship.js';
import { UI } from './ui.js';
import { findClashes } from './clash.js';
import { Cutaway, LEVELS } from './cutaway.js';
import { Rooms } from './rooms.js';
import { DECK_NAMES, ROOMS } from './roomData.js';
import { IsoMode } from './iso.js';
import { Post } from './post.js';
import { sailLight } from './materials.js';

const params = new URLSearchParams(location.search);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: params.has('shot') });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.55;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 9000);
scene.userData.camera = camera;

// Sky, light and time of day.
const env = new Environment(renderer, scene);
const sunLight = env.sun;
env.setTime('day');
const envMap = scene.environment;

const sea = new Sea(envMap);
scene.add(sea.mesh);

const ship = new Ship(scene, sea);
scene.add(ship.root);

const info = document.getElementById('info');
function showRoom(r) {
  info.innerHTML = `<span class="close">×</span><h2>${r.name}</h2><div class="deck">${DECK_NAMES[r.deck]}</div>
    <div>${r.note}</div>${r.source ? `<div class="src">Source: ${r.source}</div>` : ''}`;
  info.style.display = 'block';
  info.querySelector('.close').onclick = () => { info.style.display = 'none'; };
}
const rooms = new Rooms(ship.body, document.body, showRoom);
ship.clearables.push(rooms);
rooms.setCleared(ship.isCleared);
const cut = new Cutaway(ship, sunLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 4;
controls.maxDistance = 600;

// Camera presets: [position, target] in ship coordinates.
export const VIEWS = {
  quarter: [[78, 24, 96], [0, 22, 0]],
  broadside: [[4, 18, 132], [2, 24, 0]],
  bow: [[92, 14, 34], [12, 20, 0]],
  stern: [[-84, 20, -46], [-14, 16, 0]],
  deck: [[-21, 15.5, 7], [10, 9, 0]],
  aloft: [[30, 76, 52], [0, 30, 0]],
  galleries: [[-44, 9, 24], [-26, 7, 0]],
  head: [[44, 9, 16], [30, 8, 0]],
  inside: [[-26, 34, 46], [0, 2, 0]],
};
let follow = true;
function setView(name, instant = false) {
  const v = VIEWS[name];
  if (!v) return;
  const p = new THREE.Vector3(...v[0]), t = new THREE.Vector3(...v[1]);
  if (instant) {
    camera.position.copy(p);
    controls.target.copy(t);
  } else {
    camTween = { p0: camera.position.clone(), t0: controls.target.clone(), p1: p, t1: t, k: 0 };
  }
}
let camTween = null;

const ui = params.get('ui') === '0' ? null : new UI({
  onPose: (p) => {
    ship.setPose(p);
    const w = POSES[p].wind;
    if (w) { ship.setWind(w.dir, w.str); ui?.windSet(w.dir, w.str); }
  },
  onView: (v) => setView(v),
  onFire: () => ship.fireBroadside(),
  onWind: (dir, str) => ship.setWind(dir, str),
  wind: { dir: +(params.get('wind') ?? -135), str: +(params.get('windStr') ?? 0.6) },
  levels: Object.keys(LEVELS),
  onLevel: (l) => { cut.setLevel(l); rooms.setLevel(l); },
  onLabels: (on) => rooms.setEnabled(on),
  onCut: (f) => cut.setCut(f),
  onXray: (on) => cut.setXray(on),
  onMode: (m) => setMode(m),
  onTime: (tm) => setTime(tm),
  poses: ship.poseNames(),
  views: Object.keys(VIEWS),
});
const iso = new IsoMode({ ship, cut, rooms, renderer, ui });
// Things that glow after dark, and lantern light below decks.
env.nightMaterials.push(...ship.nightMaterials);
const lanternLights = new LanternLights(ship, ship.lanterns);
function setTime(name) {
  env.setTime(name, sea);
  ship.wake.uniforms.uLight.value = env.light * (env.night > 0.9 ? 0.45 : 1);
  ship.effects.light = env.light;
  ui?.setTime(name);
  if (typeof post !== 'undefined') tuneBloom();
}
setTime(params.get('time') || 'day');
function setMode(m) {
  if (m === 'sailor' && !iso.active) { iso.enter(); controls.enabled = false; }
  if (m === 'free' && iso.active) { iso.exit(); controls.enabled = true; }
}
ui?.setMode('free');

ship.setPose(params.get('pose') || 'sail', true);
{
  const pw = POSES[ship.pose].wind;
  const dir = +(params.get('wind') ?? pw?.dir ?? -135), str = +(params.get('windStr') ?? pw?.str ?? 0.6);
  ship.setWind(dir, str, true);
  ui?.windSet(dir, str);
}
setView(params.get('view') || 'quarter', true);
if (params.has('cam')) {
  const c = params.get('cam').split(',').map(Number);
  camera.position.set(c[0], c[1], c[2]);
  controls.target.set(c[3], c[4], c[5]);
}
ui?.setPose(ship.pose);
if (params.has('level')) { cut.setLevel(params.get('level')); rooms.setLevel(params.get('level')); ui?.setLevel(params.get('level')); }
if (params.has('cut')) cut.setCut(+params.get('cut'));
if (params.has('xray')) cut.setXray(true);
if (params.has('fire')) setTimeout(() => ship.fireBroadside(), 300);
if (params.get('mode') === 'sailor') {
  if (params.has('sx')) { iso.sailor.x = +params.get('sx'); iso.sailor.z = +params.get('sz'); iso.sailor.level = params.get('sl') || 'qd'; }
  if (params.has('zoom')) iso.zoom = +params.get('zoom');
  setMode('sailor');
  ui?.setMode('sailor');
}

const post = new Post(renderer, scene, camera);
function tuneBloom() {
  // The sky round the sun is far brighter than anything on the ship, so bloom only by night.
  post.bloom.enabled = env.night > 0.9;
  post.bloom.threshold = 0.75;
  post.bloom.strength = 0.55;
}
tuneBloom();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  post.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
const fixedT = params.has('t') ? parseFloat(params.get('t')) : null;
let t = fixedT ?? 0;
let frames = 0;

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  t = fixedT ?? t + dt;
  ship.update(t, fixedT != null ? 1 / 30 : dt);
  cut.update();
  sea.update(t, ship.distance);

  if (camTween) {
    camTween.k = Math.min(1, camTween.k + dt / 1.6);
    const e = camTween.k < 0.5 ? 2 * camTween.k ** 2 : 1 - (-2 * camTween.k + 2) ** 2 / 2;
    camera.position.lerpVectors(camTween.p0, camTween.p1, e);
    controls.target.lerpVectors(camTween.t0, camTween.t1, e);
    if (camTween.k >= 1) camTween = null;
  }
  // Lanterns nearest what you are looking at light up after dark.
  const focus = iso.active ? iso.sailor.figure.position.clone() : ship.body.worldToLocal(controls.target.clone());
  lanternLights.update(dt, focus, env.night, cut.uniforms.uCutY.value);
  let cam = camera;
  if (iso.active) { iso.update(fixedT != null ? 1 / 30 : dt); cam = iso.camera; } else controls.update();
  // Sun direction in view space, for light through the sails.
  sailLight.uSunView.value.copy(env.sun.position).normalize().transformDirection(cam.matrixWorldInverse);
  sailLight.uSunCol.value.copy(env.sun.color).multiplyScalar(env.sun.intensity / 3.2);
  post.setCamera(cam);
  post.render(cut.active || cut.xray);
  rooms.render(scene, cam, window.innerWidth, window.innerHeight);
  frames++;
  if (frames === 3) window.__ready = true;
  requestAnimationFrame(frame);
}
frame();
window.__victory = { ship, camera, controls, scene, setView, cut, iso, setMode, ROOMS, post, clashes: () => findClashes(ship) };
