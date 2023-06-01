import {
    SET_LIST,
    SET_LOADING
} from '../constant/list'

const defaultState = {
    list: [],
    loading: false
}

export default function listReducer(state = defaultState, action){
    switch(action.type){
        case SET_LIST:
            return{
                ...state,
                list: action.payload
            };
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}