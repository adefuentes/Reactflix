import {put, takeLatest} from "redux-saga/effects";
import * as types from "../actions/types";
import * as MyListActions from '../actions/myList';
import {ActionModel} from "../actions/types";

function* handleAdd({data}: ActionModel<number>) {
  try {
    let myList = localStorage.getItem('mL');
    let newList: Array<number> = [];
    if (!!myList) {
      let parsedMyList = JSON.parse(myList);
      newList = [
        ...parsedMyList,
        data
      ];
    } else {
      newList.push(data);
    }
    localStorage.setItem('mL', JSON.stringify(newList));
    yield put(MyListActions.set(newList));
  } catch(e) {
    console.log('CATCH: '+e);
  }
}

function* handleRemove({data}: ActionModel<number>) {
  try {
    let myList = localStorage.getItem('mL');
    if (!!myList) {
      let parsedMyList: Array<number> = JSON.parse(myList);
      let newList: Array<number> = [];
      parsedMyList.forEach((content) => {
        if(content !== data) {
          newList.push(content);
        }
      });
      localStorage.setItem('mL', JSON.stringify(newList));
      yield put(MyListActions.set(newList));
    }
  } catch(e) {
    console.log('CATCH: '+e);
  }
}

const root = function* root() {
  yield takeLatest(types.MY_LIST.ADD, handleAdd);
  yield takeLatest(types.MY_LIST.REMOVE, handleRemove);
};

export default root;
