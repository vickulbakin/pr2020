import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { Routes } from "../../routes";
import s from "./Toolbar.scss";

export const Toolbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={s.nav}>
      <div
        className={cn(s.wrapper, {
          [s.wrapper_open]: isOpen
        })}
      >
        <button className={s.button} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? ">" : "<"}
        </button>
        <ul className={s.list}>
          {Routes.map(({ name, path }) => {
            if (path) {
              return (
                <li key={name} className={s.listItem}>
                  <Link to={path}>{name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </nav>
  );
};
