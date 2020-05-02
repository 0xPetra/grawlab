import styled from "styled-components";
import { Canvas } from "react-three-fiber";

export const CanvasFlex = styled(Canvas)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
