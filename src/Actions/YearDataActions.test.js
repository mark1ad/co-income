import { SET_YEARDATA } from './ActionTypes';
import { setYearData } from './YearDataActions';

it('action setYearData', () => {
  const action = setYearData({year: '2016'});
  expect(action.type).toEqual(SET_YEARDATA);
  expect(action.yeardata.year).toEqual('2016');
});
