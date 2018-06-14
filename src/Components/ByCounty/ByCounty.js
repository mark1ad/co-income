import React from 'react';
import { PropTypes } from 'prop-types';

import './ByCounty.css';


import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import ShowByCountyGraph from
  './ShowByCountyGraph';

const ByCounty = (props) => {
  let name = (props.County === undefined || props.County.name === undefined)
    ? 'Select A County' : props.County.name;
  return (
    <div className="by-county">
      <ShowCountySelectionList />
      <div className="by-county-graph">
        <h2>{name}</h2>
        <ShowByCountyGraph county={props.County} />
      </div>
    </div>
  );
};

ByCounty.propTypes = {
  County: PropTypes.object.isRequired
};

export default ByCounty;
