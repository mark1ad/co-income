import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import CountySelector from './CountySelector';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountySelector name="county" />, div);
});

describe('CountySelector PropTypes', () => {
  let stub;

  beforeEach(() => {
    stub = sinon.stub(console, 'error');
  });

  afterEach(() => {
    console.error.restore();
  })

  it('throws an error if name is missing', () => {

    // stub = sinon.stub(console, 'error');

    const div = document.createElement('div');
    ReactDOM.render(<CountySelector />, div);

    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `name` is marked as required in `CountySelector`, but its value is `undefined`./);
  });

  it('does not throw error if name is included', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelector name="name" />, div);

    expect(stub.notCalled).toEqual(true);
  });
});
