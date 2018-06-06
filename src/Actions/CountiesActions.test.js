import { SET_COUNTIES } from './ActionTypes';
import { setCounties } from './CountiesActions';

it('action setCounties empty list', () => {
  const action = setCounties([]);
  expect(action).toEqual({
    type: SET_COUNTIES,
    counties: []
  });
});

it('action setCounties', () => {
  const counties = [ 'Adams', 'Alamosa' ];
  const action = setCounties(counties);
  expect(action.type).toEqual( SET_COUNTIES );
  expect(action.counties).toEqual( counties );
});
