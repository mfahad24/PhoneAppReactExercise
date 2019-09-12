import { takeEvery, put } from "redux-saga/effects";
import {
  CHANGE_CONNECTED_VALUE,
  CHANGE_MQTTBOOL_VALUE,
  CHANGE_MQTTBOOL_VALUE_ASYNC,
  CHANGE_CONNECTED_VALUE_ASYNC
} from "../constants";
// import { delay } from "redux-saga";

//sagas that watch and act upon mqttBolean change
export function* watchMqttClientBooleanChange() {
  yield takeEvery(CHANGE_MQTTBOOL_VALUE, changeMqttBoolean);
}

export function* changeMqttBoolean() {
  yield put({ type: CHANGE_MQTTBOOL_VALUE_ASYNC, payload: true });
}

//sagas that watch and act upon phone connection and strength value change
export function* watchConnectedValueChange() {
  yield takeEvery(CHANGE_CONNECTED_VALUE, changeConnectedValue);
}

export function* changeConnectedValue() {
  yield put({ type: CHANGE_CONNECTED_VALUE_ASYNC, payload: 1 });
}
