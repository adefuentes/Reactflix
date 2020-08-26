import {ActionModel} from "./types";
import * as types from "./types";
import {MovieInListType, MovieListResponse} from "../../api/types/movies";

export function getList(): ActionModel<null> {
  return {
    type: types.MOVIES.REQUEST,
    data: null
  };
}

export function success(data: MovieListResponse): ActionModel<MovieListResponse> {
  return {
    type: types.MOVIES.SUCCESS,
    data
  };
}

export function setList(data: Array<MovieInListType>): ActionModel<MovieInListType[]> {
  return {
    type: types.MOVIES.SET_LIST,
    data
  }
}
