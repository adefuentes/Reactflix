import {ActionModel, CONTENT} from "../actions/types";
import {ContentModel} from "../../api/types/content";

export class ContentDefaultState {
  fetched: boolean = false;
  isFetching: boolean = false;
  movie?: ContentModel;

}

export function ContentReducers(state = new ContentDefaultState(), action: ActionModel<ContentModel>) {

  switch (action.type) {
    case CONTENT.REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case CONTENT.SUCCESS:
      return {
        ...state,
        fetched: true,
        isFetching: false,
        movie: action.data
      };
    case CONTENT.RESET:
      return new ContentDefaultState();
    default:
      return state;
  }

}
