import React from "react";
import { connect } from "react-redux";

const AddedFeature = props => {
  console.log("this one", props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.name}
    </li>
  );
};

// export default AddedFeature;

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeature);
