import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './ByYear.css';

import ShowByYearGraph from './ShowByYearGraph';
import ShowYearSelector from '../YearSelector/ShowYearSelector';

class ByYear extends Component {
  componentDidMount() {
    if (this.props.getDefaultYearData !== undefined &&
        (this.props.YearData === undefined || this.props.YearData.year === undefined)) {
      this.props.getDefaultYearData();
    }
  }
  render() {
    if (this.props.YearData === undefined || this.props.YearData.year === undefined) {
      return (
        <div className="by-year"></div>
      );
    } else {
      return (
        <div className="by-year">
          <ShowYearSelector />
          <div className="by-year-graph">
            <ShowByYearGraph yeardata={this.props.YearData} />
          </div>
        </div>
      );
    }
  }
}

ByYear.propTypes = {
  YearData: PropTypes.object.isRequired,
  getDefaultYearData: PropTypes.func.isRequired
};

export default ByYear;
