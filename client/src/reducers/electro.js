export const electroActions = {
    ITEM_ADD: 'ITEM_ADD',
    ITEM_DELETE: 'ITEM_DELETE',
    LIST_LOADED: 'LIST_LOADED',
    ITEM_EDIT: 'ITEM_EDIT'
};

export default function electro(state = [], action) {
    switch (action.type) {
        case electroActions.ITEM_ADD:                       
            return [...state, {...action.values}];
        case electroActions.ITEM_DELETE: {
            return state.filter(item => item.id!==action.item.id)
        } 
        case electroActions.LIST_LOADED: {
            return [...action.list]
        }
        default:
            return state;
  
    }
}