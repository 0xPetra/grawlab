import React, { Suspense, useState } from "react";

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

// Backgrounds
import universOne from "../../../../assets/images/universe_1.png";
import universeTwo from "../../../../assets/images/universe_2.png";
import universeThree from "../../../../assets/images/universe_3.png";
import universeFour from "../../../../assets/images/universe_4.png";

// Titles
import titleOne from "../../../../assets/images/title_1.png";
import titleTwo from "../../../../assets/images/title_2.png";
import titleThree from "../../../../assets/images/title_3.png";
import titlFour from "../../../../assets/images/title_4.png";

// Hooks
import useInterval from "../../../../lib/hooks/useInterval";

const scenes = [
  {
    background: universOne,
    color: colors.orange,
    title: titleOne,
  },
  {
    background: universeTwo,
    color: colors.secondary,
    title: titleTwo,
  },
  {
    background: universeThree,
    color: colors.orange,
    title: titleThree,
  },
  {
    background: universeFour,
    color: colors.primary,
    title: titlFour,
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
    count === 2 ? setCount(0) : setCount(count + 1);
    setDelayGlitch(4500);
    setDelaySwitch(null);
    await setGlitch(false);
  }, delaySwitch);

  return (
    <FixedContent title={scenes[count].title}>
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
    </FixedContent>
  );
};

export default Home;
