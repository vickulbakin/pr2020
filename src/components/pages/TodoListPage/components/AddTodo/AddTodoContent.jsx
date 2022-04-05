import React, {useState} from 'react';

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
        type="text"
        name="todoInput"
        placeholder="Запланировать дело"
        value={inputValue}
        onChange={onTodoInputChange}
        className={s.input}
      />
      <button onClick={onAddTodo}>+</button>
    </div>
  );
};
