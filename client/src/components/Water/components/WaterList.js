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
                        <th>ID</th>
                        <th>date</th>
                        <th>Main Clock</th>
                        <th>Adiel Clock</th>
                        <th>Biuv</th>
                        <th>Shmira</th>
                        <th>Sum from Moatza</th>
                        <th>Adiel</th>
                        <th>Stas</th>
                        <th>Edit</th>
                        <th>Delete</th>
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
                content: modalContentMapper.WATER_EDITOR
            }
        })
    }


}