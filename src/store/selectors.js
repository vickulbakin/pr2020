import {TodoFilterType} from '../data/constants';

export const getTodosByFilter = (todos, filterType) => {
  switch (filterType) {
    case TodoFilterType.completed:
      return todos.filter(todo => todo.completed);
    case TodoFilterType.incompleted:
      return todos.filter(todo => !todo.completed);
    case TodoFilterType.all:
    default:
      return todos;
  }
}
