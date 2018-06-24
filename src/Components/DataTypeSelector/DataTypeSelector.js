import React from 'react';
import { PropTypes } from 'prop-types';

import ShowMyCheckbox from '../MyCheckbox/ShowMyCheckbox';

const DataTypeSelector = ({dataToDisplay}) => {
  let checkboxs = dataToDisplay === undefined ? {} : dataToDisplay;
  return (
    <div className='data-type-selector'>
      {Object.keys(checkboxs).map((d) => {
        return (<ShowMyCheckbox key={d} dataTypeInfo={checkboxs[d]} />);
      })}
    </div>
  );
};

DataTypeSelector.propTypes = {
  dataToDisplay: PropTypes.object.isRequired
};

export default DataTypeSelector;
