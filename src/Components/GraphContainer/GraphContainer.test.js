import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import GraphContainer from './GraphContainer';

describe('GraphContainer', () => {
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
    shallow(<GraphContainer county={{}} />);
  });

  it('throws an error if dataset is missing', () => {
    shallow(<GraphContainer />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `dataset` is marked as required in `GraphContainer`, but its value is `undefined`./);
  });

  it('does not throw error if county is included', () => {
    shallow(<GraphContainer dataset={{}} />);
    expect(stub.notCalled).toEqual(true);
  });
});
