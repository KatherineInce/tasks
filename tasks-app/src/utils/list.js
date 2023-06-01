import {store} from '../store'
import {setList,setLoading} from '../actions/list'
import axios from 'axios'
let controller;

const getList = _ => {
    try {
        store.dispatch(setLoading(true))
        if(controller)
            controller.abort()

        controller = new AbortController()
        const url = 'https://6172cfe5110a740017222e2b.mockapi.io/elements'
        axios.get(url)
        .then(({data}) => {
            store.dispatch(setList(data))
        })
        .finally(_=>{
            store.dispatch(setLoading(false))
        })
        .catch(error => {
            store.dispatch(setList([]))
            store.dispatch(setLoading(false))

        });

    } catch (error) {
        store.dispatch(setList([]))
        store.dispatch(setLoading(false))
    }
}

export {getList}