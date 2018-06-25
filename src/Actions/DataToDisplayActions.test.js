import { ADD_DATA_TO_DISPLAY, REMOVE_DATA_TO_DISPLAY } from './ActionTypes';
import { addDataToDisplay, removeDataToDisplay } from './DataToDisplayActions';
import { PER_CAPITA_TYPE } from '../Helpers/DataTypes';

it('action add data to display', () => {
  const action = addDataToDisplay(PER_CAPITA_TYPE);
  expect(action.type).toEqual( ADD_DATA_TO_DISPLAY);
  expect(action.dataType).toEqual(PER_CAPITA_TYPE);
});

it('action remove data to display', () => {
  const action = removeDataToDisplay(PER_CAPITA_TYPE);
  expect(action.type).toEqual( REMOVE_DATA_TO_DISPLAY);
  expect(action.dataType).toEqual(PER_CAPITA_TYPE);
});
