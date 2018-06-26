import { connect } from 'react-redux';

import GraphContainer from '../GraphContainer/GraphContainer';
import { colors } from '../../Helpers/Colors';
import { CreateDataset } from '../../Helpers/DatasetUtils';

const mapStateToProps = (state, props) => {
  let datasets = [];
  let labels = [];
  if (props.county !== undefined && props.county.name !== undefined) {
    labels = props.county.years.map((d) => {
      return d.year;
    });
    Object.keys(props.dataTypeInfo).forEach((dataType) => {
      let temp = props.dataTypeInfo[dataType];
      if (temp.displayed) {
        datasets.push(
          CreateDataset(temp.label,
            colors[dataType],
            props.county.years,
            (d) => {
              return (d[dataType] === undefined || d[dataType] === 0) ? NaN : d[dataType];
            }
          )
        );
      }
    });
  }
  return {datasets: datasets, labels: labels};
};

const ShowByCountyGraph = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowByCountyGraph;
