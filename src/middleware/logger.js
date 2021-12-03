const logger = (store) => (next) => (action) => {
  console.group(action.type);
    const res = next(action); // this will be store.dispatch(action)
    console.log('Action: ', action);
    console.log('New state: ', store.getState());
  console.groupEnd();
  return res;
}

export default logger;