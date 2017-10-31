import React from "react";
import { Button } from "react-bootstrap"; 
import { connect } from "react-redux";

import  { modalContentMapper } from "common/modalMapper.js";
import WaterList from './components/WaterList';
import {sagaWaterActions} from 'sagas/sagaWaterConstants';
import {waterActions} from 'reducers/waterConstants';

function mapStateToProps(state) {
    
    return {
      water: null
    };
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
            <div className='water'>
                <Button onClick={()=>this.add()}>Add</Button>
                <WaterList/>
            </div>
        )
    }

    add() {
        const {dispatch} = this.props;

        dispatch({
            type: waterActions.WATER_ITEM_EDIT,
            id: false
        });
        dispatch({
            type: 'SHOW_MODAL',
            data: {
                content: modalContentMapper.WATER_EDITOR
            }
        })
    }
}