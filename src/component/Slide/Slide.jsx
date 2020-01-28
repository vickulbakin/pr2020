import React from "react";

import s from "./Slide.css";

export const Slide = ({info}) => {
  const {title, description} = info;

  return (
    <div className={s.root}>
      <b className={s.title}>{title}</b>
      <p className={s.description}>{description}</p>
    </div>
  )
};