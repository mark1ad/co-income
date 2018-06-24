import { connect } from 'react-redux';

import MyCheckbox from './MyCheckbox';

const mapStateToProps = (state, props) => {
  return {label: props.dataTypeInfo.label};
};

const ShowMyCheckbox = connect(
  mapStateToProps,
  null
) (MyCheckbox);

export default ShowMyCheckbox;
