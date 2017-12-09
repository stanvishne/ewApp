import { call, put } from "redux-saga/effects";
import {electroActions} from "reducers/electro";
import ApiElectricity from "api/electro";

export const sagaElectrycityActions = {
    ADD_ELECTRO_ITEM: 'ADD_ELECTRO_ITEM',
    DELETE_ELECTRO_ITEM: 'DELETE_ELECTRO_ITEM',
    EDIT_ELECTRO_ITEM:  'EDIT_ELECTRO_ITEM',
    LOAD_ELECTRO_LIST: 'LOAD_ELECTRO_LIST'
}

export function* addElectricityItem(action) {
    const list = action.values.id ? yield call(ApiElectricity.edit, action.values) :
        yield call(ApiElectricity.add, action.values);
    yield put({
        type: electroActions.LIST_LOADED,
        list
      });

      action.callbackSuccess();
}

export function* fetchElectricityList(action) {
    const list = yield call(ApiElectricity.fetchList);
    yield put({
        type: electroActions.LIST_LOADED,
        list
    })
}

export function* deleteElectricityItem(action) {
    const list = yield call(ApiElectricity.deleteItem, action.item);
    yield put({
        type: electroActions.LIST_LOADED,
        list
      });

      
}



