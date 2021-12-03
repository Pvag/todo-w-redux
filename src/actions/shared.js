import API from 'goals-todos-api';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const REFRESH = 'REFRESH';

function receiveData (todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  }
}

export function refreshData () {
  return {
    type: REFRESH,
  }
}

export function handleInitialData () {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals))
    });
  }
}

export function handleFetchData () {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  }
}