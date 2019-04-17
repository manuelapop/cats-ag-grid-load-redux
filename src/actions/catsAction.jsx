import CatsApi from "../api/catsApi";
import * as types from "./actionTypes";

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_Cats_SUCCESS, cats };
}

export function loadCats() {
  return function(dispatch) {
    return CatsApi.getcats()
      .then(cats => {
        dispatch(loadCatsSuccess(cats));
      })
      .catch(error => {
        throw error;
      });
  };
}
