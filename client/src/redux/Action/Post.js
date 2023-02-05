import {
    ADD_CREATE_POST_LOADING,
    ADD_CREATE_POST_SUCEES,
    ADD_CREATE_POST_FAIL,


    
    ADD_POST_SUCCESS,
    ADD_POST_FAIL,

 
    ADD_POST_ID_SUCCESS,
    ADD_POST_ID_FAIL,

    
    ADD_COMMIT_SUCCESS,
    ADD_COMMIT_FAIL,

    ADD_REMOVE_POST_SUCCESS,
    ADD_REMOVE_POST_FAIL,

} from "./Types"

import axios from "axios"



// api/post//post/:id/
// remove post.. 
export const removePost_Action = (id) => async (dispatch, getState) => {
    try {
      //  dispatch({ type: ADD_COMMIT_LOADING })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(`/api/post/post/${id}`, config)
        dispatch({ type: ADD_REMOVE_POST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_REMOVE_POST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// create commit 
// post ///post/post/commit/61018626001bf30614ed48ec
export const addCommit_Action = (user) => async (dispatch, getState) => {
    try {
      //  dispatch({ type: ADD_COMMIT_LOADING })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/api/post/post/commit/${user._id}/`, user, config)
        dispatch({ type: ADD_COMMIT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_COMMIT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// show post id  
export const product_IDAction = (id) => async (dispatch) => {

    console.log('id',id)
    try {
        const { data } = await axios.get(`https://lattspis.online/api/product/product/details/${id}`)
        dispatch({ type: ADD_POST_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_POST_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// show all posts
export const ShowCart_action = () => async (dispatch) => {
    try {
       // dispatch({ type: ADD_POST_LOADING })

        const { data } = await axios.get(`https://lattspis.online/api/product/product/top/`)
        dispatch({ type: ADD_POST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_POST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// create post 
export const Create_postAction = (user) => async (dispatch, getState) => {


    try {
        dispatch({ type: ADD_CREATE_POST_LOADING })
        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/post/create/`, user, config)
        dispatch({ type: ADD_CREATE_POST_SUCEES, payload: data })
    } catch (error) {
        dispatch({
            type: ADD_CREATE_POST_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}