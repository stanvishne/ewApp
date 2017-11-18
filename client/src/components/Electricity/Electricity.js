import React from "react";
import { Button } from "react-bootstrap"; 
import { connect } from "react-redux";

import  { modalContentMapper } from "common/modalMapper.js";
import ElectricityList from './ElectricityList';
import {sagaWaterActions} from 'sagas/sagaWaterConstants';
import {waterActions} from 'reducers/waterConstants';
import {sagaElectrycityActions} from 'sagas/electricity';

@connect()
export default class Electricity extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type: sagaElectrycityActions.LOAD_ELECTRO_LIST
        })
    }
    render() {
        return(
            <div className='electricity'>
                <Button bsStyle="info"  onClick={()=>this.add()}>Add</Button>
                <ElectricityList/>
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
                content: modalContentMapper.ELECTRO_EDITOR
            }
        })
    }
}