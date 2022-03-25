import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { PresentationPage } from "./components/pages/PresentationPage/PresentationPage";
import { TodoListPage } from "./components/pages/TodoListPage/TodoListPage";
import { ThunkTestPage } from "./components/pages/ThunkTestPage/ThunkTestPage";

import { store } from "./store/store";
import { AppRoute } from "./data/constants";

export const App = () => (
  <>
    <Provider store={store}>
      <Routes>
        <Route path={AppRoute.mainPage} element={<MainPage />} />
        <Route
          path={AppRoute.presentationPage}
          element={<PresentationPage />}
        />
        <Route path={AppRoute.todoListPage} element={<TodoListPage />} />
        <Route path={AppRoute.thunkTestPage} element={<ThunkTestPage />} />
        <Route path="*" element={<Navigate to={AppRoute.mainPage} />} />
      </Routes>
    </Provider>
  </>
);
