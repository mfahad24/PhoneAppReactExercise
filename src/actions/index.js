import { CHANGE_CONNECTED_VALUE, CHANGE_SIGNAL_STRENGTH } from "../constants";

export const changeStrengthValue = strengthVal => {
  //   console.log("STRENGTH ACTION");
  return {
    type: CHANGE_SIGNAL_STRENGTH,
    payload: strengthVal
  };
};

export const changeConnectedValue = connectVal => {
  return {
    type: CHANGE_CONNECTED_VALUE,
    payload: connectVal
  };
};
