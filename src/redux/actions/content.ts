import {ActionModel} from "./types";
import * as types from "./types";
import {ContentModel} from "../../api/types/content";

export function request(data: string): ActionModel<string> {
  return {
    type: types.CONTENT.REQUEST,
    data
  }
}

export function success(data: ContentModel): ActionModel<ContentModel> {
  return {
    type: types.CONTENT.SUCCESS,
    data
  };
}

export function reset(): ActionModel<null> {
  return {
    type: types.CONTENT.RESET,
    data: null
  };
}
