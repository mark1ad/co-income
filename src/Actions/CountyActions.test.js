import { SET_COUNTY } from './ActionTypes';
import { setCounty } from './CountyActions';

it('action setCounty', () => {
  const action = setCounty('Adams', [1960, 1961]);
  expect(action.type).toEqual( SET_COUNTY );
  expect(action.county).toEqual('Adams');
  expect(action.years.length).toEqual(2);
});
