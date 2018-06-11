import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ByCounty from './ByCounty';

describe('ByCounty', () => {
  let county = {
    County: 'county'
  };
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
    shallow(<ByCounty County={county} />);
  });

  it('throws an error if county object is missing', () => {
    shallow(<ByCounty />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `County` is marked as required in `ByCounty`, but its value is `undefined`./);
  });

  it('does not throw error if County is included', () => {
    shallow(<ByCounty County={county} />);

    expect(stub.notCalled).toEqual(true);
  });
});
