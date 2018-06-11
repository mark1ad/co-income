import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';


import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import ShowGraphContainer from
  '../GraphContainer/ShowGraphContainer';

const ByCounty = (props) => {
  return (
    <div className="by-county container">
      <Grid>
        <Row className="show-grid">
          <Col xs={4}>
            <ShowCountySelectionList />
          </Col>
          <Col xs={8}>
            <ShowGraphContainer county={props.County} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

ByCounty.propTypes = {
  County: PropTypes.object.isRequired
};

export default ByCounty;
