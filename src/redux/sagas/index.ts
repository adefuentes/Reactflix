import {all} from 'redux-saga/effects';
import app from './app';
import auth from './auth';

const root = function* root() {
  yield all([
    app(),
    auth()
  ]);
};

export default root;
