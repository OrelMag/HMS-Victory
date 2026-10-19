// Shared materials.
import * as THREE from 'three';
import { COLORS, deckTexture, woodTexture, sailTexture, hammockTexture, reefSailTexture, sailNormalTexture } from './textures.js';

let cache = null;

// Sunlight passing through the canvas: sails glow when the sun is behind them.
export const sailLight = { uSunView: { value: new THREE.Vector3(0, 1, 0) }, uSunCol: { value: new THREE.Color(1, 0.95, 0.85) } };
function translucent(mat) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uSunView = sailLight.uSunView;
    sh.uniforms.uSunCol = sailLight.uSunCol;
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uSunView; uniform vec3 uSunCol;')
      .replace('#include <lights_fragment_end>', `#include <lights_fragment_end>
{ float back = max(0.0, -dot(normal, uSunView));
  reflectedLight.directDiffuse += diffuseColor.rgb * uSunCol * back * back * 0.22; }`);
  };
  mat.customProgramCacheKey = () => 'sail-translucent';
  return mat;
}

export function mats() {
  if (cache) return cache;
  const std = (color, roughness = 0.7, metalness = 0, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
  const deckMap = deckTexture();
  const wood = woodTexture('#b08a58');
  const darkWood = woodTexture('#5a4630');
  const sailN = sailNormalTexture();
  cache = {
    black: std(COLORS.black, 0.6),
    ochre: std(COLORS.ochre, 0.6),
    red: std(COLORS.red, 0.75),
    inside: std('#c9a965', 0.75),
    carriage: std('#8a6e44', 0.8),
    gold: std(COLORS.gold, 0.35, 0.8),
    iron: std('#26282a', 0.55, 0.6),
    brass: std('#b58d3e', 0.3, 0.9),
    copper: std(COLORS.copper, 0.45, 0.8),
    deck: std('#ffffff', 0.85, 0, { map: deckMap }),
    mast: std('#ffffff', 0.7, 0, { map: wood }),
    spar: std('#24211d', 0.78),
    darkWood: std('#ffffff', 0.75, 0, { map: darkWood }),
    rope: std('#3b2f22', 0.9),
    ropeLight: std('#8a7556', 0.9),
    canvas: translucent(std('#f4efe4', 0.92, 0, { map: sailTexture(), normalMap: sailN, normalScale: new THREE.Vector2(0.5, 0.5), side: THREE.DoubleSide })),
    canvasReef: translucent(std('#f4efe4', 0.92, 0, { map: reefSailTexture(), normalMap: sailN, normalScale: new THREE.Vector2(0.5, 0.5), side: THREE.DoubleSide })),
    furl: std('#c4b99c', 0.95),
    hammock: std('#ffffff', 0.95, 0, { map: hammockTexture() }),
    glass: std('#2b3a48', 0.15, 0.4, { emissive: '#000000' }),
    lantern: std('#ffd27a', 0.3, 0, { emissive: '#ffb347', emissiveIntensity: 0.0 }),
    white: std('#eeeeee', 0.6),
  };
  return cache;
}
