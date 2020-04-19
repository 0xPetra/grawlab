import React from "react";
import { BackSide } from "three";

// Constants
import colors from "../../../../lib/materials";

export default () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" />
      <meshStandardMaterial
        color={colors.orange}
        attach="material"
        side={BackSide}
        metalness={0.4}
      />
    </mesh>
  );
};
