import React, { useRef } from "react";
import { map } from "lodash";
import { useFrame } from "react-three-fiber";

import Octahedron from "./Octahedron";

export default () => {
  const group: any = useRef();

  useFrame(() => {
    group.current.rotation.y += 0.003;
  });

  const nodesCubes = map(new Array(50), (el, i) => {
    return <Octahedron key={i} />;
  });

  return <group ref={group}>{nodesCubes}</group>;
};
