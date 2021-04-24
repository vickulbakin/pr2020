import React from "react";
import cn from "classnames";
import { TodoFilterType } from "../../../../../data/constants";

import s from "./TodoFilters.scss";

export const TodoFiltersContent = ({ activeFilter, setFilter }) => (
  <ul className={s.root}>
    {Object.keys(TodoFilterType).map((filterKey) => {
      const currentFilter = TodoFilterType[filterKey];

      return (
        <li
          key={currentFilter}
          className={cn(s.item, {
            [s.item_active]: currentFilter === activeFilter,
          })}
          onClick={() => setFilter(currentFilter)}
        >
          {currentFilter}
        </li>
      );
    })}
  </ul>
);
