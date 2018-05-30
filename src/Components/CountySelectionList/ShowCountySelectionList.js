import { connect } from 'react-redux';

import CountySelectionList from './CountySelectionList';

let counties = require('./counties.json');

const ShowCountySelectionList = connect(
  null,
  null
) (CountySelectionList);

export default ShowCountySelectionList;
