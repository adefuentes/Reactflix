import {put, takeLatest} from "redux-saga/effects";
import * as types from "../actions/types";
import {ActionModel} from "../actions/types";
import {AxiosResponse} from "axios";
import {MovieListResponse} from "../../api/types/movies";
import {ErrorResponse} from "../../api/types/error";
import TMDBStore from "../../api/core";
import * as AppActions from "../actions/app";
import * as ContentActions from "../actions/content";
import {ContentModel} from "../../api/types/content";

function* handleGetContent({data}: ActionModel<number>) {
  let id = data.toString();
  let response: AxiosResponse<
    ContentModel | ErrorResponse
    > = yield TMDBStore.instance.collection<ContentModel | ErrorResponse>('movie', {
    fn: id
  }).future;

  try {
    let data =  response.data;
    if (response.status !== 200) {
      let _response = data as ErrorResponse;
      yield put(AppActions.error({
        message: _response.status_message
      }));
    } else {
      let _response = data as ContentModel;
      let relatedResponse: AxiosResponse<
        MovieListResponse
      > = yield TMDBStore.instance.collection<ContentModel | ErrorResponse>('movie', {
        fn: `${id}/similar`
      }).future;

      if (relatedResponse.status === 200) {
        let relatedData = relatedResponse.data;
        _response.related_content = relatedData.results;
        yield put(ContentActions.success(_response));
      }

    }
  } catch(e) {
    console.log('CATCH ERROR: '+e);
    yield put(AppActions.error({
      message: e
    }));
  }
}

const root = function* root() {
  yield takeLatest(types.CONTENT.REQUEST, handleGetContent);
};

export default root;
