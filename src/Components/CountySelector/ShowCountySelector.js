import { connect } from 'react-redux';

import CountySelector from './CountySelector';
import { GetCountyData } from '../../Helpers/COIncomeData';

const mapStateToProps = (state, props) => {
  return { name: props.name };
};

const mapDispatchToProps = (dispatch) => {
  const submit = (county) => {
    GetCountyData(county, dispatch);
  };
  return {submit: submit};
};

const ShowCountySelector = connect(
  mapStateToProps,
  mapDispatchToProps
) (CountySelector);

export default ShowCountySelector;
