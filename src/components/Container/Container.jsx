import React from "react";
import { Toolbar } from "../Toolbar/Toolbar";

import s from "./Container.scss";

export const Container = ({ children }) => (
  <main className={s.root}>
    <Toolbar />
    {children}
  </main>
);
