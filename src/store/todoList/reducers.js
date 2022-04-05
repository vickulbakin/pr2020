import {ADD_TODO_LIST_ITEM, TOGGLE_TODO_LIST_ITEM, REMOVE_TODO_LIST_ITEM} from './actions';
import {TODOS_LS_KEY} from '../../data/constants';

const localStorageTodos = JSON.parse(localStorage.getItem(TODOS_LS_KEY));
const defaultState = {
  todos: localStorageTodos || [],
};

export const todoListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO_LIST_ITEM:
      const stateTodosWithNewItem = [
        ...state.todos,
        {
          id: action.payload.id,
          value: action.payload.todoValue,
          completed: false,
        },
      ];
      localStorage.setItem(TODOS_LS_KEY, JSON.stringify(stateTodosWithNewItem));

      return {
        ...state,
        todos: stateTodosWithNewItem,
      };
    case TOGGLE_TODO_LIST_ITEM:
      const completedTodoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);

      if (completedTodoIndex !== undefined) {
        state.todos[completedTodoIndex] = {
          ...state.todos[completedTodoIndex],
          completed: !state.todos[completedTodoIndex].completed,
        };
        const stateTodosWithUpdateCompleted = [...state.todos];
        localStorage.setItem(TODOS_LS_KEY, JSON.stringify(stateTodosWithUpdateCompleted));

        return {
          ...state,
          todos: stateTodosWithUpdateCompleted,
        };
      }

      return {
        ...state,
      };
    case REMOVE_TODO_LIST_ITEM:
      const stateTodosWithoutRemovedItem = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem(TODOS_LS_KEY, JSON.stringify(stateTodosWithoutRemovedItem));

      return {
        ...state,
        todos: stateTodosWithoutRemovedItem,
      };
  }

  return state;
};
