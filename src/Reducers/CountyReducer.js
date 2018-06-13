import { SET_COUNTY } from '../Actions/ActionTypes';

export const County = (state = {}, action) => {
  switch (action.type) {
    case SET_COUNTY:
      return action.county;
    default:
      return state;
  }
};
