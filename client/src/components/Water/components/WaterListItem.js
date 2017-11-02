import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

function calculate({item, prevItem}) {
    if (!prevItem) return '-'
    const globalDif = parseFloat(item.globalClock) - parseFloat(prevItem.globalClock);
    const localDif = parseFloat(item.localClock) - parseFloat(prevItem.localClock);
    const diff = parseFloat(globalDif) - parseFloat(localDif);
    const adiProc = localDif * 100/globalDif;
    const stProc = 100 - adiProc;
    const totSum = parseFloat(item.moatzaSum) + parseFloat(item.biuv);
    const adiSum = adiProc * totSum/100;
    const stSum = totSum - adiSum;
    return {
        adi: (parseFloat(adiSum) + parseFloat(item.shmira/2)).toFixed(2),
        st: (parseFloat(stSum) + parseFloat(item.shmira/2)).toFixed(2)
    }
}

const WaterListElement = ({item, prevItem, onDelete, onEdit}) => {
    return (
        <tr>
            <td>#{item.id}</td>
            <td>{item.date}</td>
            <td>{item.globalClock}</td>
            <td>{item.localClock}</td>
            <td>{item.biuv}</td>
            <td>{item.shmira}</td>
            <td>{item.moatzaSum}</td>  
            <td>{calculate({prevItem, item}).adi}</td>
            <td>{calculate({prevItem, item}).st}</td>
                        
            <td>
                <Button onClick={onEdit} bsSize="xsmall">
                    Edit <Glyphicon glyph="edit"/>
                </Button>
            </td>
            <td>
                <Button bsSize="xsmall" className="user-delete" onClick={onDelete}>
                    Delete <Glyphicon glyph="remove-circle"/>
                </Button>
            </td>       
        </tr> 
    );
}

export default WaterListElement;