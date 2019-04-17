import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function Cats(state = initialState.cats, action) {
  switch (action.type) {
    case types.LOAD_Cats_SUCCESS:
      return action.cats;

    default:
      return state;
  }
}
