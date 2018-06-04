import React from 'react';

import CountySelector from '../CountySelector/CountySelector';

let counties = require('./counties.json');

const CountySelectionList = () => {
  return (
    <div className="county-selection-list">
      { counties.map(county =>
        <CountySelector key={county} name={county} />
      )}
    </div>
  );
};

export default CountySelectionList;
