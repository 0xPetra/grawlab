import React from "react";
import { useTransition } from "react-spring";

//  Styled Components
import { FixeImage } from "./styled";

// Titles
import titleOne from "../../../../assets/images/title_1.png";
import titleTwo from "../../../../assets/images/title_2.png";
import titleThree from "../../../../assets/images/title_3.png";
import titlFour from "../../../../assets/images/title_4.png";

const scenes = [
  ({ style }) => (
    <FixeImage src={titleOne} alt="GrawLab" style={{ ...style }} />
  ),
  ({ style }) => (
    <FixeImage src={titleTwo} alt="GrawLab" style={{ ...style }} />
  ),
  ({ style }) => (
    <FixeImage src={titleThree} alt="GrawLab" style={{ ...style }} />
  ),
  ({ style }) => (
    <FixeImage src={titlFour} alt="GrawLab" style={{ ...style }} />
  ),
];

const Titles = ({ count }) => {
  // Hooks

  const transitions = useTransition(count, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 0.7, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <>
      {transitions.map(({ item, props, key }) => {
        const Scene = scenes[item];
        return <Scene key={key} style={props} />;
      })}
    </>
  );
};

export default Titles;
