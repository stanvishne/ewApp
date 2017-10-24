import { call, put } from "redux-saga/effects";
import ApiWater from "api/water";
import {waterActions} from "reducers/waterConstants";

export function* addWater(action) {
    // call the api to add/edit the user
  yield call(ApiWater.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the user
  yield put({
    type: waterActions.WATER_ADD,
    values: action.values,
  });

  // success
  action.callbackSuccess();
}

export function* deleteWaterItem(action) {
  //yield call(ApiWater.itemDelete);

  yield put({
    type: waterActions.WATER_ITEM_DELETE,
    item: action.item,
  });
  //action.callbackSuccess();
}

export function* loadWaterList(action) {
  const list = yield call(ApiWater.fetchList);
  console.log(list);
    // save the users in state
    yield put({
      type: waterActions.WATER_LIST_LOADED,
      list,
    });
}