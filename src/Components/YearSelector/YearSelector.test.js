import React from 'react';
import ReactDOM from 'react-dom';

import YearSelector from './YearSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearSelector />, div);
});
