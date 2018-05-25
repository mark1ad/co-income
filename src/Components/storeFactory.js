import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { data } from './reducers';

let initStore = {};

const logger = store => next => action  => {
  /* eslint-disable no-console */
  // console.groupCollapsed("dispatching ", action.type)
  console.log('\n>>> Dispatching ', action.type);
  console.log('prev state ', store.getState());
  console.log('action ', action);
  next(action);
  console.log('next state ', store.getState());
  console.log('\n');
  // console.groupEnd();
  /* eslint-enable no-console */
};


const storeFactory = (initialState = initStore) =>
  applyMiddleware(logger)(createStore)(combineReducers({data}), initialState);

export default storeFactory;
