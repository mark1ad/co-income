import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import ByYear from './ByYear';

let stub;
let yeardata = {};
let mockGetDefaultFunc;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
  mockGetDefaultFunc = jest.fn();
});

afterEach(() => {
  /* eslint-disable no-console */
  console.error.restore();
  /* eslint-enable no-console */
});

it('renders without crashing', () => {
  shallow(<ByYear YearData={yeardata} getDefaultYearData={mockGetDefaultFunc} dataTypeInfo={{}} />);
});

it('throws an error if yeardata object is missing', () => {
  shallow(<ByYear getDefaultYearData={mockGetDefaultFunc} dataTypeInfo={{}} />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `YearData` is marked as required in `ByYear`, but its value is `undefined`./);
});

it('does not throw error if YearData is included', () => {
  shallow(<ByYear YearData={yeardata} getDefaultYearData={mockGetDefaultFunc} dataTypeInfo={{}} />);

  expect(stub.notCalled).toEqual(true);
});

it('throws an error if getDefaultYearData function is missing', () => {
  shallow(<ByYear YearData={yeardata} dataTypeInfo={{}} />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `getDefaultYearData` is marked as required in `ByYear`, but its value is `undefined`./);
});

it('throws an error if dataTypeInfo is missing', () => {
  shallow(<ByYear YearData={yeardata} getDefaultYearData={mockGetDefaultFunc} />);
  expect(stub.calledOnce).toEqual(true);
  expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `dataTypeInfo` is marked as required in `ByYear`, but its value is `undefined`./);
});
