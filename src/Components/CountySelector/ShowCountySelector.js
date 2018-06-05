import { connect } from "react-redux";

import CountySelector from './CountySelector';

const mapStateToProps = (state, props) => {
  return { name: props.name };
}

const mapDispatchToProps = (dispatch) => {
  let submit = (county) => {
    console.log("ShowCountySelector submit ", county);

  };
  return {submit: submit};
};

const ShowCountySelector = connect(
  mapStateToProps,
  mapDispatchToProps
) (CountySelector);

export default ShowCountySelector;
