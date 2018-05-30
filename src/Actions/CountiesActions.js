import {
  SET_COUNTIES
} from './ActionTypes.js';

export const setCounties = (counties) =>
  ({
    type: SET_COUNTIES,
    counties: counties
  });
