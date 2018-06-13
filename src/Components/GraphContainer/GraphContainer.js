import React from 'react';
import {Bar} from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

import './GraphContainer.css';

let data = {
  datasets: [{
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
  }],
};

let options = {
  maintainAspectRatio: false,
  redraw: true
};

const GraphContainer = (props) => {
  if (props.county === undefined || props.county.county === undefined ) {
    data.datasets[0].label = 'None';
  }
  else {
    data.datasets[0].label = props.county.county;
    data.labels = props.county.years.map((d) => {
      return d.year;
    });

    data.datasets[0].data = props.county.years.map((d) => {
      return d.perCapita;
    });
  }

  return (
    <div className='graph-container'>
      <Bar data={data} options={options} />
    </div>
  );
};

GraphContainer.propTypes = {
  county: PropTypes.object.isRequired
};

export default GraphContainer;
