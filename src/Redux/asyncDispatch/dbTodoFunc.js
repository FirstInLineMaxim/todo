import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODOS,
  SET_TODOS_FAIL,
  START_SETTING_TODOS,
  TOGGLE_TODO,
} from "../redux_types/todoConstants";

import PocketBase from "pocketbase";
const pb = new PocketBase(process.env.NEXT_PUBLIC_BASE_API);

const url = process.env.TODO_API;
export function fetchTodos() {
  return async (dispatch) => {
    dispatch({ type: START_SETTING_TODOS });
    try {
      const json = await fetch(process.env.NEXT_PUBLIC_TODO_API);
      const todos = await json.json();
      dispatch({ type: SET_TODOS, payload: todos.items });
    } catch (error) {
      dispatch({ type: SET_TODOS_FAIL, payload: error });
    }
  };
}

export function createTodo({ title, content }) {
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

export function checkedTodo(id) {
  return async (dispatch) => {
    dispatch({ type: START_SETTING_TODOS });
    try {
      console.log(pb);
      const record = pb.collection("todo");
      const { checked } = await record.getFirstListItem(`id="${id}"`);
      await record.update(`${id}`, {
        checked: !checked,
      });
      dispatch({ type: TOGGLE_TODO, payload: { id } });
    } catch (error) {
      dispatch({ type: SET_TODOS_FAIL, payload: error });
    }
  };
}

export function deleteTodo(id) {
  return async (dispatch) => {
    dispatch({ type: START_SETTING_TODOS });
    try {
      const record = pb.collection("todo");
      await record.delete(id);
      dispatch({ type: REMOVE_TODO, payload: { id } });
    } catch (error) {
      dispatch({ type: SET_TODOS_FAIL, payload: error });
    }
  };
}
