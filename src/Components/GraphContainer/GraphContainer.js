import React from 'react';
import {Bar} from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

import './GraphContainer.css';

let data = {};

let options = {
  maintainAspectRatio: false,
  redraw: true
};

const GraphContainer = (props) => {
  data.labels = props.labels;
  data.datasets = [props.dataset];

  return (
    <div className='graph-container'>
      <Bar data={data} options={options} />
    </div>
  );
};

GraphContainer.propTypes = {
  dataset: PropTypes.object.isRequired,
  labels: PropTypes.array.isRequired
};

export default GraphContainer;
