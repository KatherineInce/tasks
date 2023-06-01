import {combineReducers} from 'redux'
import tasksReducer from './tasks'
import listReducer from './list'
const reducer = combineReducers({
    tasks: tasksReducer,
    list: listReducer
})
export default reducer