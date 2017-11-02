import { call, put } from "redux-saga/effects";
import ApiAuth from 'api/auth';

export const loginSagaActions = {
    LOGIN: "LOGIN"
}

export function* login(action) {
    
    const login = yield call(ApiAuth.login, action.values);
  
    // save the users in state
    yield put({
      type: 'LOGGEDIN',
      loggedin: login.logged,
    });
    if (login.logged) {
        action.callbackSuccess();
    } else {
        action.callbackError('wrong username or password');
    }
  }