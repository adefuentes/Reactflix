import {put, takeLatest} from "redux-saga/effects";
import * as AppActions from '../actions/app';
import * as types from "../actions/types";
import {decode} from "js-base64";

function* handleStart() {
  let token = sessionStorage.getItem('bT');

  if (!!token) {
    let decodedToken = decode(token);
    let result = decodedToken.split(':');
    if (result.length === 2) {
      yield put(AppActions.authorize());
      return;
    }
  }

  yield put(AppActions.unauthorized());
}

const root = function* root() {
  yield takeLatest(types.APP.START, handleStart);
};

export default root;
