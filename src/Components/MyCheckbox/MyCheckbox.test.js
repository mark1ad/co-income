import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyCheckbox from './MyCheckbox';

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
  ReactDOM.render(<MyCheckbox label="" />, div);
  expect(stub.notCalled).toEqual(true);
});

it('throws an error if label is missing', () => {
  shallow(<MyCheckbox />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `label` is marked as required in `MyCheckbox`, but its value is `undefined`./);
});
