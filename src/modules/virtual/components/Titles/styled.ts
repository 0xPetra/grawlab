import styled from "styled-components";

// Animation
import { animated } from "react-spring";

// Constants
import { DEVICES } from "../../../../lib/devices";

export const FixeImage = styled(animated.img)`
  height: auto;
  width: 80vw;
  margin-left: -35vw;
  left: 50%;

  @media ${DEVICES.laptop} {
    width: 30vw;
    margin-left: -15vw;
    height: auto;
  }

  opacity: 0.8;
  z-index: 999;
  position: fixed;
  pointer-events: none;
  bottom: 40vh;
  justify-self: center;

  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`;

export const Wrapper = styled(animated.div)`
  will-change: transform, opacity;
`;
