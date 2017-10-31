import {waterActions} from './waterConstants';

export default function water(state = [], action) {
    switch (action.type) {
        case waterActions.WATER_ADD:           
            //const id = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            return [...state, {...action.values}];
        
        case waterActions.WATER_ITEM_DELETE: {
            return state.filter(item => item.id!==action.item.id)
        }  
        
        case waterActions.WATER_LIST_LOADED: {
            return [...action.list]
        }
        default:
            return state;
  
    }
}