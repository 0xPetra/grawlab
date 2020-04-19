import styled from "styled-components";
import { Canvas } from "react-three-fiber";

export const CanvasFlex = styled(Canvas)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FixedLogo = styled.img`
    height: 10vh;
    width: auto;

    position: fixed;
    top: 10px;
    left: 10px;
    padding: 12px;
    margin-top: 0px;
    
    opacity: .6;
    z-index: 999;
}

`;
