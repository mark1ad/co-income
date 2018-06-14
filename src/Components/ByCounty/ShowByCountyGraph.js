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
  if (props.county !== undefined && props.county.name !== undefined) {
    labels = props.county.years.map((d) => {
      return d.year;
    });
    datasets = [
      CreateDataset('Per-Capita',
        colors[0],
        props.county.years,
        (d) => {
          return d.perCapita;
        }
      ),
      CreateDataset('Median Household',
        colors[1],
        props.county.years,
        (d) => {
          return d.medianHousehold;
        })
    ];
  }
  return {datasets: datasets, labels: labels};
};

const ShowByCountyGraph = connect(
  mapStateToProps,
  null
) (GraphContainer);

export default ShowByCountyGraph;
