import {
  ADD_TODO,
  SET_TODOS,
  SET_TODOS_FAIL,
  START_SETTING_TODOS,
} from "../Redux/redux_types/todoConstants";

import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

const url = process.env.TODO_API;
export function fetchTodos() {
  return async (dispatch) => {
    dispatch({ type: START_SETTING_TODOS });
    try {
      const json = await fetch(
        "http://127.0.0.1:8090/api/collections/todo/records"
      );
      const todos = await json.json();
      dispatch({ type: SET_TODOS, payload: todos.items });
    } catch (error) {
      dispatch({ type: SET_TODOS_FAIL, payload: error });
    }
  };
}

export function createTodo({ title, content }) {
  console.log(title);
  return async (dispatch) => {
    dispatch({ type: START_SETTING_TODOS });

    try {
      const newTodo = await pb.collection("todo").create({ title, content });

      dispatch({ type: ADD_TODO, payload: newTodo });
    } catch (error) {
      dispatch({ type: SET_TODOS_FAIL, payload: error });
    }
  };
}