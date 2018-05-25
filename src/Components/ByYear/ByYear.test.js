import React from 'react';
import ReactDOM from 'react-dom';
import ByYear from './ByYear';

describe('ByYear', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ByYear />, div);
  });
});
