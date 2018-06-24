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
    shallow(<GraphContainer datasets={[]} labels={[]} />);
    expect(stub.notCalled).toEqual(true);
  });

  it('throws an error if datasets is missing', () => {
    shallow(<GraphContainer labels={[]} />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `datasets` is marked as required in `GraphContainer`, but its value is `undefined`./);
  });

  it('throws an error if labels is missing', () => {
    shallow(<GraphContainer datasets={[]} />);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `labels` is marked as required in `GraphContainer`, but its value is `undefined`./);
  });
});
