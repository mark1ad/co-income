import React from 'react';
import { PropTypes } from 'prop-types';

const CountySelector = (props) => {
  return (
    <div>
      {props.name}
    </div>
  );
};

CountySelector.propTypes = {
  name: PropTypes.string.isRequired
};

export default CountySelector;
