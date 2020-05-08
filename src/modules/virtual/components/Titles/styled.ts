import styled from "styled-components";

// Animation
import { animated } from "react-spring";

// Interface
interface ImageInterface {
  opacity: number;
  transform: string;
  src: string;
  alt: string;
}
// <ImageInterface>

export const FixeImage = styled(animated.img)`
  height: 25vh;
  width: auto;

  opacity: 0.8;
  z-index: 999;
  position: fixed;
  pointer-events: none;
  left: 30%;
  bottom: 40%;
  margin-bottom: -40px;
  justify-self: center;

  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`;

export const Wrapper = styled(animated.div)`
  will-change: transform, opacity;
`;
