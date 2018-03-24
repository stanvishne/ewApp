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

var sumStyle = {
    backgroundColor: "lightgreen",
    fontWeight: "bold"   
  };

function calc({item, prevItem}) {
    if (!prevItem) return false;

    const globalDif = (parseFloat(item.globalClock) - parseFloat(prevItem.globalClock)).toFixed(2);
    const sfDiff = (parseFloat(item.localClock) - parseFloat(prevItem.localClock)).toFixed(2);
    const ffDiff =  (globalDif - sfDiff).toFixed(2);

    const ffLimit = 7 * item.ffPeoples;
    const sfLimit = 7 * item.sfPeoples;
    const ffUnderLimit = ffDiff < ffLimit ? ffDiff : ffLimit;
    const sfUnderLimit = sfDiff < sfLimit ? sfDiff : sfLimit;

    const ffOverLimit = ffDiff < ffLimit ? 0 : (ffDiff - ffLimit).toFixed(2);
    const sfOverLimit = sfDiff < sfLimit ? 0 : (sfDiff - sfLimit).toFixed(2);
    const ffBiuv = (item.biuvCubPrice * ffDiff).toFixed(2);
    const sfBiuv = (item.biuvCubPrice * sfDiff).toFixed(2);
    const ffLimitPay = item.cubPrice * ffUnderLimit;
    const sfLimitPay = item.cubPrice * sfUnderLimit;
    const ffOverLimitPay = item.cubPriceOver * ffOverLimit;
    const sfOverLimitPay = item.cubPriceOver * sfOverLimit;
    const ffWater = (ffLimitPay + ffOverLimitPay).toFixed(2);
    const sfWater = (sfLimitPay + sfOverLimitPay).toFixed(2);
    const ffTotal = (parseFloat(ffWater) + parseFloat(ffBiuv) + item.shmira/2).toFixed(2);
    const sfTotal = (parseFloat(sfWater) + parseFloat(sfBiuv) + item.shmira/2).toFixed(2);
    return {
        globalDif,
        sfDiff,
        ffDiff,
        ffLimit,
        sfLimit,
        ffUnderLimit,
        sfUnderLimit,
        ffOverLimit,
        sfOverLimit,
        ffBiuv,
        sfBiuv,
        ffWater,
        sfWater,
        ffTotal,
        sfTotal
    }

}

const WaterListElement = ({item, prevItem, onDelete, onEdit}) => {
    const calcData = calc({prevItem, item});
    return (
        <tr>
            <td>#{item.id}</td>
            <td>{item.date}</td>
            <td>{item.globalClock}</td>
            <td>{item.localClock}</td>
            <td>{calcData.globalDif}</td>

            <td>{calcData.ffDiff}</td>
            <td>{calcData.ffUnderLimit}</td>
            <td>{calcData.ffOverLimit}</td>
            <td>{calcData.ffBiuv}</td>
            <td>{calcData.ffWater}</td>
            <td style={sumStyle}>{calcData.ffTotal}</td>

            <td>{calcData.sfDiff}</td>            
            <td>{calcData.sfUnderLimit}</td>            
            <td>{calcData.sfOverLimit}</td>            
            <td>{calcData.sfBiuv}</td>            
            <td>{calcData.sfWater}</td>                        
            <td style={sumStyle}>{calcData.sfTotal}</td>
                        
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