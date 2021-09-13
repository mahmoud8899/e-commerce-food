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


} from "./Types"
import axios from "axios"



// remove order /// 
// delete  /http://localhost:5000/api/order/order/user/610f041fd970021d944f6720

export const RemoveOrderUser_Action = (id) => async (dispatch, getState) => {
    try {
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.delete(`/api/order/order/user/${id}`, config)
        dispatch({ type: ADD_REMOVE_ORDER_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ADD_REMOVE_ORDER_FAIL,
            payload: error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        })

    }
}

// order  to user.
export const orderIDAction = () => async (dispatch, getState) => {
    try {

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/order/userid/`, config)
        dispatch({ type: ADD_ORDER_ID_SUCCESS, payload: data })


    }
    catch (error) {
        dispatch({
            type: ADD_ORDER_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message


        })
    }
}



// order id 
// GET /api/order/order/:id/
export const orderId_action = (id) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/order/order/${id}`)
        dispatch({ type: ADD_ORDERID_SUCCESS, payload: data })

        localStorage.removeItem('cartItems')
    }
    catch (error) {
        dispatch({
            type: ADD_ORDERID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message


        })
    }
}



// save order form user ... 
export const Order_Action = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: ADD_ORDER_LOADING })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/order/order/`, user, config)
        dispatch({ type: ADD_ORDER_SUCCESS, payload: data })

        localStorage.removeItem('cartItems')
    }
    catch (error) {
        dispatch({
            type: ADD_ORDER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message


        })
    }
}