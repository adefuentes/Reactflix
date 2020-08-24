import * as types from '../actions/types';
import {takeLatest, take, call, put} from 'redux-saga/effects';
import {ActionModel} from "../actions/types";
import {Credentials} from "../types/auth";
import * as AuthActions from '../actions/auth';
import * as AppActions from '../actions/app';
import {encode} from 'js-base64';

function* handleAuth(action: ActionModel<Credentials>) {
  let {
    user,
    pass
  } = action.data;

  //TODO: Añadir petición acceso a API

  if (!!user && !!pass) {
    let basicToken = encode(`${user}:${pass}`);
    yield put(AuthActions.success({
      token: basicToken
    }));
  } else {
    yield put(AppActions.error({
      message: 'Debe introducir un email y una contraseña válidos'
    }));
  }
}

function* handleAuthSuccess(data: any) {

  //TODO: Tratamiento de datos de usuario

  sessionStorage.setItem('bT', data.token);
  yield put(AppActions.authorize());

}

const root = function* root() {
  yield takeLatest(types.AUTH.REQUEST, handleAuth);

  while (true) {
    const params = yield take(types.AUTH.SUCCESS);
    yield call(handleAuthSuccess, params.data);
  }
};

export default root;
