import deepFreeze from 'deep-freeze';

import { Counties } from './CountiesReducer';
import { setCounties } from '../Actions/CountiesActions';

describe('CountiesReducer', () => {
  const counties = ['Adams', 'Alamosa'];
  it('counties default success', () => {
    const action = { type: ''};
    deepFreeze(action);
    const results = Counties(undefined, action);
    expect(results).toEqual([]);
  });

  it('counties set list', () => {
    const state = [];
    const action = setCounties( counties);
    deepFreeze(state);
    deepFreeze(action);
    const results = Counties(state, action);
    expect(results).toEqual( counties);
  });
});
