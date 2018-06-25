import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './MyCheckbox.css';

class MyCheckbox extends Component {
  constructor(props) {
    super();

    this.displayed = props.displayed;

    this.submit = () => {
      props.onChange(props.dataType, !this.displayed);
    };
  }

  render() {
    this.displayed = this.props.displayed;
    let checked = this.props.displayed ? 'checked' : '';

    return (
      <div className="my-checkbox">
        {this.props.label}
        <input type="checkbox" onChange={this.submit} checked={checked} />
      </div>
    );
  }
}

MyCheckbox.propTypes = {
  dataType: PropTypes.string.isRequired,
  displayed: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MyCheckbox;
