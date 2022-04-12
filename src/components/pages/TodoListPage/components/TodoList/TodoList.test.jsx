import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {TodoFilterType, DataQa} from '../../../../../data/constants';
import {rootReducer} from '../../../../../store/reducers';

import {TodoList} from './TodoList';

describe('Интеграционное тестирование компонента TodoList', () => {
  test('Рендерит список из 2 элементов, если они есть в store', () => {
    const initialState = {
      todoList: {
        todos: [
          {id: 'todo-item-1', value: 'Тестовое дело 1', completed: false},
          {id: 'todo-item-2', value: 'Тестовое дело 2', completed: false},
        ],
      },
      todoFilter: TodoFilterType.all,
      thunkTest: {},
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const todoElems = screen.queryAllByTestId(DataQa.todoItem);

    expect(todoElems.length).toEqual(2);
  });

  test('В начале рендерит список из 3 элементов, а после удаления остается 2 элемента', () => {
    const initialState = {
      todoList: {
        todos: [
          {id: 'todo-item-1', value: 'Тестовое дело 1', completed: false},
          {id: 'todo-item-2', value: 'Тестовое дело 2', completed: false},
          {id: 'todo-item-3', value: 'Тестовое дело 3', completed: true},
        ],
      },
      todoFilter: TodoFilterType.all,
      thunkTest: {},
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );

    const todoElems = screen.queryAllByTestId(DataQa.todoItem);
    expect(todoElems.length).toEqual(3);

    const deleteButtons = screen.queryAllByTestId(DataQa.buttonRemoveTodo);
    expect(deleteButtons.length).toBe(3);

    fireEvent.click(deleteButtons[1]);
    const deleteButtonsAfterRemoveTodo = screen.queryAllByTestId(DataQa.buttonRemoveTodo);
    expect(deleteButtonsAfterRemoveTodo.length).toBe(2);
  });
});
