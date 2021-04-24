import React from "react";
import { Container } from "../../common/Container/Container";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoFilters } from "./components/TodoFilters/TodoFilters";
import { TodoList } from "./components/TodoList/TodoList";

import s from "./TodoListPage.scss";

export const TodoListPage = () => (
  <main className={s.root}>
    <Container>
      <div className={s.wrapper}>
        <AddTodo />
        <TodoFilters />
        <TodoList />
      </div>
    </Container>
  </main>
);
