import { combineReducers } from "redux";
import {
  CHANGE_CONNECTED_VALUE,
  CHANGE_SIGNAL_STRENGTH,
  CHANGE_MQTTBOOL_VALUE
} from "../constants";

// const appPhone = () => {
//   return [
//     {
//       signalStrengh: null,
//       connected: null
//     }
//   ];
// };

const signalStrength = (signalStrength = null, action) => {
  if (action.type === CHANGE_SIGNAL_STRENGTH) {
    // console.log("CHANGE SIGNAL");
    return action.payload;
  } else {
    // console.log("RETURN ORIGINAL");
    return signalStrength;
  }
};

const connectedValue = (connectVal = 0, action) => {
  if (action.type === CHANGE_CONNECTED_VALUE) {
    // console.log("HELLO");
    return action.payload;
  } else {
    // console.log("HI");
    return connectVal;
  }
};

const mqttClientBoolean = (clientBoolean = false, action) => {
  if (action.type === CHANGE_MQTTBOOL_VALUE) {
    return action.payload;
  } else {
    return clientBoolean;
  }
};

export default combineReducers({
  //   appPhone: appPhone,
  signalStrength: signalStrength,
  connectedValue: connectedValue,
  mqttClientBoolean: mqttClientBoolean
});
