import {
  PER_CAPITA_TYPE,
  TOTAL_PERSONAL_TYPE,
  MEDIAN_HOUSEHOLD_TYPE
} from '../Helpers/DataTypes';
import { ADD_DATA_TO_DISPLAY, REMOVE_DATA_TO_DISPLAY } from '../Actions/ActionTypes';

const allTypes = [ PER_CAPITA_TYPE, TOTAL_PERSONAL_TYPE, MEDIAN_HOUSEHOLD_TYPE ];
const initState = {};
allTypes.forEach((d) => {
  initState[d] = false;
});
initState[PER_CAPITA_TYPE] = true;

const DataToDisplay = (state = initState, action) => {
  switch (action.type) {
    case ADD_DATA_TO_DISPLAY:
      return {...state, [action.dataType]: true};
    case REMOVE_DATA_TO_DISPLAY:
      return {...state, [action.dataType]: false};
    default:
      return state;
  }
};

export default DataToDisplay;
