import React, {useState} from 'react';

import {DataQa} from '../../../../../data/constants';

import s from './AddTodo.scss';

export const AddTodoContent = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');

  const onTodoInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onAddTodo = () => {
    if (inputValue !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className={s.root}>
      <input
        data-testid={DataQa.addTodoInput}
        type="text"
        name="todoInput"
        placeholder="Запланировать дело"
        value={inputValue}
        onChange={onTodoInputChange}
        className={s.input}
      />
      <button data-testid={DataQa.buttonAddTodo} onClick={onAddTodo}>
        +
      </button>
    </div>
  );
};
