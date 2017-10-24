import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import WaterListItem from './WaterListItem';
import {sagaWaterActions} from 'sagas/sagaWaterConstants';

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
            <div>
                <Table bordered hover responsive striped>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>date</th>
                        <th>Global Clock</th>
                        <th>local Clock</th>
                        <th>Biuv</th>
                        <th>Shmira</th>
                        <th>Sum from Moatza</th>
                        <th>Adiel</th>
                        <th>Stas</th>
                    </tr>
                    </thead>
                    <tbody>
                        {water.map((item, index) => {
                            let prevItem = false
                            if (index && water[index-1]) {
                                prevItem = water[index-1];
                            }
                            return (
                                <WaterListItem onDelete={() => this.onDelete(item)} prevItem={prevItem} item={item} key={index}/>
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
}