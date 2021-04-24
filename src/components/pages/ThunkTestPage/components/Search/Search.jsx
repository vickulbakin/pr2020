import React from "react";
import cn from "classnames";

import s from "./Search.scss";

export const Search = ({
  inputValue,
  onInputChange,
  onSearchButtonClick,
  className,
}) => (
  <section className={cn(s.search, className)}>
    <input
      type="text"
      name="todoInput"
      placeholder="Имя репозитория"
      value={inputValue}
      onChange={onInputChange}
      className={s.input}
    />
    <button onClick={onSearchButtonClick} className={s.seachButton}>
      Найти
    </button>
  </section>
);
