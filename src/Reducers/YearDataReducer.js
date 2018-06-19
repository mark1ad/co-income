import { SET_YEARDATA } from '../Actions/ActionTypes';

export const YearData = (state = {}, action) => {
  switch (action.type) {
    case SET_YEARDATA:
      return action.yeardata;
    default:
      return state;
  }
};
