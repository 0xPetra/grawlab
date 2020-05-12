import styled from "styled-components";

// Animation
import { animated } from "react-spring";

// Constants
import { DEVICES } from "../../../../lib/devices";
import colors from "../../../../lib/colors";

// Interface
interface AnchorProps {
  isHovered: boolean;
}

export const FixedLogo = styled.img`
  height: auto;
  width: 25vw;

  @media ${DEVICES.laptop} {
    height: auto;
    width: 12vw;
  }

  position: fixed;
  pointer-events: none;
  top: 10px;
  left: 10px;
  padding: 12px;
  margin-top: 0px;

  opacity: 0.8;
  z-index: 999;
`;

export const FixedPanoramicIndicator = styled.img`
  height: auto;
  width: 35vw;
  margin-left: -30vw;

  @media ${DEVICES.laptop} {
    height: auto;
    width: 12vw;
    margin-left: -12vw;
  }

  position: fixed;
  pointer-events: none;
  bottom: 0px;
  margin-bottom: 15vh;
  left: 50%;
  padding: 12px;

  opacity: 0.8;
  z-index: 999;
`;

export const Anchor = styled.a<AnchorProps>`
  text-decoration: none !important;
  width: auto;

  opacity: 1;
  z-index: 999;
  font-size: 30px;
  color: ${(props) => (props.isHovered ? colors.white : colors.primary)};
`;

export const Envelope = styled.i`
  position: absolute;
  bottom: 25px;
  right: 25px;
  height: 24px;
  z-index: 999;
`;

export const EmailWrapper = styled(animated.div)`
  padding-right: 25px;
  align-self: center;
  position: absolute;
  bottom: 23px;
`;

export const Email = styled.p`
  font-size: 18px;
  height: 24px;
  font-family: "Titillium Web", sans-serif;
  text-transform: uppercase;

  margin-block-end: 0em;
  margin-block-start: 0em;

  .desktop {
    flex: 1;
    display: none;

    @media ${DEVICES.laptop} {
      display: flex;
    }
  }
`;
