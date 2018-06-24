import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './ByYear.css';

import ShowByYearGraph from './ShowByYearGraph';
import ShowYearSelector from '../YearSelector/ShowYearSelector';
import ShowDataTypeSelector from '../DataTypeSelector/ShowDataTypeSelector';

class ByYear extends Component {
  render() {
    if (this.props.YearData === undefined || this.props.YearData.year === undefined) {
      return (
        <div className="by-year">
          <ShowYearSelector />
          <ShowDataTypeSelector />
        </div>
      );
    } else if (this.props.YearData.incomes.length === 0) {
      return (
        <div className="by-year">
          <ShowYearSelector />
          <ShowDataTypeSelector />
          <div className="by-year-graph-area by-year-no-data">
            <div className="by-year-no-data">
              <h2>No data available for {this.props.YearData.year}</h2>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="by-year">
          <ShowYearSelector />
          <ShowDataTypeSelector />
          <div className="by-year-graph-area">
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
