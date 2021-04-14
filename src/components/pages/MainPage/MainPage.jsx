import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../../data/constants";

import s from "./MainPage.scss";

export const MainPage = () => (
  <main className={s.root}>
    <Link to={AppRoute.presentationPage}>Presentation page</Link>
  </main>
);
