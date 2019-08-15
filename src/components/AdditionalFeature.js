import React from "react";
import { buyItem } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeature = props => {
  // console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={buyItem} className="button">
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// export default AdditionalFeature;

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);
