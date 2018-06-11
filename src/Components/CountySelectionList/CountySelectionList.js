import React from 'react';

import ShowCountySelector from '../CountySelector/ShowCountySelector';

let counties = require('./counties.json');

const CountySelectionList = () => {
  return (
    <div className="county-selection-list">
      { counties.map(county =>
        <ShowCountySelector key={county} name={county} />
      )}
    </div>
  );
};

export default CountySelectionList;
