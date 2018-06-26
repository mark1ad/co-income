import { connect } from 'react-redux';

import ByCounty from './ByCounty';
import { GetCountyData } from '../../Helpers/COIncomeData';

const mapStateToProps = (state) => {
  return {
    County: state.County,
    dataTypeInfo: state.DataToDisplay
  };
};

const mapDispatchToProps = (dispatch) => {
  let getDefaultCounty = () => {
    GetCountyData('Adams', dispatch);
  };

  return {getDefaultCounty: getDefaultCounty};
};

const ShowByCounty = connect(
  mapStateToProps,
  mapDispatchToProps
) (ByCounty);

export default ShowByCounty;
