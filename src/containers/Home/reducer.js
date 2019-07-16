import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILD } from '../../store/actions'
const iniitialState = {
    users: null,
    others: null
}

export default (state = iniitialState, action) => {
    switch(action.type){
        case FETCH_REQUEST:
        case FETCH_SUCCESS:
        case FETCH_FAILD: return {
            ...state,
            users: action.payload,
        }
        default: return state
    }
}