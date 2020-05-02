import React, { Suspense, useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring/three";

// // Components
import Controls from "../../components/Controls";
import Octahedron from "../../components/Octahedron";
import Glitch from "../../components/Glitch";
import Lights from "../../components/Lights";
import Environment from "../../components/Environment";
import FixedContent from "../../components/FixedContent";

// // Styled Components
import { CanvasFlex } from "./styled";

// Constants
import colors from "../../../../lib/materials";
import house from "../../../../assets/images/testressesenta.jpeg";
import universe from "../../../../assets/images/universe.jpeg";
import tron from "../../../../assets/images/360world.jpg";

const scenes = [
  {
    background: house,
    color: colors.orange,
  },
  {
    background: universe,
    color: colors.primary,
  },
  {
    background: tron,
    color: colors.secondary,
  },
];

function useInterval(callback, delay) {
  const savedCallback = useRef(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Home = () => {
  // Hooks
  const [delayGlitch, setDelayGlitch] = useState(4500);
  // const [delayGlitchEnd, setDelayGlitchEnd] = useState(null);
  const [delaySwitch, setDelaySwitch] = useState(null);
  let [count, setCount] = useState(0);
  let [isGlitchEnabled, setGlitch] = useState(false);

  useInterval(async () => {
    await setGlitch(true);
    setDelaySwitch(500);
  }, delayGlitch);

  useInterval(async () => {
    count === 2 ? setCount(0) : setCount(count + 1);
    setDelayGlitch(4500);
    setDelaySwitch(null);
    // setDelayGlitchEnd(200);
    await setGlitch(false);
  }, delaySwitch);

  // useInterval(async () => {
  //   setDelayGlitchEnd(null);
  // }, delayGlitchEnd);

  return (
    <FixedContent>
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
        {isGlitchEnabled && <Glitch />}
        <Lights />
        <Suspense fallback={null}>
          <Environment animation={scenes[count]} />
        </Suspense>
      </CanvasFlex>
    </FixedContent>
  );
};

export default Home;
