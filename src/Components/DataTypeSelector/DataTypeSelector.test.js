import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DataTypeSelector from './DataTypeSelector';

let stub;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
});

afterEach(() => {
  /* eslint-disable no-console */
  console.error.restore();
  /* eslint-enable no-console */
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DataTypeSelector dataToDisplay={{}} />, div);
  expect(stub.notCalled).toEqual(true);
});

it('throws an error if dataToDisplay is missing', () => {
  shallow(<DataTypeSelector />);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `dataToDisplay` is marked as required in `DataTypeSelector`, but its value is `undefined`./);
});
