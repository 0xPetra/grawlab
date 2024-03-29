import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { random } from "lodash";
import { useFrame, useLoader } from "react-three-fiber";
import { TextureLoader } from "three";

// Constants
import colors from "../../../../lib/materials";
import tron from "../../../../assets/images/universe_1.png";

// TODO: integrate .dds textures
// import tron from "../../../../assets/textures/hepatica_dxt3_mip.dds";
// import { DDSLoader } from "three/examples/jsm/loaders/DDSLoader';

export default () => {
  const mesh: any = useRef();
  const texture = useLoader(TextureLoader, tron);

  const time = useRef(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const isActiveRef = useRef(isActive);

  // position
  const position: [number, number, number] = useMemo(() => {
    return [random(-3, 3, true), random(-3, 3, true), random(-3, 3, true)];
  }, []);

  // random time mod factor
  const timeMod = useMemo(() => random(0.1, 4, true), []);

  // color
  const color = isHovered
    ? colors.primary
    : isActive
    ? colors.secondary
    : colors.orange;

  //useEffect of the activeState
  useEffect(() => {
    isActiveRef.current = isActive;
  }, [isActive]);

  // raf loop
  useFrame(() => {
    mesh.current.rotation.y += 0.01 * timeMod;
    if (isActiveRef.current) {
      time.current += 0.03;
      mesh.current.position.y = position[1] + Math.sin(time.current) * 0.4;
    }
  });

  // Events
  const onHover = useCallback(
    (e, value) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    (e) => {
      e.stopPropagation();
      setIsActive((v) => !v);
    },
    [setIsActive]
  );

  return (
    <mesh
      ref={mesh}
      position={position}
      onClick={(e) => onClick(e)}
      onPointerOver={(e) => onHover(e, true)}
      onPointerOut={(e) => onHover(e, false)}
    >
      <octahedronGeometry attach="geometry" args={[0.1]} />
      <meshStandardMaterial
        attach="material"
        color={color}
        map={texture}
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  );
};
