import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, usersAddEdit, usersDelete } from "./users";
import {addWater, deleteWaterItem, loadWaterList} from "./waterEditor";
import {sagaWaterActions} from './sagaWaterConstants';
import {loginSagaActions, login} from './login'; 
import {sagaElectrycityActions, addElectricityItem, fetchElectricityList, deleteElectricityItem} from './electricity';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeLatest, 'USERS_ADD_EDIT', usersAddEdit),
    fork(takeLatest, 'USERS_DELETE', usersDelete),
    fork(takeLatest, sagaWaterActions.WATER_EDITOR_ADD, addWater),
    fork(takeLatest, sagaWaterActions.DELETE_WATER_ITEM, deleteWaterItem),
    fork(takeLatest, sagaWaterActions.LOAD_WATER_LIST, loadWaterList),
    fork(takeLatest, loginSagaActions.LOGIN, login),
    fork(takeLatest, sagaElectrycityActions.ADD_ELECTRO_ITEM, addElectricityItem),    
    fork(takeLatest, sagaElectrycityActions.LOAD_ELECTRO_LIST, fetchElectricityList),
    fork(takeLatest, sagaElectrycityActions.DELETE_ELECTRO_ITEM, deleteElectricityItem)        
  ];
}
