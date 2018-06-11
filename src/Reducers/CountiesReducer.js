import { SET_COUNTIES } from '../Actions/ActionTypes';

export const Counties = (state = [], action) => {
  switch (action.type) {
    case SET_COUNTIES:
      return action.counties;
    default:
      return state;
  }
};
