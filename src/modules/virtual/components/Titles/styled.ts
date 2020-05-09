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
  width: 120vw;

  opacity: 0.8;
  z-index: 999;
  position: fixed;
  pointer-events: none;
  left: 15vw;
  bottom: 40vh;
  justify-self: center;

  @media ${DEVICES.laptop} {
    left: 35vw;
    height: auto;
    width: 40vw;
  }

  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`;

export const Wrapper = styled(animated.div)`
  will-change: transform, opacity;
`;
