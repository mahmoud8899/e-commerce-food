

import {
    ADD_USER_LOADING,
    ADD_USER_SUCESS,
    ADD_USER_FAIL,
    ADD_USER_RESET,
    ADD_USER_LOGOUT,


    ADD_CHANGEUSER_LOADING,
    ADD_CHANGEUSER_SUCEESS,
    ADD_CHANGEUSER_FAIL,

    ADD_LIST_SUCEESS,
    ADD_LIST_FAIL,


    ADD_USER_REMOV_SUCCESS,
    ADD_USER_REMOV_FAIL,


    ADD_ADDRES_SUCCESS,
    ADD_ADDRES_FAIL,


} from "./Types"
import axios from "axios"

//  Add change addres.... 

// Put /api/user/update/user/
export const AddAdressUserAction = (user) => async (dispatch, getState) => {
    try {

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/user/update/user/`, user, config)
        dispatch({ type: ADD_ADDRES_SUCCESS, payload: data })
       // console.log(data.Adress[0])
        localStorage.setItem('ShippingAdress', JSON.stringify(data.Adress[0]))
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: ADD_ADDRES_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}





// remov and bli admin ..
// http://localhost:5000/api/user/test/token/user/
export const bliAction = (user) => async (dispatch, getState) => {
    try {

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/user/test/token/user/`, user, config)
        dispatch({ type: ADD_USER_REMOV_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: ADD_USER_REMOV_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// list users... 
// /api/user/lists  
export const ListUser = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`/api/user/lists/`)
        dispatch({ type: ADD_LIST_SUCEESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_LIST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}




// change user email and username ... 
// api/user/update/username

export const ChangeLoaclStorgeUser = (user) => async (dispatch, getState) => {

    try {
        dispatch({ type: ADD_CHANGEUSER_LOADING })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/user/update/username/`, user, config)

        dispatch({ type: ADD_CHANGEUSER_SUCEESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {
        dispatch({
            type: ADD_CHANGEUSER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }


}



// with google login 
// POST.... /api/user/ singup/googl/
export const Google_action = (user) => async (dispatch) => {
    try {
        dispatch({ type: ADD_USER_LOADING })

        const { data } = await axios.post(`/api/user/singup/googl/`, user)
        dispatch({ type: ADD_USER_SUCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {

        dispatch({
            type: ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}


// sing up....
export const singUp_action = (user) => async (dispatch) => {
    try {
        dispatch({ type: ADD_USER_LOADING })

        const { data } = await axios.post(`https://lattspis.online/api/user/create/`, user)
        dispatch({ type: ADD_USER_SUCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {

        dispatch({
            type: ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}



// logo ut.. 
export const Action_logout = () => (dispatch) => {

    localStorage.removeItem('userInfo')
    dispatch({ type: ADD_USER_LOGOUT })
    dispatch({ type: ADD_USER_RESET })
}




// user lOGOIN ... 
export const user_Login = (user) => async (dispatch) => {

    try {
        dispatch({ type: ADD_USER_LOADING })

        const { data } = await axios.post(`https://lattspis.online/api/user/login/`, user)
        dispatch({ type: ADD_USER_SUCESS, payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {

        dispatch({
            type: ADD_USER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })

    }
}