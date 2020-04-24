import React, { Suspense, useRef } from "react";
import { extend, useFrame, useThree, ReactThreeFiber } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// // Components
import Cubes from "../../components/Cubes";
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

const Home = () => {
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
        <Cubes />
        <Lights />
        <Environment />
        {/* <Suspense fallback={null}>
          <Dome />
        </Suspense> */}
      </CanvasFlex>
      <FixedContact />
    </>
  );
};

export default Home;
