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

  callAllFunctions = props => {
    // console.log("TEST", test);
    props.changeConnectedValue(1);
    props.changeStrengthValue(Math.round(Math.random() * 5));
    // console.log("STRENGTHVALUE", this.props.strengthValue);
  };

  renderButton() {
    return (
      <div>
        {/* <img src={Image}></img> */}
        <button
          className="ui button"
          onClick={() => this.callAllFunctions(this.props)}
        >
          Turn On Phone
        </button>
        <button
          className="ui button"
          onClick={() => this.props.changeConnectedValue(0)}
        >
          Turn Off Phone
        </button>
        <br />
        <br />
        <hr />
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
