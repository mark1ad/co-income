import React from 'react';
import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';

const ByCounty = () => {
  return (
    <div className="by-year">
      <h1>By County</h1>
      <div>
        <ShowCountySelectionList />
      </div>
    </div>
  );
};

export default ByCounty;
