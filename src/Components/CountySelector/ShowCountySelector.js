import { connect } from 'react-redux';

import CountySelector from './CountySelector';
import { setCounty } from '../../Actions/CountyActions';

const mapStateToProps = (state, props) => {
  return { name: props.name };
};

const mapDispatchToProps = (dispatch) => {
  let submit = (county) => {
    dispatch(setCounty(county));
  };
  return {submit: submit};
};

const ShowCountySelector = connect(
  mapStateToProps,
  mapDispatchToProps
) (CountySelector);

export default ShowCountySelector;
