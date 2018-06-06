import { SET_COUNTY } from './ActionTypes';
import { setCounty } from './CountyActions';

it('action setCounty', () => {
  const action = setCounty('Adams');
  expect(action.type).toEqual( SET_COUNTY );
  expect(action.county).toEqual('Adams');
});
