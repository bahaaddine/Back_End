import {DELETE,DONE,ADD} from './action-type'

export const deleteHandler = (ID) =>{
    return{
        type: DELETE,
        payload: ID
    }
}
export const doneHandler = (DATA) =>{
    console.log(DATA)
    return{
        type: DONE,
        payload: DATA
    }
}
export const addHandler = (list) =>{
    console.log(list)
    return{
        type: ADD,
        payload:list
    }
}