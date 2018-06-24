import {
  PER_CAPITA_TYPE,
  TOTAL_PERSONAL_TYPE,
  MEDIAN_HOUSEHOLD_TYPE,
  dataTypeInfo
} from '../Helpers/DataTypes';
import { ADD_DATA_TO_DISPLAY, REMOVE_DATA_TO_DISPLAY } from '../Actions/ActionTypes';

const allTypes = [ PER_CAPITA_TYPE, TOTAL_PERSONAL_TYPE, MEDIAN_HOUSEHOLD_TYPE ];
const initState = {};
allTypes.forEach((d) => {
  initState[d] = dataTypeInfo[d];
});
initState[PER_CAPITA_TYPE].displayed = true;

const DataToDisplay = (state = initState, action) => {
  let dataTypeInfo;
  switch (action.type) {
    case ADD_DATA_TO_DISPLAY:
      dataTypeInfo = {...state[action.dataType], displayed: true};
      return {...state, [action.dataType]: dataTypeInfo};
    case REMOVE_DATA_TO_DISPLAY:
      dataTypeInfo = {...state[action.dataType], displayed: false};
      return {...state, [action.dataType]: dataTypeInfo};
    default:
      return state;
  }
};

export default DataToDisplay;
