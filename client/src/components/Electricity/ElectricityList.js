import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Table, Pagination } from "react-bootstrap";
import ElictricityListItem from './ElictricityListItem';
import {sagaElectrycityActions} from 'sagas/electricity';
import  { modalContentMapper } from "common/modalMapper.js";
import {waterActions} from 'reducers/waterConstants';
function mapStateToProps({electro}) {    
    return {
        electro
    };
}

@connect(mapStateToProps)
export default class ElectricityList extends React.Component {
    render() {
        let {electro = []} = this.props
        return (
            <div className='water-list'>
                <Table bordered hover responsive striped>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>date</th>
                        <th>Main Clock</th>
                        <th>First flour Clock</th>
                        <th>Sum</th>
                        <th>First flour</th>
                        <th>Second flour</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>

                        {electro.map((item, index) => {
                            let prevItem = false
                            if (index && electro[index-1]) {
                                prevItem = electro[index-1];
                            }
                            return (
                                <ElictricityListItem onDelete={() => this.onDelete(item)} onEdit={() => this.onEdit(item)} prevItem={prevItem} item={item} key={index}/>
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
            type: sagaElectrycityActions.DELETE_ELECTRO_ITEM,
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
                content: modalContentMapper.ELECTRO_EDITOR
            }
        })
    }


}