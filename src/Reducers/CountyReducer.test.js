import deepFreeze from 'deep-freeze';

import { County } from './CountyReducer';
import { setCounty } from '../Actions/CountyActions';

describe('CountyReducer', () => {
  it('county default success', () => {
    const action = { type: ''};
    deepFreeze(action);
    const results = County(undefined, action);
    expect(results).toEqual({});
  });

  it('set county', () => {
    const state = {};
    const action = setCounty( 'Adams', [1960, 1961]);
    deepFreeze(state);
    deepFreeze(action);
    const results = County(state, action);
    expect(results.county).toEqual('Adams');
    expect(results.years.length).toEqual(2);
  });
});
