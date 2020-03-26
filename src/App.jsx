import React from "react";
import { Switch, Route } from "react-router-dom";

import { Routes } from "./routes";

export const App = () => (
  <React.Fragment>
    <Switch>
      {Routes.map(({ name, path, exact, component }) => (
        <Route key={name} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </React.Fragment>
);
