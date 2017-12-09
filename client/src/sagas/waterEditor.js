import { call, put } from "redux-saga/effects";
import ApiWater from "api/water";
import {waterActions} from "reducers/waterConstants";

export function* addWater(action) {
    // call the api to add/edit the user

  const list = action.values.id ? yield call(ApiWater.edit, action.values)
    : yield call(ApiWater.add, action.values);;
  //return action.callbackError("Some error");   // show an error when the API fails

  yield put({
    type: waterActions.WATER_LIST_LOADED,
    list
  });

  // success
  action.callbackSuccess();
}

export function* deleteWaterItem(action) {
  //yield call(ApiWater.itemDelete);

  const list = yield call(ApiWater.deleteItem, action.item);
  //return action.callbackError("Some error");   // show an error when the API fails

  yield put({
    type: waterActions.WATER_LIST_LOADED,
    list
  });
}

export function* loadWaterList(action) {
  const list = yield call(ApiWater.fetchList);
  
    // save the users in state
    yield put({
      type: waterActions.WATER_LIST_LOADED,
      list,
    });
}