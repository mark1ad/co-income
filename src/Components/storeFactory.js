import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Counties } from '../Reducers/CountiesReducer';
import { County } from '../Reducers/CountyReducer';
import { YearData } from '../Reducers/YearDataReducer';

let initStore = {};

/* eslint-disable no-unused-vars */
const logger = store => next => action  => {
  /* eslint-disable no-console */
  if (process.env.NODE_ENV === 'development') {
    console.groupCollapsed('dispatching ', action.type);
    console.log('>>> Dispatching ', action.type);
    console.log('prev state ', store.getState());
    console.log('action ', action);
  }
  next(action);
  if (process.env.NODE_ENV === 'development') {
    console.log('next state ', store.getState());
    console.groupEnd();
  }
  /* eslint-enable no-console */
};
/* eslint-enable no-unused-vars */

const reducers = {
  County,
  Counties,
  YearData
};

const storeFactory = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(combineReducers(reducers), initialState);

export default storeFactory;
