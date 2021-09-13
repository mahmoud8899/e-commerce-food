
import {
    ADD_USER_LOADING,
    ADD_USER_SUCESS,
    ADD_USER_FAIL,
    ADD_USER_RESET,


    ADD_CHANGEUSER_LOADING,
    ADD_CHANGEUSER_SUCEESS,
    ADD_CHANGEUSER_FAIL,

    ADD_LIST_SUCEESS,
    ADD_LIST_FAIL,

    ADD_USER_REMOV_SUCCESS,
    ADD_USER_REMOV_FAIL,

    ADD_ADDRES_SUCCESS,
    ADD_ADDRES_FAIL,

} from "../Action/Types"

// bli admin ... and remove.. 
export const AddAdressReducres = (state = {}, action) => {
    switch (action.type) {
        case ADD_ADDRES_SUCCESS: return {...state, success: action.payload }
        case ADD_ADDRES_FAIL: return { error: action.payload }
        default: return state
    }
}

// bli admin ... and remove.. 
export const BliRedures = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER_REMOV_SUCCESS: return { bli: action.payload }
        case ADD_USER_REMOV_FAIL: return { error: action.payload }
        default: return state
    }
}


// list user ... 
export const ListUserReducres = (state = { list: {} }, action) => {
    switch (action.type) {
        case ADD_LIST_SUCEESS: return { list: action.payload }
        case ADD_LIST_FAIL: return { error: action.payload }
        default: return state
    }
}




// change username... 
export const changeuserInfo = (state = {}, action) => {

    switch (action.type) {
        case ADD_CHANGEUSER_LOADING: return { loading: false }
        case ADD_CHANGEUSER_SUCEESS: return { changeSucess: action.payload }
        case ADD_CHANGEUSER_FAIL: return { error: action.payload }
        default: return state
    }

}


// user login ...
export const LoginReducres = (state = { userInfo: {} }, action) => {

    switch (action.type) {
        case ADD_USER_LOADING: return { loading: true }
        case ADD_USER_SUCESS: return { userInfo: action.payload, loading: false }
        case ADD_USER_FAIL: return { error: action.payload, loading: false }
        case ADD_USER_RESET: return {}


        default: return state
    }
}