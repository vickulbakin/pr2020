import React from "react";
import { useDispatch } from "react-redux";
import { AddTodoContent } from "./AddTodoContent";
import { addTodo } from "../../../../../store/todoList/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  return (
    <AddTodoContent addTodo={(todoValue) => dispatch(addTodo(todoValue))} />
  );
};
