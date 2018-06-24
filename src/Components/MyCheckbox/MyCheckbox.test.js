import React from 'react';
import ReactDOM from 'react-dom';

import MyCheckbox from './MyCheckbox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyCheckbox />, div);
});
