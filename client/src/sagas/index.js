import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";
import {addWater, deleteWaterItem, loadWaterList} from "./waterEditor";
import {sagaWaterActions} from './sagaWaterConstants';
// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, sagaWaterActions.WATER_EDITOR_ADD, addWater),
    fork(takeLatest, sagaWaterActions.DELETE_WATER_ITEM, deleteWaterItem),
    fork(takeLatest, sagaWaterActions.LOAD_WATER_LIST, loadWaterList)    
  ];
}
