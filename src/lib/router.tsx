import React from "react";
import { Route, Redirect } from "react-router-dom";

// Hooks
import useSwitch from "./hooks/useSwitch";

// ui
// import SessionLayout from 'ui/layouts/SessionLayout';
// import MainLayout from 'ui/layouts/MainLayout';

export const VirtualRoutes = ({ children, ...routeProps }) => {
  // Hooks
  const { isVirtual } = useSwitch();

  if (!isVirtual) return <Redirect to="/trad" />;

  return (
    <Route {...routeProps}>
      {children}
      {/* <MainLayout>{children}</MainLayout> */}
    </Route>
  );
};

export const TraditionalRoutes = ({ children, ...routeProps }) => {
  // Hooks
  const { isVirtual } = useSwitch();

  if (isVirtual) return <Redirect to="/" />;

  return (
    <Route {...routeProps}>
      {children}
      {/* <SessionLayout>{children}</SessionLayout> */}
    </Route>
  );
};
