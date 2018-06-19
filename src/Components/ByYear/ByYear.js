import React from 'react';
import { PropTypes } from 'prop-types';

const ByYear = () => {
  return (
    <div className="by-year">
      <h1>By Year</h1>
    </div>
  );
};

ByYear.propTypes = {
  YearData: PropTypes.object.isRequired
};

export default ByYear;
