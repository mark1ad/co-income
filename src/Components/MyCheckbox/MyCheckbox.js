import React from 'react';
import { PropTypes } from 'prop-types';

import './MyCheckbox.css';

const MyCheckbox = ({label}) => {
  return (
    <div className="my-checkbox">
      {label}
      <input type="checkbox"/>
    </div>
  );
};

MyCheckbox.propTypes = {
  label: PropTypes.string.isRequired
};

export default MyCheckbox;
