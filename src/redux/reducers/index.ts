import {combineReducers} from "redux";
import {AppDefaultState, AppReducers} from "./app";
import {MoviesDefaultState, MoviesReducers} from "./movies";
import {MyListDefaultState, MyListReducers} from "./myList";
import {ContentDefaultState, ContentReducers} from "./content";

export interface DefaultState {
  app: AppDefaultState,
  movies: MoviesDefaultState,
  myList: MyListDefaultState,
  content: ContentDefaultState
}

export default combineReducers({
  app: AppReducers,
  movies: MoviesReducers,
  myList: MyListReducers,
  content: ContentReducers
});
