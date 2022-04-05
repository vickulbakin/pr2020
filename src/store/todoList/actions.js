import {NEXT_TODO_ID_LS_KEY} from '../../data/constants';

export const ADD_TODO_LIST_ITEM = 'ADD_TODO_LIST_ITEM';
export const TOGGLE_TODO_LIST_ITEM = 'TOGGLE_TODO_LIST_ITEM';
export const REMOVE_TODO_LIST_ITEM = 'REMOVE_TODO_LIST_ITEM';

const localStorageTodoId = localStorage.getItem(NEXT_TODO_ID_LS_KEY);
let nextTodoId = localStorageTodoId || 0;

export const addTodo = (todoValue) => {
  const id = `todo-item-${++nextTodoId}`;
  localStorage.setItem(NEXT_TODO_ID_LS_KEY, nextTodoId);

  return {
    type: ADD_TODO_LIST_ITEM,
    payload: {
      id,
      todoValue,
    },
  };
};

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO_LIST_ITEM,
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO_LIST_ITEM,
  payload: {
    id,
  },
});
