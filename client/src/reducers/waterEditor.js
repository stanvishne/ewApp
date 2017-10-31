import {waterActions} from './waterConstants' 

export default function waterEditor(state = false, action) {
    switch (action.type) {
        case waterActions.WATER_ITEM_EDIT:           
            return action.id;
        default:
            return state;
  
    }
}