import * as types from './types';
import {Credentials} from "../types/auth";
import {ActionModel} from "./types";

export function request(credentials: Credentials): ActionModel<Credentials> {
  return {
    type: types.AUTH.REQUEST,
    data: credentials
  }
}

export function success(auth: any): ActionModel<{token: string}> {
  return {
    type: types.AUTH.SUCCESS,
    data: auth
  };
}
