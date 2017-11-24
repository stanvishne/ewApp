import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";
import Water from "./components/Water/Water";
import Electricity from "./components/Electricity/Electricity";
import Auth from "./components/Auth/Auth";

function checkAuth(nextState, replace, store) {
  const state = store.getState();
  const auth = process.env.NODE_ENV === 'production';
  
  if (!state.login && auth) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

// build the router
const router = (store) => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute  component={Home} onEnter={(nextState, replace) => checkAuth(nextState, replace,store)}/>
      <Route path="user-edit(/:id)" component={UserEdit}/>
      <Route path="water" component={Water} onEnter={(nextState, replace) => checkAuth(nextState, replace,store)} />
      <Route path="electricity" component={Electricity} onEnter={(nextState, replace) => checkAuth(nextState, replace,store)}/>
      <Route path="auth" component={Auth}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
