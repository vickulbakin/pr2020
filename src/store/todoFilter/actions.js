export const SET_TODO_FILTER = "SET_TODO_FILTER";

export const setFilter = (filter) => ({
  type: SET_TODO_FILTER,
  payload: {
    filter,
  },
});
