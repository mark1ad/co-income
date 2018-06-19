import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class ByYear extends Component {
  componentDidMount() {
    if (this.props.getDefaultYearData !== undefined &&
        (this.props.YearData === undefined || this.props.YearData.year === undefined)) {
      this.props.getDefaultYearData();
    }
  }
  render() {
    return (
      <div className="by-year">
        <h1>By Year</h1>
      </div>
    );
  }
}

ByYear.propTypes = {
  YearData: PropTypes.object.isRequired,
  getDefaultYearData: PropTypes.func.isRequired
};

export default ByYear;
