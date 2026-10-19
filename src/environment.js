// Sky, sun or moon, stars, fog and exposure for day, dusk and night; lantern light below decks.
import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { sheer } from './config.js';

const TIMES = {
  day: {
    elev: 28, az: 215, color: '#fff1dc', intensity: 3.2, hemi: ['#cfe0f0', '#30404a', 0.5],
    exposure: 0.55, fog: '#b9c8d2', env: 0.7, sky: [2.2, 2.2, 0.003, 0.82], night: 0, light: 1,
  },
  dusk: {
    elev: 2.5, az: 255, color: '#ffb27a', intensity: 1.9, hemi: ['#e0b8a0', '#302830', 0.32],
    exposure: 0.62, fog: '#b98f7a', env: 0.55, sky: [6, 2.8, 0.006, 0.9], night: 0.5, light: 0.6,
  },
  night: {
    elev: -14, az: 255, moon: { elev: 34, az: 140 }, color: '#b4c6ff', intensity: 1.0, hemi: ['#3a4c78', '#06080e', 0.7],
    exposure: 1.25, fog: '#0d1526', env: 0.45, sky: [1.2, 0.4, 0.002, 0.8], night: 1, light: 0.16,
  },
};

function moonTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(64, 64, 20, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,250,235,1)');
  grd.addColorStop(0.5, 'rgba(255,250,235,1)');
  grd.addColorStop(0.56, 'rgba(200,210,255,0.35)');
  grd.addColorStop(1, 'rgba(200,210,255,0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(160,160,150,0.35)';
  for (const [x, y, r] of [[52, 50, 8], [74, 60, 6], [60, 78, 9], [80, 44, 4]]) { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class Environment {
  constructor(renderer, scene) {
    this.renderer = renderer;
    this.scene = scene;
    this.sky = new Sky();
    this.sky.scale.setScalar(8000);
    scene.add(this.sky);
    this.pmrem = new THREE.PMREMGenerator(renderer);
    this.envScene = new THREE.Scene();
    this.envSky = new Sky();
    this.envSky.scale.setScalar(1000);
    this.envScene.add(this.envSky);

    this.sun = new THREE.DirectionalLight('#fff1dc', 3.2);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(4096, 4096);
    const sc = this.sun.shadow.camera;
    sc.left = -60; sc.right = 60; sc.top = 60; sc.bottom = -60; sc.near = 10; sc.far = 400;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.04;
    scene.add(this.sun, this.sun.target);
    this.hemi = new THREE.HemisphereLight('#cfe0f0', '#30404a', 0.5);
    scene.add(this.hemi);
    scene.fog = new THREE.Fog('#b9c8d2', 400, 3800);

    // Stars and the moon (night only).
    const N = 1800, pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const u = Math.random(), v = Math.random() * 0.95 + 0.05;
      const th = u * Math.PI * 2, ph = Math.acos(1 - v);
      pos[i * 3] = Math.sin(ph) * Math.cos(th) * 3000; pos[i * 3 + 1] = Math.cos(ph) * 3000; pos[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * 3000;
    }
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: '#dfe6ff', size: 1.6, sizeAttenuation: false, fog: false, transparent: true, depthWrite: false }));
    this.stars.renderOrder = -1;
    scene.add(this.stars);
    this.moon = new THREE.Sprite(new THREE.SpriteMaterial({ map: moonTexture(), fog: false, depthWrite: false }));
    this.moon.scale.setScalar(150);
    scene.add(this.moon);

    this.nightMaterials = []; // [material, dayIntensity, nightIntensity]
    this.name = null;
  }

  dir(elev, az) {
    return new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - elev), THREE.MathUtils.degToRad(az));
  }

  setTime(name, sea) {
    const T = TIMES[name] || TIMES.day;
    this.name = name;
    this.night = T.night;
    const sunDir = this.dir(T.elev, T.az);
    for (const sky of [this.sky, this.envSky]) {
      const u = sky.material.uniforms;
      [u.turbidity.value, u.rayleigh.value, u.mieCoefficient.value, u.mieDirectionalG.value] = T.sky;
      u.sunPosition.value.copy(sunDir);
    }
    // The light comes from the sun, or by night from the moon.
    const lightDir = T.moon ? this.dir(T.moon.elev, T.moon.az) : sunDir;
    this.sun.position.copy(lightDir).multiplyScalar(150);
    this.sun.color.set(T.color);
    this.sun.intensity = T.intensity;
    this.hemi.color.set(T.hemi[0]);
    this.hemi.groundColor.set(T.hemi[1]);
    this.hemi.intensity = T.hemi[2];
    this.renderer.toneMappingExposure = T.exposure;
    this.scene.fog.color.set(T.fog);
    this.stars.visible = this.moon.visible = !!T.moon;
    if (T.moon) this.moon.position.copy(lightDir).multiplyScalar(2900);
    if (this.envRT) this.envRT.dispose();
    this.envRT = this.pmrem.fromScene(this.envScene, 0, 0.1, 2000);
    this.scene.environment = this.envRT.texture;
    this.scene.environmentIntensity = T.env;
    if (sea) {
      sea.mesh.material.envMap = this.envRT.texture;
      sea.mesh.material.envMapIntensity = T.moon ? 0.07 : 0.4;
      // A rougher sea by night spreads the moon's reflection into a soft path.
      sea.mesh.material.roughness = T.moon ? 0.32 : 0.14;
    }
    for (const [m, day, night] of this.nightMaterials) m.emissiveIntensity = day + (night - day) * T.night;
    this.light = T.light; // brightness for unlit effects (foam, smoke)
    return T;
  }
}

// A small pool of point lights that follows whichever lanterns are nearest the view.
export class LanternLights {
  constructor(ship, lanterns, n = 8) {
    this.ship = ship;
    this.lanterns = lanterns; // [{ p: Vector3 (ship space) }]
    this.lights = [];
    for (let i = 0; i < n; i++) {
      const l = new THREE.PointLight('#ffb35c', 0, 14, 1.4);
      ship.body.add(l);
      this.lights.push(l);
    }
    this.timer = 0;
  }

  update(dt, focus, night, maxY = Infinity) {
    this.timer -= dt;
    if (this.timer <= 0) {
      this.timer = 0.3;
      // Only lanterns on the decks still shown (the cut follows the sheer).
      const cands = this.lanterns.filter((l) => l.p.y < maxY + sheer(l.p.x) + 0.3)
        .map((l) => ({ l, d: l.p.distanceToSquared(focus) }))
        .sort((a, b) => a.d - b.d);
      this.lights.forEach((light, i) => {
        const c = cands[i];
        if (c) light.position.copy(c.l.p).add(new THREE.Vector3(0, -0.3, 0));
        light.userData.on = !!c;
      });
    }
    const k = 16 * night;
    for (const l of this.lights) l.intensity = l.userData.on ? k : 0;
  }
}
