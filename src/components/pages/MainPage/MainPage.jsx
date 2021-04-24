import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../common/Container/Container";
import { AppRoute } from "../../../data/constants";

import s from "./MainPage.scss";

export const MainPage = () => (
  <main className={s.root}>
    <Container>
      <h1 className={s.title}>Страницы</h1>
      <ol>
        <li className={s.listItem}>
          <Link to={AppRoute.presentationPage}>Presentation page</Link>
        </li>
        <li className={s.listItem}>
          <Link to={AppRoute.todoListPage}>Todo list page</Link>
        </li>
        <li className={s.listItem}>
          <Link to={AppRoute.thunkTestPage}>Thunk test page</Link>
        </li>
      </ol>
    </Container>
  </main>
);
