import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ByCounty from './ByCounty';

describe('ByCounty', () => {
  let county = {
    County: 'county'
  };
  let stub;
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
    shallow(<ByCounty County={county} getDefaultCounty={mockGetDefaultFunc} dataTypeInfo={{}}  />);
    expect(stub.notCalled).toEqual(true);
  });

  it('throws an error if county object is missing', () => {
    shallow(<ByCounty getDefaultCounty={mockGetDefaultFunc} dataTypeInfo={{}} />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `County` is marked as required in `ByCounty`, but its value is `undefined`./);
  });

  it('does not throw error if County is included', () => {
    shallow(<ByCounty County={county} getDefaultCounty={mockGetDefaultFunc} dataTypeInfo={{}} />);

    expect(stub.notCalled).toEqual(true);
  });

  it('throws an error if getDefaultCounty function is missing', () => {
    shallow(<ByCounty County={county} dataTypeInfo={{}} />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `getDefaultCounty` is marked as required in `ByCounty`, but its value is `undefined`./);
  });

  it('does not throw error if getDefaultCounty is included', () => {
    shallow(<ByCounty County={county} getDefaultCounty={mockGetDefaultFunc} dataTypeInfo={{}} />);

    expect(stub.notCalled).toEqual(true);
  });

  it('throws an error if dataTypeInfo is missing', () => {
    shallow(<ByCounty County={county}  getDefaultCounty={mockGetDefaultFunc}  />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `dataTypeInfo` is marked as required in `ByCounty`, but its value is `undefined`./);
  });
});
