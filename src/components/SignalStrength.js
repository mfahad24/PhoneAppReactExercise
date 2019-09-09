import React, { Component } from "react";
import { connect } from "react-redux";
import OffImage from "../images/Off.png";
import ZeroImage from "../images/0.png";
import OneImage from "../images/1.png";
import TwoImage from "../images/2.png";
import ThreeImage from "../images/3.png";
import FourImage from "../images/4.png";
import FiveImage from "../images/5.png";
import "./Phone.css";
import { changeStrengthValue } from "../actions";

class SignalStrength extends Component {
  selectSignalStrengthImage() {
    const allImages = [
      ZeroImage,
      OneImage,
      TwoImage,
      ThreeImage,
      FourImage,
      FiveImage
    ];

    if (this.props.connectedValue === 0) {
      //   console.log("HELLO");
      return <img className="strengthimage" src={OffImage} alt="off"></img>;
    } else {
      //   this.props.changeStrengthValue(Math.round(Math.random() * 5));
      return (
        <img
          className="strengthimage"
          src={allImages[this.props.signalStrength]}
          alt="0"
        ></img>
      );
    }
  }

  render() {
    console.log("STRENGTHVALUE IN SIGNALSTRENGTH", this.props.signalStrength);
    return <div>{this.selectSignalStrengthImage()}</div>;
  }

  //   componentDidUpdate() {

  //  console.log("STRENGTHVALUE", this.props.signalStrength);

  //   }
}

const mapStateToProps = state => {
  return {
    connectedValue: state.connectedValue,
    signalStrength: state.signalStrength
  };
};

export default connect(
  mapStateToProps,
  {
    changeStrengthValue
  }
)(SignalStrength);
