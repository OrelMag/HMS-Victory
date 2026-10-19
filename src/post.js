// Post-processing: multisampled HDR render, ambient occlusion (GTAO), bloom, tone mapping.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

export class Post {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    const size = renderer.getDrawingBufferSize(new THREE.Vector2());
    const rt = new THREE.WebGLRenderTarget(size.x, size.y, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(renderer, rt);
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    this.ao = new GTAOPass(scene, camera, size.x, size.y);
    this.ao.output = GTAOPass.OUTPUT.Default;
    this.ao.blendIntensity = 0.85;
    this.ao.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.4, thickness: 1.2, scale: 1.0, samples: 12 });
    this.ao.updatePdMaterial({ lumaPhi: 10, depthPhi: 2, normalPhi: 3, radius: 6, rings: 2, samples: 16 });
    // Leave out things whose shader moves their vertices (sea, flags) or that have no surface.
    const orig = this.ao._overrideVisibility.bind(this.ao);
    this.ao._overrideVisibility = () => {
      orig();
      scene.traverse((o) => {
        if (o.userData.noAO && o.visible) { o.visible = false; this.ao._visibilityCache.push(o); }
      });
    };
    this.composer.addPass(this.ao);

    this.bloom = new UnrealBloomPass(new THREE.Vector2(size.x / 2, size.y / 2), 0.35, 0.5, 2.2);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.aoWanted = true;
  }

  setCamera(camera) {
    if (this.renderPass.camera === camera) return;
    this.renderPass.camera = camera;
    this.ao.camera = camera;
    this.ao.gtaoMaterial.defines.PERSPECTIVE_CAMERA = camera.isPerspectiveCamera ? 1 : 0;
    this.ao.gtaoMaterial.needsUpdate = true;
    if ('PERSPECTIVE_CAMERA' in this.ao.pdMaterial.defines) {
      this.ao.pdMaterial.defines.PERSPECTIVE_CAMERA = camera.isPerspectiveCamera ? 1 : 0;
      this.ao.pdMaterial.needsUpdate = true;
    }
  }

  setSize(w, h) {
    this.composer.setSize(w, h);
  }

  // AO off while the ship is cut open or see-through (its depth pass can't follow the cut).
  render(cutActive) {
    this.ao.enabled = this.aoWanted && !cutActive;
    this.composer.render();
  }
}
