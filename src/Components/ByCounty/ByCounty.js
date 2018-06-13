import React from 'react';
import { PropTypes } from 'prop-types';

import './ByCounty.css';


import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import ShowByCountyGraph from
  './ShowByCountyGraph';

const ByCounty = (props) => {
  return (
    <div className="by-county">
      <ShowCountySelectionList />
      <ShowByCountyGraph county={props.County} />
    </div>
  );
};

ByCounty.propTypes = {
  County: PropTypes.object.isRequired
};

export default ByCounty;
