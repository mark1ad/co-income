import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import YearSelector from './YearSelector';

let mockOnChangeFunc;
let stub;

beforeEach(() => {
  mockOnChangeFunc = jest.fn();
  stub = sinon.stub(console, 'error');
});

afterEach(() => {
  /* eslint-disable no-console */
  console.error.restore();
  /* eslint-enable no-console */
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearSelector onDateChange={mockOnChangeFunc} year='1900' />, div);
});

it('throws an error if onDateChange is missing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearSelector year='1900' />, div);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `onDateChange` is marked as required in `YearSelector`, but its value is `undefined`./);
});

it('throws an error if year is missing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearSelector onDateChange={mockOnChangeFunc} />, div);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `year` is marked as required in `YearSelector`, but its value is `undefined`./);
});
