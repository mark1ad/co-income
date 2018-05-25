import React from 'react';
import ReactDOM from 'react-dom';
import ByCounty from './ByCounty';

describe('ByCounty', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ByCounty />, div);
  });
});
