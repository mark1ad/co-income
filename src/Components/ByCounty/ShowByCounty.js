import { connect } from 'react-redux';

import ByCounty from './ByCounty';

const mapStateToProps = (state) => {
  return {County: state.County};
};

const ShowByCounty = connect(
  mapStateToProps,
  null
) (ByCounty);

export default ShowByCounty;
