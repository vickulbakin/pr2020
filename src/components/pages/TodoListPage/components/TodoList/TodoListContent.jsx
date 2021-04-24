import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

import s from "./TodoList.scss";

export const TodoListContent = ({ todos }) => {
  if (!todos.length) {
    return <p>Нет дел</p>;
  }

  return (
    <ul className={s.root}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
