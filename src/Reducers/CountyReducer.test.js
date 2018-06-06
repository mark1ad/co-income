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
    const action = setCounty( 'Adams');
    deepFreeze(state);
    deepFreeze(action);
    const results = County(state, action);
    expect(results).toEqual({county: 'Adams'});
  });
});
