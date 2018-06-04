import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Counties } from '../Reducers/CountiesReducer';

let initStore = {};

/* eslint-disable no-unused-vars */
const logger = store => next => action  => {
  /* eslint-disable no-console */
  // console.groupCollapsed("dispatching ", action.type)
  // console.log('\n>>> Dispatching ', action.type);
  // console.log('prev state ', store.getState());
  // console.log('action ', action);
  next(action);
  // console.log('next state ', store.getState());
  // console.log('\n');
  // console.groupEnd();
  /* eslint-enable no-console */
};
/* eslint-enable no-unused-vars */

const reducers = {
  Counties
};

const storeFactory = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(combineReducers(reducers), initialState);

export default storeFactory;
