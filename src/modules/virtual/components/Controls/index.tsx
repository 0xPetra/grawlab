import React, { useRef } from "react";
import { extend, useFrame, useThree, ReactThreeFiber } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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

export default Controls;
