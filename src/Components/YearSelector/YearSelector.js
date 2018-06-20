import React from 'react';

const YearSelector = () => {
  let startYear = 1969;
  let numYears = (new Date().getFullYear()) - startYear + 1;
  let years = [...Array(numYears).keys()].map(i => (i + startYear).toString());
  return (
    <div className="year-selector">
      <select>
        {years.map(year => (<option value={year}>{year}</option>))}
      </select>
    </div>
  )
};

export default YearSelector;
