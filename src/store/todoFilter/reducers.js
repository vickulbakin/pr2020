import { SET_TODO_FILTER } from "./actions";
import { TodoFilterType, FILTER_LS_KEY } from "../../data/constants";

const localStorageFilter = localStorage.getItem(FILTER_LS_KEY);
const defaultState = localStorageFilter || TodoFilterType.all;

export const todoFilterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_TODO_FILTER:
      const filter = action.payload.filter;
      localStorage.setItem(FILTER_LS_KEY, filter);

      return filter;
  }

  return state;
};
