import React from 'react';
import {connect} from 'react-redux';
import {TodoItemContent} from './TodoItemContent';
import {toggleTodo, removeTodo} from '../../../../../store/todoList/actions';

const TodoItemContainer = ({todo, toggleTodo, removeTodo}) => {
  return <TodoItemContent todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />;
};

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export const TodoItem = connect(null, mapDispatchToProps)(TodoItemContainer);
