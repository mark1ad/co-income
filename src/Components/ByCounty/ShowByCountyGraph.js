import { connect } from 'react-redux';

import GraphContainer from '../GraphContainer/GraphContainer';

const mapStateToProps = (state, props) => {
  let dataset = {
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    label: 'None',
    data: []
  };
  let labels = [];
  if (props.county !== undefined && props.county.name !== undefined) {
    dataset.label = props.county.name;
    labels = props.county.years.map((d) => {
      return d.year;
    });
    dataset.data = props.county.years.map((d) => {
      return d.perCapita;
    });
  }
  return {dataset: dataset, labels: labels};
};

const ShowByCountyGraph = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowByCountyGraph;
