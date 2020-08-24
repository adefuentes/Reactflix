import {APP} from "../actions/types";

export type ErrorHandler = {
  error: boolean;
  message: string;
}

export class AppDefaultState {
  ready: boolean = false;
  authorized: boolean = false;
  errorHandler?: ErrorHandler;
}

export function AppReducers(state = new AppDefaultState(), action: any) {
  switch (action.type) {
    case APP.START:
      return {
        ...state
      };
    case APP.READY:
      return {
        ...state,
        ready: true,
      };
    case APP.AUTHORIZED:
      return {
        ...state,
        authorized: true
      };
    case APP.UNAUTHORIZED:
      return {
        ...state,
        authorized: false
      };
    case APP.ERROR:
      return {
        ...state,
        errorHandler: {
          error: true,
          message: action.data.message
        }
      };
    default:
      return state;
  }
}
