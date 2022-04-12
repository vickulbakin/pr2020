import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {screen} from '@testing-library/dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {TodoFilterType, DataQa} from '../../../../../data/constants';
import {rootReducer} from '../../../../../store/reducers';

import {AddTodo} from './AddTodo';

describe('Интеграционное тестирование компонента AddTodo', () => {
  test('Добавление нового элемента списка при нажатии на кнопку', () => {
    const initialState = {
      todoList: {
        todos: [],
      },
      todoFilter: TodoFilterType.all,
      thunkTest: {},
    };
    const store = createStore(rootReducer, initialState);
    render(
      <Provider store={store}>
        <AddTodo />
      </Provider>
    );

    const input = screen.getByTestId(DataQa.addTodoInput);
    expect(input).toBeTruthy();

    const textToEnter = 'Тестовое дело';
    fireEvent.change(input, {target: {value: textToEnter}});
    fireEvent.click(screen.getByTestId(DataQa.buttonAddTodo));

    const todosState = store.getState().todoList.todos;

    expect(todosState.length).toEqual(1);
    expect(todosState).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 'todo-item-1',
          value: textToEnter,
          completed: false,
        }),
      ])
    );
  });
});
