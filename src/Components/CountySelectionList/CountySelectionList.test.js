import React from 'react';
import ReactDOM from 'react-dom';
import CountySelectionList from './CountySelectionList';

describe('CountySelectionList', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelectionList />, div);
  });
});
