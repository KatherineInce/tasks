import {
    SET_LIST,
    SET_LOADING
} from '../constant/list'

export const setList = data => ({
    type: SET_LIST,
    payload: data
})

export const setLoading = data => ({
    type: SET_LOADING,
    payload: data
})