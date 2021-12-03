import API from 'goals-todos-api';
import { networkErrorLog } from './util';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

export function handleAddGoal (name, callback) {
  return (dispatch) => {
    API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal));
        callback();
      })
      .catch(() => {
        networkErrorLog();
      });
  }
}

export function handleDeleteGoal (goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id));
    API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal));
        networkErrorLog();
      });
  }
}