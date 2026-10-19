import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { Sea } from './sea.js';
import { Ship } from './ship.js';
import { UI } from './ui.js';
import { findClashes } from './clash.js';

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

// Sky and sun.
const sky = new Sky();
sky.scale.setScalar(8000);
const su = sky.material.uniforms;
su.turbidity.value = 2.2;
su.rayleigh.value = 2.2;
su.mieCoefficient.value = 0.003;
su.mieDirectionalG.value = 0.82;
const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - 28), THREE.MathUtils.degToRad(215));
su.sunPosition.value.copy(sun);
scene.add(sky);

const pmrem = new THREE.PMREMGenerator(renderer);
const envScene = new THREE.Scene();
const envSky = new Sky();
envSky.scale.setScalar(1000);
Object.assign(envSky.material.uniforms.sunPosition.value, sun);
for (const k of ['turbidity', 'rayleigh', 'mieCoefficient', 'mieDirectionalG']) envSky.material.uniforms[k].value = su[k].value;
envScene.add(envSky);
const envMap = pmrem.fromScene(envScene, 0, 0.1, 2000).texture;
scene.environment = envMap;
scene.environmentIntensity = 0.7;
scene.fog = new THREE.Fog('#b9c8d2', 400, 3800);

const sunLight = new THREE.DirectionalLight('#fff1dc', 3.2);
sunLight.position.copy(sun).multiplyScalar(150);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(4096, 4096);
const sc = sunLight.shadow.camera;
sc.left = -60; sc.right = 60; sc.top = 60; sc.bottom = -60; sc.near = 10; sc.far = 400;
sunLight.shadow.bias = -0.0004;
sunLight.shadow.normalBias = 0.04;
scene.add(sunLight, sunLight.target);
scene.add(new THREE.HemisphereLight('#cfe0f0', '#30404a', 0.5));

const sea = new Sea(envMap);
scene.add(sea.mesh);

const ship = new Ship(scene, sea);
scene.add(ship.root);

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
  onPose: (p) => ship.setPose(p),
  onView: (v) => setView(v),
  onFire: () => ship.fireBroadside(),
  onWind: (dir, str) => ship.setWind(dir, str),
  wind: { dir: +(params.get('wind') ?? -135), str: +(params.get('windStr') ?? 0.6) },
  poses: ship.poseNames(),
  views: Object.keys(VIEWS),
});

ship.setPose(params.get('pose') || 'sail', true);
ship.setWind(+(params.get('wind') ?? -135), +(params.get('windStr') ?? 0.6), true);
setView(params.get('view') || 'quarter', true);
if (params.has('cam')) {
  const c = params.get('cam').split(',').map(Number);
  camera.position.set(c[0], c[1], c[2]);
  controls.target.set(c[3], c[4], c[5]);
}
ui?.setPose(ship.pose);
if (params.has('fire')) setTimeout(() => ship.fireBroadside(), 300);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const clock = new THREE.Clock();
const fixedT = params.has('t') ? parseFloat(params.get('t')) : null;
let t = fixedT ?? 0;
let frames = 0;

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  t = fixedT ?? t + dt;
  ship.update(t, fixedT != null ? 1 / 30 : dt);
  sea.update(t, ship.distance);

  if (camTween) {
    camTween.k = Math.min(1, camTween.k + dt / 1.6);
    const e = camTween.k < 0.5 ? 2 * camTween.k ** 2 : 1 - (-2 * camTween.k + 2) ** 2 / 2;
    camera.position.lerpVectors(camTween.p0, camTween.p1, e);
    controls.target.lerpVectors(camTween.t0, camTween.t1, e);
    if (camTween.k >= 1) camTween = null;
  }
  controls.update();
  renderer.render(scene, camera);
  frames++;
  if (frames === 3) window.__ready = true;
  requestAnimationFrame(frame);
}
frame();
window.__victory = { ship, camera, controls, scene, setView, clashes: () => findClashes(ship) };
