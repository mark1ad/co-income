import { connect } from 'react-redux';

import MyCheckbox from './MyCheckbox';
import { addDataToDisplay, removeDataToDisplay }
  from '../../Actions/DataToDisplayActions';

const mapStateToProps = (state, props) => {
  return {
    label: props.dataTypeInfo.label,
    dataType: props.dataType,
    displayed: props.dataTypeInfo.displayed
  };
};

const mapDispatchToProps = (dispatch) => {
  const onChange = (dataType, displayed) => {
    if (displayed) {
      dispatch(addDataToDisplay(dataType));
    } else {
      dispatch(removeDataToDisplay(dataType));
    }
  };

  return { onChange: onChange };
};

const ShowMyCheckbox = connect(
  mapStateToProps,
  mapDispatchToProps
) (MyCheckbox);

export default ShowMyCheckbox;
