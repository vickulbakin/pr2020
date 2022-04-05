import {combineReducers} from 'redux';
import {todoListReducer} from './todoList/reducers';
import {todoFilterReducer} from './todoFilter/reducers';
import {thunkTestReducer} from './thunkTest/reducers';

export const rootReducer = combineReducers({
  todoList: todoListReducer,
  todoFilter: todoFilterReducer,
  thunkTest: thunkTestReducer,
});
