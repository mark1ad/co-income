import { connect } from 'react-redux';

import YearSelector from './YearSelector';
import { getYearData } from '../../Helpers/COIncomeData';

const mapStateToProps = (state) => {
  let year = (state.YearData.year === undefined) ? '' : state.YearData.year;
  return {year: year};
};

const mapDispatchToProps = (dispatch) => {
  const onDateChange = (date) => {
    getYearData(date, dispatch);
  };

  return {onDateChange: onDateChange};
};

const ShowYearSelector = connect(
  mapStateToProps,
  mapDispatchToProps
) (YearSelector);

export default ShowYearSelector;
