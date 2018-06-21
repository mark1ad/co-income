import deepFreeze from 'deep-freeze';

import { YearData } from './YearDataReducer';
import { setYearData } from '../Actions/YearDataActions';

it('yeardata default success', () => {
  const action = { type: ''};
  deepFreeze(action);
  const results = YearData(undefined, action);
  expect(results).toEqual({});
});

it('set yeardata', () => {
  const state = {};
  const action = setYearData({year: '2016'});
  deepFreeze(state);
  deepFreeze(action);
  const results = YearData(state, action);
  expect(results.year).toEqual('2016');
});
