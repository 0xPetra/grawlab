import React from "react";

// Animation
import { useSpring } from "react-spring";

// Hooks
import useHover from "../../../../lib/hooks/useHover";

// Styled Components
import {
  FixedLogo,
  Envelope,
  Anchor,
  Email,
  EmailWrapper,
  FixeImage,
} from "./styled";

const FixedContent = (props) => {
  const { isHovered, hoverRef } = useHover();
  const hoverStyle = useSpring({
    opacity: isHovered ? 1 : 0,
    right: isHovered ? 35 : 0,
  });
  // * TODO: Add variable width */

  return (
    <>
      <FixedLogo src="images/logo.png" alt="GrawLab" />
      <FixeImage src="images/welcome.png" alt="GrawLab" />
      {props.children}
      <Anchor
        href="mailto:rodrigo@grawlab.com?subject=Hi%20there%20from%20the%20landing"
        ref={hoverRef}
        target="_blank"
        rel="noopener noreferrer"
        isHovered={isHovered}
      >
        <Envelope className="fa fa-envelope-o" />
        <EmailWrapper style={hoverStyle}>
          <Email>rodrigo@grawlab.com</Email>
        </EmailWrapper>
      </Anchor>
    </>
  );
};

export default FixedContent;
