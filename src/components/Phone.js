import React, { Component } from "react";
import { connect } from "react-redux";
import { changeConnectedValue, changeStrengthValue } from "../actions";
import "./Phone.css";
// import Image from "../images/phoneimage.jfif";

class Phone extends Component {
  //   randomizeStrengthValue = () => {
  //     // console.log("HELLO");
  //     // console.log(this.props);
  //     this.props.changeStrengthValue(1);
  //   };
  // turnPhoneOff = props => {
  //   props.turnPhoneOn();
  //   props.changeStrength();
  // }
  turnPhoneOn = props => {
    props.changeConnectedValue(1);
    props.changeStrengthValue(null);
    console.log("CONNECTED?", this.props.connectedValue);
    console.log("STRENGTH?", this.props.signalStrength);
  };

  turnPhoneOff = props => {
    console.log(props);
    props.changeConnectedValue(0);
    props.changeStrengthValue(null);
  };

  changeStrength = props => {
    // console.log("TEST", test);
    // props.changeConnectedValue(1);
    setInterval(function() {
      props.changeStrengthValue(Math.round(Math.random() * 5));
    }, 1500);
    // console.log("STRENGTHVALUE", this.props.strengthValue);
  };

  renderButton() {
    return (
      <div className="buttondiv">
        {/* <img src={Image}></img> */}
        <button
          className="ui button blue"
          disabled={this.props.connectedValue === 1}
          onClick={() => this.turnPhoneOn(this.props)}
        >
          Turn On Phone
        </button>
        <button
          className="ui button blue"
          disabled={this.props.connectedValue === 0}
          onClick={() => this.changeStrength(this.props)}
        >
          Disable Airplane Mode
        </button>
        <button
          className="ui button blue"
          disabled={this.props.connectedValue === 0}
          onClick={() => this.turnPhoneOff(this.props)}
        >
          Turn Off Phone
        </button>
        <br />
        <br />
        {/* <hr /> */}
      </div>
    );
  }

  render() {
    console.log("CONNECTEDVALUE", this.props.connectedValue);
    console.log("STRENGTHVALUE", this.props.signalStrength);
    return <div className="buttondiv">{this.renderButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    connectedValue: state.connectedValue,
    signalStrength: state.signalStrength
  };
};

export default connect(
  //SO WHY DO I NEED TO STILL USE 'mapStateToProps' ABOVE??????
  //ANSWER: DONT NEED TO RETURN ANYTHING, I AM USING TO CONSOLE.LOG LINE #36 SO NEED STATE TO BE MAPPED TO PROPS... however it needs to return at least an empty object... try removing everythign in mapstate to props method above
  mapStateToProps,
  {
    changeConnectedValue,
    changeStrengthValue
  }
)(Phone);
