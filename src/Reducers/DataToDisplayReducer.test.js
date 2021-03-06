import deepFreeze from 'deep-freeze';

import DataToDisplay from './DataToDisplayReducer';
import { MEDIAN_HOUSEHOLD_TYPE } from '../Helpers/DataTypes';
import { addDataToDisplay, removeDataToDisplay } from '../Actions/DataToDisplayActions';

it('DataToDisplay default', () => {
  const action = { type: ''};
  deepFreeze(action);
  const results = DataToDisplay(undefined, action);
  expect(Object.keys(results).length).toEqual(3);
});

it('add type to display', () => {
  let action = { type: ''};
  let state = DataToDisplay(undefined, action);
  action = addDataToDisplay( MEDIAN_HOUSEHOLD_TYPE);
  deepFreeze(state);
  deepFreeze(action);
  const results = DataToDisplay(state, action);
  expect(results[MEDIAN_HOUSEHOLD_TYPE].displayed).toEqual(true);
});

it('remove type to display', () => {
  let action = { type: ''};
  let state = DataToDisplay(undefined, action);
  action = addDataToDisplay( MEDIAN_HOUSEHOLD_TYPE);
  state = DataToDisplay(state, action);
  action = removeDataToDisplay( MEDIAN_HOUSEHOLD_TYPE);
  deepFreeze(state);
  deepFreeze(action);
  const results = DataToDisplay(state, action);
  expect(results[MEDIAN_HOUSEHOLD_TYPE].displayed).toEqual(false);
});
