import { SET_COUNTY } from './ActionTypes.js';

export const setCounty = (county, years) =>
  ({
    type: SET_COUNTY,
    county: county,
    years: years
  });
