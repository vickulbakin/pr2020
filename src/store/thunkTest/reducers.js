import {PUT_DATA} from './actions';

const defaultState = {
  data: {},
};

export const thunkTestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        ...state,
        data: action.payload,
      };
  }

  return state;
};
