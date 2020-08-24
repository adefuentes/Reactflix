import {combineReducers} from "redux";
import {AppDefaultState, AppReducers} from "./app";

export interface DefaultState {
  app: AppDefaultState,
}

export default combineReducers({
  app: AppReducers,
});
