import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MyCheckbox from './MyCheckbox';

let stub;
let mockOnChangeFunc;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
  mockOnChangeFunc = jest.fn();
});

afterEach(() => {
  /* eslint-disable no-console */
  console.error.restore();
  /* eslint-enable no-console */
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyCheckbox label="" onChange={mockOnChangeFunc} dataType="1" displayed={true}  />, div);
  expect(stub.notCalled).toEqual(true);
});

it('throws an error if label is missing', () => {
  shallow(<MyCheckbox onChange={mockOnChangeFunc} dataType="1" displayed={true} />);
  // expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `label` is marked as required in `MyCheckbox`, but its value is `undefined`./);
});


it('throws an error if onChange is missing', () => {
  shallow(<MyCheckbox label="" dataType="1" displayed={true} />);
  // expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `onChange` is marked as required in `MyCheckbox`, but its value is `undefined`./);
});

it('throws an error if dataType is missing', () => {
  shallow(<MyCheckbox label="" onChange={mockOnChangeFunc} displayed={true} />);
  // expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `dataType` is marked as required in `MyCheckbox`, but its value is `undefined`./);
});

it('throws an error if displayed is missing', () => {
  shallow(<MyCheckbox label="" onChange={mockOnChangeFunc} dataType="1" />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `displayed` is marked as required in `MyCheckbox`, but its value is `undefined`./);
});
