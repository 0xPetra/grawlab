import React from "react";
import { DoubleSide, TextureLoader } from "three";
import { useLoader } from "react-three-fiber";

export default ({ animation }) => {
  // console.log("animation", animation);

  // Hooks
  const texture = useLoader(TextureLoader, animation.background);

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        color={animation.color}
        map={texture}
        side={DoubleSide}
      />
    </mesh>
  );
};
