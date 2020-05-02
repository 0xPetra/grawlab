import React, { useRef, useEffect } from "react";
import { apply as extendSpring } from "react-spring/three";
import {
  extend as extendThree,
  useFrame,
  useThree,
  ReactThreeFiber,
} from "react-three-fiber";

// Import and register postprocessing classes as three-native-elements
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

extendSpring({ EffectComposer, RenderPass, GlitchPass });
extendThree({ EffectComposer, RenderPass, GlitchPass });

// Adding types for ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      effectComposer: ReactThreeFiber.Object3DNode<
        EffectComposer,
        typeof EffectComposer
      >;
      renderPass: ReactThreeFiber.Object3DNode<RenderPass, typeof RenderPass>;
      glitchPass: ReactThreeFiber.Object3DNode<GlitchPass, typeof GlitchPass>;
    }
  }
}

export default React.memo(() => {
  // Hooks
  const { gl, scene, camera, size } = useThree();
  const composer = useRef(null);
  useEffect(() => void composer.current.setSize(size.width, size.height), [
    size,
  ]);

  // This takes over as the main render-loop (when 2nd arg is set to true)
  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      {/* TODO: See if we need to add factor in some use case */}
      <glitchPass attachArray="passes" renderToScreen goWild />
    </effectComposer>
  );
});
