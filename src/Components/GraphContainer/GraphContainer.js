import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { PropTypes } from 'prop-types';

import './GraphContainer.css';

class GraphContainer extends Component {
  constructor() {
    super();
    this.data = {};
    this.options = {
      maintainAspectRatio: false,
      redraw: true
    };
  }

  render () {
    this.data.labels = this.props.labels;
    this.data.datasets = this.props.datasets;

    return (
      <div className='graph-container'>
        <Line data={this.data} options={this.options} />
      </div>
    );
  }
}

GraphContainer.propTypes = {
  datasets: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired
};

export default GraphContainer;
