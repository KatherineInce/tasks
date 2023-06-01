import {
    SET_TASK,
    SET_TASKS
} from '../constant/tasks'

const defaultState = {
    tasks: [],
    task: ''
}

export default function tasksReducer(state = defaultState, action){
    switch(action.type){
        case SET_TASK:
            return{
                ...state,
                task: action.payload
            };
        case SET_TASKS:
            return{
            ...state, 
            tasks:[
                ...state.tasks,
                action.payload
            ]};
        default:
            return state
    }
}