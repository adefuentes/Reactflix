import * as types from "./types";
import {ActionModel} from "./types";

export function start(): ActionModel<null> {
  return {
    type: types.APP.START,
    data: null
  };
}

export function authorize(): ActionModel<null> {
  return {
    type: types.APP.AUTHORIZED,
    data: null
  };
}

export function unauthorized(): ActionModel<null> {
  return {
    type: types.APP.UNAUTHORIZED,
    data: null
  };
}

export function error(err: {message: string}):ActionModel<{message:string}>  {
  return {
    type: types.APP.ERROR,
    data: err,
  };
}
