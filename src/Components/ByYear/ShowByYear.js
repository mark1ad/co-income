import { connect } from 'react-redux';

import ByYear from './ByYear';
import { getYearData } from '../../Helpers/COIncomeData';

const mapStateToProps = (state) => {
  return {YearData: state.YearData};
};

const mapDispatchToProps = (dispatch) => {
  let getDefaultYearData = () => {
    getYearData('2016', dispatch);
  };

  return {getDefaultYearData: getDefaultYearData};
};

const ShowByYear = connect(
  mapStateToProps,
  mapDispatchToProps
) (ByYear);

export default ShowByYear;
