import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './ByCounty.css';


import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import ShowByCountyGraph from
  './ShowByCountyGraph';

class ByCounty extends Component {
  componentDidMount() {
    if (this.props.getDefaultCounty !== undefined &&
          (this.props.County === undefined || this.props.County.name === undefined) ) {
      this.props.getDefaultCounty();
    }
  }

  render() {
    if (this.props.County === undefined
        || this.props.County.name === undefined) {
      return (
        <div className="by-county"></div>
      );
    }else {
      return (
        <div className="by-county">
          <ShowCountySelectionList />
          <div className="by-county-graph">
            <h2>{this.props.County.name}</h2>
            <ShowByCountyGraph county={this.props.County} />
          </div>
        </div>
      );
    }
  }
}

ByCounty.propTypes = {
  County: PropTypes.object.isRequired,
  getDefaultCounty: PropTypes.func.isRequired
};

export default ByCounty;
