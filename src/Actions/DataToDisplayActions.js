import { ADD_DATA_TO_DISPLAY, REMOVE_DATA_TO_DISPLAY } from './ActionTypes';

export const addDataToDisplay = (dataType) => ({
  type: ADD_DATA_TO_DISPLAY,
  dataType: dataType
});

export const removeDataToDisplay = (dataType) => ({
  type: REMOVE_DATA_TO_DISPLAY,
  dataType: dataType
});
