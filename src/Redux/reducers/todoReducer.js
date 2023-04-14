//https://alchemical-bytes.medium.com/simple-asynchronous-requests-in-react-using-redux-thunk-9e1d280e75bc
import {
  ADD_TODO,
  EDIT_TODO,
  GET_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_TODOS_FAIL,
  START_SETTING_TODOS,
  TOGGLE_TODO,
} from "../redux_types/todoConstants";
const initData = [];
export const todoReducer = (state = initData, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case START_SETTING_TODOS: {
      console.log("loading");
      return state;
    }
    case SET_TODOS_FAIL: {
      console.log("fail");
      return state;
    }
    case SET_TODOS: {
      return payload;
    }
    case ADD_TODO: {
      return [...state, payload];
    }
    case REMOVE_TODO: {
      return;
    }
    case TOGGLE_TODO: {
      return;
    }
    case EDIT_TODO: {
      return;
    }

    default:
      return state;
  }
};
