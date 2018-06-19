import { connect } from 'react-redux';

import ByYear from './ByYear';

const mapStateToProps = (state) => {
  return {YearData: state.YearData};
};

const ShowByYear = connect(
  mapStateToProps,
  null
) (ByYear);

export default ShowByYear;
