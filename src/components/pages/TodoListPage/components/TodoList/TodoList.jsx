import React from 'react';
import {useSelector} from 'react-redux';
import {TodoListContent} from './TodoListContent';
import {getTodosByFilter} from '../../../../../store/selectors';

export const TodoList = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const todoFilter = useSelector((state) => state.todoFilter);

  const filteredTodos = getTodosByFilter(todos, todoFilter);

  return <TodoListContent todos={filteredTodos} />;
};
