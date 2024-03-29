import React from 'react';
import cn from 'classnames';

import {SvgRemoveIcon} from './components/SvgRemoveIcon/SvgRemoveIcon';

import {DataQa} from '../../../../../data/constants';

import s from './TodoItem.scss';

export const TodoItemContent = ({todo, toggleTodo, removeTodo}) => (
  <li className={s.root}>
    <div
      data-testid={DataQa.todoItem}
      role="button"
      className={cn(s.todo, {
        [s.todo_complete]: todo.completed,
      })}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.completed ? <span className={cn(s.radio, s.radio_check)} /> : <span className={s.radio} />}
      <span
        className={cn(s.text, {
          [s.text_complete]: todo.completed,
        })}
      >
        {todo.value}
      </span>
    </div>
    <button data-testid={DataQa.buttonRemoveTodo} onClick={() => removeTodo(todo.id)} className={s.remove}>
      <SvgRemoveIcon className={s.removeIcon} />
    </button>
  </li>
);
