import React, { Component } from "react";
import { connect } from "react-redux";
import { changeConnectedValue } from "../actions";
import "./Phone.css";
// import Image from "../images/phoneimage.jfif";

class Phone extends Component {
  renderButton() {
    return (
      <div>
        {/* <img src={Image}></img> */}
        <button
          className="ui button"
          onClick={() => this.props.changeConnectedValue(1)}
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
    return <div className="buttondiv">{this.renderButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { connectedValue: state.connectedValue };
};

export default connect(
  mapStateToProps,
  {
    changeConnectedValue
  }
)(Phone);
