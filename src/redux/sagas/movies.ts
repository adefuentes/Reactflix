import {put, call, take, takeLatest} from "redux-saga/effects";
import * as types from "../actions/types";
import {MovieListResponse} from "../../api/types/movies";
import TMDBStore from "../../api/core";
import {ErrorResponse} from "../../api/types/error";
import * as MoviesActions from '../actions/movies';
import * as AppActions from '../actions/app';
import {AxiosResponse} from "axios";

function* handleGetList() {

  let response: AxiosResponse<
    MovieListResponse | ErrorResponse
  > = yield TMDBStore.instance.collection<MovieListResponse | ErrorResponse>('discover', {
    fn: 'movie'
  }).future;

  try {
    let data =  response.data;
    if (response.status !== 200) {
      let _response = data as ErrorResponse;
      yield put(AppActions.error({
        message: _response.status_message
      }));
    } else {
      let _response = data as MovieListResponse;
      yield put(MoviesActions.success(_response));
    }
  } catch(e) {
    console.log('CATCH ERROR: '+e);
    yield put(AppActions.error({
      message: e
    }));
  }
}

function* handleSuccess(data: MovieListResponse) {
  //TODO: Guardar en local para tener los datos precargados
  yield put(MoviesActions.setList(data.results));
}

const root = function* root() {
  yield takeLatest(types.MOVIES.REQUEST, handleGetList);

  while (true) {
    const params = yield take(types.MOVIES.SUCCESS);
    yield call(handleSuccess, params.data);
  }
};

export default root;
