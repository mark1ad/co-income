import React from 'react';
import { PropTypes } from 'prop-types';

const MyCheckbox = ({label}) => {
  return (
    <div>{label}</div>
  );
};

MyCheckbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default MyCheckbox;
