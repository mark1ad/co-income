import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';


import ShowCountySelectionList from
  '../CountySelectionList/ShowCountySelectionList';
import GraphContainer from
  '../GraphContainer/GraphContainer';

const ByCounty = () => {
  return (
    <div className="by-county container">
      <Grid>
        <Row className="show-grid">
          <Col xs={4}>
            <ShowCountySelectionList />
          </Col>
          <Col xs={8}>
            <GraphContainer />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default ByCounty;
