import React, { Component } from "react";
import { connect } from "react-redux";
import OffImage from "../images/Off.png";
import ZeroImage from "../images/0.png";
import "./Phone.css";

class SignalStrength extends React.Component {
  selectSignalStrengthImage() {
    if (this.props.connectedValue === 0) {
      //   console.log("HELLO");
      return <img className="strengthimage" src={OffImage}></img>;
    } else {
      return <img className="strengthimage" src={ZeroImage}></img>;
    }
  }

  render() {
    return <div>{this.selectSignalStrengthImage()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    connectedValue: state.connectedValue
  };
};

export default connect(mapStateToProps)(SignalStrength);
