// Shared materials.
import * as THREE from 'three';
import { COLORS, deckTexture, woodTexture, sailTexture, hammockTexture, reefSailTexture } from './textures.js';

let cache = null;

export function mats() {
  if (cache) return cache;
  const std = (color, roughness = 0.7, metalness = 0, extra = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
  const deckMap = deckTexture();
  const wood = woodTexture('#b08a58');
  const darkWood = woodTexture('#5a4630');
  cache = {
    black: std(COLORS.black, 0.6),
    ochre: std(COLORS.ochre, 0.6),
    red: std(COLORS.red, 0.75),
    inside: std('#c9a965', 0.75),
    carriage: std('#b99a5c', 0.7),
    gold: std(COLORS.gold, 0.35, 0.8),
    iron: std('#26282a', 0.55, 0.6),
    brass: std('#b58d3e', 0.3, 0.9),
    copper: std(COLORS.copper, 0.45, 0.8),
    deck: std('#ffffff', 0.85, 0, { map: deckMap }),
    mast: std('#ffffff', 0.7, 0, { map: wood }),
    spar: std('#2a2c2e', 0.65),
    darkWood: std('#ffffff', 0.75, 0, { map: darkWood }),
    rope: std('#3b2f22', 0.9),
    ropeLight: std('#8a7556', 0.9),
    canvas: std('#ffffff', 0.92, 0, { map: sailTexture(), side: THREE.DoubleSide }),
    canvasReef: std('#ffffff', 0.92, 0, { map: reefSailTexture(), side: THREE.DoubleSide }),
    furl: std('#dcd2b8', 0.95),
    hammock: std('#ffffff', 0.95, 0, { map: hammockTexture() }),
    glass: std('#2b3a48', 0.15, 0.4, { emissive: '#000000' }),
    lantern: std('#ffd27a', 0.3, 0, { emissive: '#ffb347', emissiveIntensity: 0.0 }),
    white: std('#eeeeee', 0.6),
  };
  return cache;
}
