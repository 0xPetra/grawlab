import React from "react";

// Components
import Cubes from "../../components/Cubes";
import Lights from "../../components/Lights";
import Environment from "../../components/Environment";

// Styled Components
import { CanvasFlex, FixedLogo } from "./styled";

const Home = () => {
  return (
    <>
      <FixedLogo src="images/logo.png" alt="GrawLab" />
      <CanvasFlex>
        <Cubes />
        <Lights />
        <Environment />
      </CanvasFlex>
    </>
  );
};

export default Home;
