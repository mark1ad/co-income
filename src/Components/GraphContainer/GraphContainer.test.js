import React from 'react';
import ReactDOM from 'react-dom';

import GraphContainer from './GraphContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GraphContainer />, div);
});
