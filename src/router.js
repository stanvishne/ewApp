import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import UserEdit from "./components/UserEdit";
import NotFound from "./components/NotFound";
import Water from "./components/Water/Water";
import Electricity from "./components/Electricity/Electricity";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="user-edit(/:id)" component={UserEdit}/>
      <Route path="water" component={Water}/>
      <Route path="electricity" component={Electricity}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
