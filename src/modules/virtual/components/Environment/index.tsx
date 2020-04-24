import React from "react";
import { BackSide, TextureLoader } from "three";
import { useLoader } from "react-three-fiber";

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
        // metalness={0.4}
      />
    </mesh>
  );
};

// TODO: Test image background
// export default () => {
//   const texture = useLoader(
//     TextureLoader,
//     "../../../../../public/images/testressesenta.jpeg"
//   );

//   return (
//     <mesh>
//       <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
//       {/* <sphereBufferGeometry args={[5, 10, 10]} attach="geometry" /> */}
//       {/* <meshBasicMaterial */}
//       <meshStandardMaterial
//         attach="material"
//         color={colors.orange}
//         map={texture}
//         side={BackSide}
//       />
//     </mesh>
//   );
// };
