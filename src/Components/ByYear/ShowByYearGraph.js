import { connect } from 'react-redux';

import GraphContainer from '../GraphContainer/GraphContainer';
import {colors} from '../../Helpers/Colors';
import { CreateDataset } from '../../Helpers/DatasetUtils';

const mapStateToProps = (state, props) => {
  let datasets = [];
  let labels = [];

  if (props.yeardata !== undefined && props.yeardata.year !== undefined) {
    labels = props.yeardata.incomes.map((d) => {
      return d.county.replace(' County', '');
    });

    Object.keys(props.dataTypeInfo).forEach((dataType) => {
      let temp = props.dataTypeInfo[dataType];
      if (temp.displayed) {
        datasets.push(
          CreateDataset(temp.label,
            colors[dataType],
            props.yeardata.incomes,
            (d) => {
              return (d.income[dataType] === undefined) ? NaN : d.income[dataType];
            }
          )
        );
      }
    });
  }

  return { datasets: datasets, labels: labels };
};

const ShowByYearGraph = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowByYearGraph;
