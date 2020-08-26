import * as types from "./types";
import {ActionModel} from "./types";

export function add(data: number): ActionModel<number> {
  return {
    type: types.MY_LIST.ADD,
    data
  };
}

export function remove(data: number): ActionModel<number> {
  return {
    type: types.MY_LIST.REMOVE,
    data
  };
}

export function set(data: Array<number>): ActionModel<number[]> {
  return {
    type: types.MY_LIST.SET,
    data
  };
}
