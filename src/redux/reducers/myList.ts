import {ActionModel, MY_LIST} from "../actions/types";

export class MyListDefaultState {
  myList: Array<number> = []
  constructor() {
    let myList = localStorage.getItem('mL');
    if (!!myList) {
      this.myList = JSON.parse(myList);
    }
  }
}

export function MyListReducers(state = new MyListDefaultState(), action: ActionModel<number[]>) {
  switch (action.type) {
    case MY_LIST.SET:
      return {
        myList: action.data
      };
    default:
      return state;
  }
}
