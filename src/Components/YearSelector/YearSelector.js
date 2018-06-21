import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './YearSelector.css';

class YearSelector extends Component {
  constructor(props) {
    super();
    let startYear = 1969;
    let numYears = (new Date().getFullYear()) - startYear + 1;
    this.years = [...Array(numYears).keys()].map(i => (i + startYear).toString());

    this.onDateChange = (e) => {
      e.preventDefault();
      props.onDateChange(this.selection.value);
    };

    this.defaultYear = '2016';
    this.year = (props.year === '') ? this.defaultYear : props.year;

    this.selection = undefined;
  }

  componentDidMount() {
    if (this.props.year === '') {
      this.props.onDateChange(this.defaultYear);
    }
  }

  render() {
    return (
      <div className="year-selector">
        <div>
          Income Information for <select ref={input => this.selection = input} defaultValue={this.year} onChange={this.onDateChange}>
            {this.years.map(year => (<option key={year} value={year} >{year} </option>))}
          </select>
        </div>
      </div>
    );
  }
}

YearSelector.propTypes = {
  onDateChange: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired
};

export default YearSelector;
