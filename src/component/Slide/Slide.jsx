import React from "react";

import s from "./Slide.scss";

export const Slide = ({info}) => {
  const {title, description, list} = info;

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
        {description.map(item => <p key={item} className={s.description}>{item}</p>)}
        {list && (
          <ul>
            {list.map(item => <li key={item} className={s.listItem}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  )
};