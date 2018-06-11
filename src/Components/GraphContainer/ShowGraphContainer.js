import { connect } from 'react-redux';

import GraphContainer from './GraphContainer';

const mapStateToProps = (state, props) => {
  return {County: props.County};
};

const ShowGraphContainer = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowGraphContainer;
