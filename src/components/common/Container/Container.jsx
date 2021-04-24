import React from "react";

import s from "./Container.scss";

export const Container = ({children}) => (
  <div className={s.root}>
    {children}
  </div>
);
