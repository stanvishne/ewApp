export default function modal(state = {}, action) {
    switch (action.type) {

        case 'SHOW_MODAL': {
            return {
                show: true,
                data: action.data
            }
        }
        case 'HIDE_MODAL': {
            return {
                show: false,
                data: {}
            }
        }
        default:
            return state;
    }
}