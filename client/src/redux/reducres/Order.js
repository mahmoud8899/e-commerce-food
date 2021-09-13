import {
    ADD_ORDER_LOADING,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAIL,


    ADD_ORDERID_SUCCESS,
    ADD_ORDERID_FAIL,

    ADD_ORDER_ID_SUCCESS,
    ADD_ORDER_ID_FAIL,


    ADD_REMOVE_ORDER_SUCCESS,
    ADD_REMOVE_ORDER_FAIL,


} from "../Action/Types"

export const removeOrderUserReducress = (state = {  }, action) => {
    switch (action.type) {


        case ADD_REMOVE_ORDER_SUCCESS: return {...state, success: action.payload }
        case ADD_REMOVE_ORDER_FAIL: return { error: action.payload }
        default: return state
    }
}


// user orders... 
export const orderUserReducres = (state = { orderIDuser: [] }, action) => {
    switch (action.type) {


        case ADD_ORDER_ID_SUCCESS: return {...state, orderIDuser: action.payload }
        case ADD_ORDER_ID_FAIL: return { error: action.payload }
        default: return state
    }
}


// order id... 
export const orderIDReducres = (state = { orderuserid: {} }, action) => {
    switch (action.type) {


        case ADD_ORDERID_SUCCESS: return {...state, orderuserid: action.payload }
        case ADD_ORDERID_FAIL: return { error: action.payload }
        default: return state
    }
}

//  buy food 
export const OrderReducres = (state = { orderUser: [] }, action) => {
    switch (action.type) {

        case ADD_ORDER_LOADING: return { loading: true }
        case ADD_ORDER_SUCCESS: return { orderUser: action.payload }
        case ADD_ORDER_FAIL: return { error: action.payload }
        default: return state
    }
}