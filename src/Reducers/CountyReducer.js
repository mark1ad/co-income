import { SET_COUNTY } from '../Actions/ActionTypes';

export const County = (state = {}, action) => {
  switch (action.type) {
    case SET_COUNTY:
      return {
        county: action.county,
        years: action.years
      };
    default:
      return state;
  }
};
