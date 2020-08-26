import {MOVIES} from "../actions/types";
import {MovieInListType} from "../../api/types/movies";
import {ActionModel} from "../actions/types";

export class MoviesDefaultState {
  fetched: boolean = false;
  isFetching: boolean = false;
  movies: Array<MovieInListType> = [];

}

export function MoviesReducers(state = new MoviesDefaultState(), action: ActionModel<any>) {

  switch (action.type) {
    case MOVIES.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case MOVIES.SET_LIST:
      return {
        ...state,
        fetched: true,
        isFetching: false,
        movies: action.data
      };
    default:
      return state;
  }

}
