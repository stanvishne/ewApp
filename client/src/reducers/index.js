import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import modal from './modal';
import users from "./users";
import water from "./water";
import waterEditor from "./waterEditor";
import login from './login';
import electro from './electro';

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    "user_edit": (state, action) => {
      // reset form (wipe state) when navigating away from the User edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  }),
  users: users,
  water: water,
  electro: electro,
  login: login,
  waterEditor: waterEditor,
  modal: modal
});
