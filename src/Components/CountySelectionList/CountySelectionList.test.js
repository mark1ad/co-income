import React from 'react';
import { shallow } from 'enzyme';
import CountySelectionList from './CountySelectionList';

describe('CountySelectionList', () => {
  it('renders without crashing', () => {
    shallow(<CountySelectionList />);
  });
});
