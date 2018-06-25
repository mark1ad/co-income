import { connect } from 'react-redux';

import DataTypeSelector from './DataTypeSelector';

const mapStateToProps = (state) => {
  return { dataToDisplay: state.DataToDisplay };
};

const ShowDataTypeSelector = connect(
  mapStateToProps,
  null
) (DataTypeSelector);

export default ShowDataTypeSelector;
