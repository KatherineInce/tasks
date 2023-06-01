import {
    SET_TASK,
    SET_TASKS
} from '../constant/tasks'

export const setTask = data => ({
    type: SET_TASK,
    payload: data
})

export const setTasks = data => ({
    type: SET_TASKS,
    payload: data
})