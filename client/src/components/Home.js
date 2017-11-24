import React from "react";
//import UserList from "./common/UserList";
import Pipe from './Pipe/Pipe';


// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        Home
        <Pipe/>
      </div>
    );
  }
}