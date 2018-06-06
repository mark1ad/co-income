import { SET_COUNTY } from './ActionTypes.js';

export const setCounty = (county) =>
  ({
    type: SET_COUNTY,
    county: county
  });
