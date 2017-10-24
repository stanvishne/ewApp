import React from "react";
import { Button } from "react-bootstrap"; 
import { connect } from "react-redux";

import  { modalContentMapper } from "common/modalMapper.js";
import WaterList from './components/WaterList';
import {sagaWaterActions} from 'sagas/sagaWaterConstants';

function mapStateToProps(state) {
    
    return {
      water: null
    };
}

function test() {
    console.log('gfgfg');
}

@connect(mapStateToProps)
export default class Water extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: sagaWaterActions.LOAD_WATER_LIST
        })
    }
    render() {
        return(
            <div>
                <Button onClick={()=>this.add()}>Add</Button>
                <WaterList/>
            </div>
        )
    }

    add() {
        this.props.dispatch({
            type: 'SHOW_MODAL',
            data: {
                content: modalContentMapper.WATER_EDITOR
            }
        })
    }
}