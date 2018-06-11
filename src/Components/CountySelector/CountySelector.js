import React from 'react';
import { PropTypes } from 'prop-types';

import './CountySelector.css';

const CountySelector = (props) => {
  const submit = e => {
    e.preventDefault();
    props.submit(props.name);
  };

  return (
    <div className="county-selector" onClick={submit}>
      {props.name}
    </div>
  );
};

CountySelector.propTypes = {
  name: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired
};

export default CountySelector;
