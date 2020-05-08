import React, { Suspense, useState } from "react";

// // Components
import Controls from "../../components/Controls";
import Octahedron from "../../components/Octahedron";
import Glitch from "../../components/Glitch";
import Lights from "../../components/Lights";
import Environment from "../../components/Environment";
import FixedContent from "../../components/FixedContent";

// FC Components
import Titles from "../../components/Titles";

// // Styled Components
import { CanvasFlex } from "./styled";

// Constants
import colors from "../../../../lib/materials";

// Backgrounds
import universOne from "../../../../assets/images/universe_1.png";
import universeTwo from "../../../../assets/images/universe_2.png";
import universeThree from "../../../../assets/images/universe_3.png";
import universeFour from "../../../../assets/images/universe_4.png";

// Hooks
import useInterval from "../../../../lib/hooks/useInterval";

const scenes = [
  {
    background: universOne,
    color: colors.primary,
  },
  {
    background: universeTwo,
    color: "",
  },
  {
    background: universeThree,
    color: "",
  },
  {
    background: universeFour,
    color: "",
  },
];

const Home = () => {
  // Hooks
  const [delayGlitch, setDelayGlitch] = useState(4500);
  const [delaySwitch, setDelaySwitch] = useState(null);
  let [count, setCount] = useState(0);
  let [isGlitchEnabled, setGlitch] = useState(false);

  useInterval(async () => {
    await setGlitch(true);
    setDelaySwitch(500);
  }, delayGlitch);

  useInterval(async () => {
    count === 3 ? setCount(0) : setCount(count + 1);
    setDelayGlitch(4500);
    setDelaySwitch(null);
    await setGlitch(false);
    // await setTextTransition(false);
  }, delaySwitch);

  return (
    <FixedContent>
      <Titles count={count} />
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
        {isGlitchEnabled && <Glitch />}
        <Lights />
        <Suspense fallback={null}>
          <Octahedron />
          <Environment animation={scenes[count]} />
        </Suspense>
      </CanvasFlex>
      {/* Preload Enviroments w/diff textures */}
      <Suspense fallback={null}>
        <div hidden={true}>
          <Environment animation={scenes[1]} />
          <Environment animation={scenes[2]} />
          <Environment animation={scenes[3]} />
        </div>
      </Suspense>
    </FixedContent>
  );
};

export default Home;
