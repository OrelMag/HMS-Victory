// Ways of looking inside: peel the decks away down to a level, cut the near side open,
// or make the hull see-through. Cuts are done in the ship's own frame, following the sheer.
import * as THREE from 'three';
import { DECK } from './config.js';

// Cut height for each level: just under the beams of the deck above.
export const LEVELS = {
  all: Infinity,
  quarterdeck: DECK.poop - 0.52,
  upper: DECK.qd - 0.52,
  middle: DECK.upper - 0.52,
  lower: DECK.middle - 0.52,
  orlop: DECK.lower - 0.52,
  hold: DECK.orlop - 0.52,
};

export class Cutaway {
  constructor(ship, sun) {
    this.ship = ship;
    this.sun = sun;
    this.uniforms = {
      uShipInv: { value: new THREE.Matrix4() },
      uCutY: { value: 1e5 },
      uCutZ: { value: 1e5 },
    };
    // The rig is never sliced lengthwise (cutaway drawings keep masts and sails whole).
    this.rigCutZ = { value: 1e5 };
    // The shell is never peeled below the waterline (there would be no water to hold back).
    this.shellCutY = { value: 1e5 };
    this.level = 'all';
    this.cutZ = 1e5;
    this.xray = false;
    this.applied = new WeakSet();
    this.applyAll();
  }

  applyAll() {
    // Hull, interior and fittings first: a material shared with the rig keeps the hull's cut.
    const rigRoots = [this.ship.rig.group, ...Object.values(this.ship.flags).map((f) => f.mesh)];
    const inRig = (o) => { for (let p = o; p; p = p.parent) if (rigRoots.includes(p)) return true; return false; };
    const pass = (rig) => this.ship.body.traverse((o) => {
      if (!o.material || inRig(o) !== rig) return;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) this.inject(m, rig, !!o.userData.shell);
    });
    pass(false);
    pass(true);
  }

  inject(mat, rig = false, shell = false) {
    if (this.applied.has(mat)) return;
    this.applied.add(mat);
    const U = this.uniforms;
    const prev = mat.onBeforeCompile;
    const prevKey = mat.customProgramCacheKey ? mat.customProgramCacheKey() : '';
    mat.onBeforeCompile = (sh, r) => {
      if (prev) prev.call(mat, sh, r);
      sh.uniforms.uShipInv = U.uShipInv;
      sh.uniforms.uCutY = shell ? this.shellCutY : U.uCutY;
      sh.uniforms.uCutZ = rig ? this.rigCutZ : U.uCutZ;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform mat4 uShipInv;\nvarying vec3 vCutPos;')
        .replace('#include <project_vertex>', `#include <project_vertex>
vec4 cutP = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
cutP = instanceMatrix * cutP;
#endif
vCutPos = (uShipInv * modelMatrix * cutP).xyz;`);
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform float uCutY, uCutZ;\nvarying vec3 vCutPos;')
        .replace('#include <clipping_planes_fragment>', `#include <clipping_planes_fragment>
{ float cutSheer = 0.85 * pow((vCutPos.x - 2.0) / 28.0, 2.0);
  if (vCutPos.y > uCutY + cutSheer || vCutPos.z > uCutZ) discard; }`);
    };
    mat.customProgramCacheKey = () => `${prevKey}|cut${rig ? 'R' : ''}${shell ? 'S' : ''}`;
    mat.needsUpdate = true;
  }

  get active() { return this.level !== 'all' || this.cutZ < 50; }

  setLevel(name) {
    this.level = name;
    this.uniforms.uCutY.value = Number.isFinite(LEVELS[name]) ? LEVELS[name] : 1e5;
    this.shellCutY.value = Math.max(this.uniforms.uCutY.value, 0.6);
    this.refresh();
  }

  // 0 = closed, 1 = cut open to the centreline (the starboard half removed).
  setCut(f) {
    this.cutZ = f <= 0.001 ? 1e5 : 9 - f * 9.2;
    this.uniforms.uCutZ.value = this.cutZ;
    this.refresh();
  }

  setXray(on) {
    this.xray = on;
    this.ship.body.traverse((o) => {
      if (!o.isMesh || !o.userData.shell) return;
      const m = o.material;
      if (!o.userData.solid) o.userData.solid = { transparent: m.transparent, opacity: m.opacity, depthWrite: m.depthWrite };
      const s = o.userData.solid;
      m.transparent = on ? true : s.transparent;
      m.opacity = on ? 0.14 : s.opacity;
      m.depthWrite = on ? false : s.depthWrite;
      m.needsUpdate = true;
    });
  }

  refresh() {
    // Shadows from the parts cut away would still fall inside, so drop them while cutting.
    const want = !this.active;
    if (this.sun.castShadow !== want) this.sun.castShadow = want;
  }

  update() {
    this.uniforms.uShipInv.value.copy(this.ship.body.matrixWorld).invert();
  }
}
