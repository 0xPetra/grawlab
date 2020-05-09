import styled from "styled-components";

// Animation
import { animated } from "react-spring";

// Constants
import { DEVICES } from "../../../../lib/devices";

// Interface
interface ImageInterface {
  opacity: number;
  transform: string;
  src: string;
  alt: string;
}
// <ImageInterface>

export const FixeImage = styled(animated.img)`
  height: auto;
  width: 90vw;
  margin-left: -45vw;
  left: 50%;

  opacity: 0.8;
  z-index: 999;
  position: fixed;
  pointer-events: none;
  bottom: 40vh;
  justify-self: center;

  @media ${DEVICES.laptop} {
    width: 30vw;
    margin-left: -15vw;
    height: auto;
  }

  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`;

export const Wrapper = styled(animated.div)`
  will-change: transform, opacity;
`;
