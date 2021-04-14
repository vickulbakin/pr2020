import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { PresentationPage } from "./components/pages/PresentationPage/PresentationPage";

import { AppRoute } from "./data/constants";

export const App = () => (
  <>
    <Switch>
      <Route exact={true} path={AppRoute.mainPage} component={MainPage} />
      <Route exact={true} path={AppRoute.presentationPage} component={PresentationPage} />
      <Redirect to={AppRoute.mainPage} />
    </Switch>
  </>
);
