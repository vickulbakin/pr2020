import React from "react";

import s from "./Result.scss";

export const Result = ({ searchState }) => {
  if (searchState.status === "init") {
    return null;
  }

  if (searchState.status === "loader") {
    return <p className={s.title}>Загрузка...</p>;
  }

  const searchData = searchState.data;

  if (searchData.total_count === 0) {
    return <p className={s.title}>Ничего не найдено</p>;
  }

  return (
    <section>
      <p className={s.title}>total count: {searchData.total_count}</p>
      {searchData.items.map((item) => (
        <div key={item.id} className={s.itemWrapper}>
          <p>owner: {item.owner.login}</p>
          <p>name: {item.name}</p>
          <p className={s.linkWrapper}>
            <a href={item.html_url} target="_blank">
              {item.html_url}
            </a>
          </p>
          <p>stars: {item.stargazers_count}</p>
        </div>
      ))}
    </section>
  );
};
