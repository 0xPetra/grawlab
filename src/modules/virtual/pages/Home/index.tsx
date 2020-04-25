import React, { Suspense, useRef } from "react";
import { useSpring } from "react-spring/three";
import { extend, useFrame, useThree, ReactThreeFiber } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// // Components
import Octahedron from "../../components/Octahedron";
import Glitch from "../../components/Glitch";
import Lights from "../../components/Lights";
import Environment from "../../components/Environment";
import FixedContact from "../../components/FixedContact";

// // Styled Components
import { CanvasFlex, FixedLogo } from "./styled";

// Orbit COntrols adapter
extend({ OrbitControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

const Controls = (props) => {
  const { camera, gl } = useThree();
  const ref = useRef(null);
  useFrame(() => ref.current.update());
  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      {...props}
      args={[camera, gl.domElement]}
    />
  );
};

// function Scene({ top, mouse }) {
//   const { size } = useThree();
//   const scrollMax = size.height * 4.5;
//   return (
//     <>
//       <a.spotLight
//         intensity={1.2}
//         color="white"
//         position={mouse.interpolate((x, y) => [x / 100, -y / 100, 6.5])}
//       />
//       <Effects factor={top.interpolate([0, 150], [1, 0])} />
//       <Background
//         color={top.interpolate(
//           [0, scrollMax * 0.25, scrollMax * 0.8, scrollMax],
//           ["#27282F", "#247BA0", "#70C1B3", "#f8f3f1"]
//         )}
//       />
//       <Stars position={top.interpolate((top) => [0, -1 + top / 20, 0])} />
//       <Images top={top} mouse={mouse} scrollMax={scrollMax} />
//       <Text
//         opacity={top.interpolate([0, 200], [1, 0])}
//         position={top.interpolate((top) => [0, -1 + top / 200, 0])}
//       >
//         lorem
//       </Text>
//       <Text
//         position={top.interpolate((top) => [
//           0,
//           -20 + ((top * 10) / scrollMax) * 2,
//           0,
//         ])}
//         color="black"
//         fontSize={150}
//       >
//         Ipsum
//       </Text>
//     </>
//   );
// }

const Home = () => {
  // Hooks
  const [{ top, mouse }, set] = useSpring(() => ({ top: 0, mouse: [0, 0] }));

  return (
    <>
      <FixedLogo src="images/logo.png" alt="GrawLab" />
      <CanvasFlex
        style={{ boxSizing: "border-box" }}
        camera={{ position: [0, 0, 0.1] }}
      >
        <Controls
          enableZoom={false}
          enablePan={true}
          enableDamping
          dampingFactor={0.2}
          autoRotate
          rotateSpeed={-0.5}
        />
        <Octahedron />
        <Glitch />
        <Lights />
        <Suspense fallback={null}>
          <Environment />
        </Suspense>
      </CanvasFlex>
      <FixedContact />
    </>
  );
};

export default Home;
