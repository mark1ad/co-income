import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import ByYear from './ByYear';

let stub;
let yeardata = {};

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
  ReactDOM.render(<ByYear YearData={yeardata} />, div);
});

it('throws an error if yeardata object is missing', () => {
  shallow(<ByYear />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `YearData` is marked as required in `ByYear`, but its value is `undefined`./);
});

it('does not throw error if YearData is included', () => {
  shallow(<ByYear YearData={yeardata} />);

  expect(stub.notCalled).toEqual(true);
});
