import { SET_YEARDATA } from './ActionTypes.js';

export const setYearData = (yearData) =>
  ({
    type: SET_YEARDATA,
    yeardata: yearData
  });
