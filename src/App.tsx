import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import { TraditionalRoutes, VirtualRoutes } from "./lib/router";

// Pages
import HomeVirtual from "./modules/virtual/pages/Home/";
// import HomeTrad from 'modules/members/pages/Members';

// Constants
import ROUTES from "./lib/routes.json";

// Routes
const virtualRoutes = [{ Component: HomeVirtual, path: ROUTES.virtual.home }];

const traditionalRoutes = [
  // TODO: Add traditional 2d routes when components ready
  { Component: HomeVirtual, path: ROUTES.traditional.home },
];

function App() {
  return (
    <Router>
      <Switch>
        {virtualRoutes.map(({ Component, path }) => (
          <VirtualRoutes key={path} exact path={path}>
            <Component />
          </VirtualRoutes>
        ))}

        {traditionalRoutes.map(({ Component, path }) => (
          <TraditionalRoutes key={path} exact path={path}>
            <Component />
          </TraditionalRoutes>
        ))}
      </Switch>
      {/* TODO: Add GlobalStyles when needed */}
      {/* <GlobalStyles /> */}
    </Router>
  );
}

export default App;
