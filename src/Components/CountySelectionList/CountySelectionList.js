import React from 'react';

import './CountySelectionList.css';
import ShowCountySelector from '../CountySelector/ShowCountySelector';

let counties = require('./counties.json');

const CountySelectionList = () => {
  return (
    <div className="county-selection-list">
      <h3>Select County</h3>
      <div className="county-list">
        { counties.map(county =>
          <ShowCountySelector key={county} name={county} />
        )}
      </div>
    </div>
  );
};

export default CountySelectionList;
