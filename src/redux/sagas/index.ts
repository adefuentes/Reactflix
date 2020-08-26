import {all} from 'redux-saga/effects';
import app from './app';
import auth from './auth';
import movies from './movies';
import myList from './myList';
import content from './content';

const root = function* root() {
  yield all([
    app(),
    auth(),
    movies(),
    myList(),
    content()
  ]);
};

export default root;
