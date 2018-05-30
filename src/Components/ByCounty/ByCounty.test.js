import React from 'react';
import { shallow } from 'enzyme';
import ByCounty from './ByCounty';

describe('ByCounty', () => {
  it('renders without crashing', () => {
    shallow(<ByCounty />);
  });
});
