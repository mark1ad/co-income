import { connect } from 'react-redux';

import GraphContainer from '../GraphContainer/GraphContainer';

let colors = [
  'rgb(0, 0, 155)',
  'rgb(200, 50, 50)',
];

function CreateDataset(label, color, years, getData) {
  let dataset = {
    fill: false,
    spanGaps: true,
    lineTension: 0,
    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
    pointHoverBorderWidth: 2,
    backgroundColor: color,
    borderColor: color,
    label: label,
    data: []
  };
  dataset.data = years.map( getData);
  return dataset;
}

const mapStateToProps = (state, props) => {
  let datasets = [];
  let labels = [];

  if (props.yeardata !== undefined && props.yeardata.year !== undefined) {
    labels = props.yeardata.incomes.map((d) => {
      return d.county.replace(' County', '');
    });

    datasets = [
      CreateDataset('Per-Capita',
        colors[0],
        props.yeardata.incomes,
        (d) => {
          return d.income.perCapita;
        }
      )
    ];
  }

  return { datasets: datasets, labels: labels };
};

const ShowByYearGraph = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowByYearGraph;
