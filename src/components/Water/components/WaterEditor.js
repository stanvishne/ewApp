import React from "react";
import { Button } from "react-bootstrap"; 

import { connect } from "react-redux";

// function mapStateToProps(state) {
    
//     return {
//       water: null,
//       // https://github.com/reactjs/react-router-redux#how-do-i-access-router-state-in-a-container-component
//       // react-router-redux wants you to get the url data by passing the props through a million components instead of
//       // reading it directly from the state, which is basically why you store the url data in the state (to have access to it)
//       page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
//     };
// }


//@connect(mapStateToProps)
export default class WaterEditor extends React.Component {
    render() {
        return(
            <div>
                hello
            </div>
        )
    }
}
