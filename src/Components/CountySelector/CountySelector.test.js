import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import CountySelector from './CountySelector';

let mockSubmitFunction;

beforeEach(() => {
  mockSubmitFunction = jest.fn();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountySelector name="county" submit={mockSubmitFunction} />, div);
});

describe('CountySelector PropTypes', () => {
  let stub;
  let mockSubmitFunction;

  beforeEach(() => {
    stub = sinon.stub(console, 'error');
    mockSubmitFunction = jest.fn();
  });

  afterEach(() => {
    /* eslint-disable no-console */
    console.error.restore();
    /* eslint-enable no-console */
  });

  it('throws an error if name is missing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelector submit={mockSubmitFunction} />, div);

    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `name` is marked as required in `CountySelector`, but its value is `undefined`./);
  });

  it('does not throw error if name is included', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelector name="name" submit={mockSubmitFunction} />, div);

    expect(stub.notCalled).toEqual(true);
  });

  it('throws an error if submit is missing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelector name="name" />, div);
    expect(stub.calledOnce).toEqual(true);
    expect(stub.args[0][0]).toMatch(/Warning: Failed prop type: The prop `submit` is marked as required in `CountySelector`, but its value is `undefined`./);
  });

  it('does not throw error if submit is included', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CountySelector name="name" submit={mockSubmitFunction} />, div);
    expect(stub.notCalled).toEqual(true);
  })
});
