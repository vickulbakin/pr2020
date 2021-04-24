import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { PresentationPage } from "./components/pages/PresentationPage/PresentationPage";
import { TodoListPage } from "./components/pages/TodoListPage/TodoListPage";
import { ThunkTestPage } from "./components/pages/ThunkTestPage/ThunkTestPage";

import { store } from "./store/store";
import { AppRoute } from "./data/constants";

export const App = () => (
  <>
    <Provider store={store}>
      <Switch>
        <Route exact={true} path={AppRoute.mainPage} component={MainPage} />
        <Route
          exact={true}
          path={AppRoute.presentationPage}
          component={PresentationPage}
        />
        <Route
          exact={true}
          path={AppRoute.todoListPage}
          component={TodoListPage}
        />
        <Route
          exact={true}
          path={AppRoute.thunkTestPage}
          component={ThunkTestPage}
        />
        <Redirect to={AppRoute.mainPage} />
      </Switch>
    </Provider>
  </>
);
