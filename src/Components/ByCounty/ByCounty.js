import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './ByCounty.css';

import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import ShowByCountyGraph from
  './ShowByCountyGraph';
import ShowDataTypeSelector from '../DataTypeSelector/ShowDataTypeSelector';

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
            <div className="by-county-header">
              {this.props.County.name} County
            </div>
            <ShowDataTypeSelector />
            <div className="by-county-graph-area">
              <ShowByCountyGraph county={this.props.County} dataTypeInfo={this.props.dataTypeInfo} />
            </div>
          </div>
        </div>
      );
    }
  }
}

ByCounty.propTypes = {
  dataTypeInfo: PropTypes.object.isRequired,
  County: PropTypes.object.isRequired,
  getDefaultCounty: PropTypes.func.isRequired
};

export default ByCounty;
