

export default function login(state = false, action) {
    switch (action.type) {

        case 'LOGGEDIN': {
            return action.loggedin
        }
        default:
            return state;
    }
}