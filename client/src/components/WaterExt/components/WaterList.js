import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import WaterListItem from './WaterListItem';
import {sagaWaterActions} from 'sagas/sagaWaterConstants';
import {waterActions} from 'reducers/waterConstants';
//import {modalActions} from 'reducers/modalConstants';
import  { modalContentMapper } from "common/modalMapper.js";

function mapStateToProps({water}) {    
    return {
      water
    };
}

@connect(mapStateToProps)
export default class WaterList extends React.Component {
    render() {
        let {water = []} = this.props
        return (
            <div className='water-list'>
                <Table bordered hover responsive striped>
                    <thead>
                    <tr>
                        <th rowSpan='2' >ID</th>
                        <th rowSpan='2' >date</th>
                        <th rowSpan='2' >Main Clock</th>
                        <th rowSpan='2' >Second Floor Clock</th>
                        <th rowSpan='2' >Total Usage</th>                                                
                        <th colSpan='6'>First Floor</th>
                        <th colSpan='6'>Second Floor</th>                        
                        <th rowSpan='2'>Edit</th>
                        <th rowSpan='2'>Delete</th>
                    </tr>
                     <tr>
                        <th>Usage monthly</th>
                        <th>Usage Under Limit</th>
                        <th>Usage Over Limit</th>
                        <th>Biuv to Pay</th>
                        <th>Water to Pay</th>
                        <th>Total To Pay</th>

                        <th>Usage monthly</th>
                        <th>Usage Under Limit</th>
                        <th>Usage Over Limit</th>
                        <th>Biuv to Pay</th>
                        <th>Water to Pay</th>
                        <th>Total To Pay</th>
                    </tr>                   
                    </thead>
                    <tbody>
                        {water.map((item, index) => {
                            let prevItem = false
                            if (index && water[index-1]) {
                                prevItem = water[index-1];
                            }
                            return (
                                <WaterListItem onDelete={() => this.onDelete(item)} onEdit={() => this.onEdit(item)} prevItem={prevItem} item={item} key={index}/>
                            )
                        })}
                    </tbody>
                </Table>    
            </div>
        )
    }

    onDelete(item) {
        const {dispatch} = this.props;
        dispatch({
            type: sagaWaterActions.DELETE_WATER_ITEM,
            item
        })
    }

    onEdit(item) {
        const {dispatch} = this.props;

        

        dispatch({
            type: waterActions.WATER_ITEM_EDIT,
            id: item.id
        });

        dispatch({
            type: 'SHOW_MODAL',
            data: {
                content: modalContentMapper.WATER_EXT_EDITOR
            }
        })
    }


}