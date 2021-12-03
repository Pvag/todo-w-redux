import API from 'goals-todos-api';
import { networkErrorLog } from './util';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export function handleAddTodo (name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch(() => networkErrorLog());
  }
}

export function handleToggle (id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id));
        networkErrorLog();
      });
  }
}

export function handleRemoveItem (todo) {
  return (dispatch) => {
    // Optimistic Update
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        networkErrorLog();
      });
  }
}