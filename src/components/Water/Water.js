import React from "react";
import { Button } from "react-bootstrap"; 
import { connect } from "react-redux";

import  { modalContentMapper } from "common/modalMapper.js";

function mapStateToProps(state) {
    
    return {
      water: null
    };
}

function test() {
    console.log('gfgfg');
}

//@connect(mapStateToProps)
class Water extends React.Component {
    render() {
        return(
            <div>
                <Button onClick={()=>this.add()}>Add</Button>
            </div>
        )
    }

    add() {
        this.props.dispatch({
            type: 'SHOW_MODAL',
            data: {
                content: modalContentMapper.WATER_EDITOR,
                okButtonAction: () => this.saveData()
            }
        })
    }

    saveData() {
        alert('hhg');
    }
}

export default connect(mapStateToProps)(Water);