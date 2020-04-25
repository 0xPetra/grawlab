import React from "react";

import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "react-three-fiber";
// Constants
import house from "../../../../assets/images/testressesenta.jpeg";
import tron from "../../../../assets/images/360world.jpg";
import colors from "../../../../lib/materials";

export default () => {
  // Hooks
  const houseTexture = useLoader(TextureLoader, house);
  const tronTexture = useLoader(TextureLoader, tron);

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <glitchPass attachArray="passes" renderToScreen />
      <meshBasicMaterial
        attach="material"
        // Colors functions as a filter
        color={colors.orange}
        map={houseTexture}
        side={DoubleSide}
      />
    </mesh>
  );
};
