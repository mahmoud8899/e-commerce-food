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



} from "../Action/Types"


// remove post .
export const removepostReducres = (state = {}, action) => {
    switch (action.type) {

       
        case ADD_REMOVE_POST_SUCCESS: return { success: action.payload }
        case ADD_REMOVE_POST_FAIL: return { error: action.payload }

        default: return state
    }
}


// create pcommit 
export const AddCommit_Reducres = (state = {}, action) => {
    switch (action.type) {

       // case ADD_COMMIT_LOADING: return { loading: true }
        case ADD_COMMIT_SUCCESS: return { success: action.payload }
        case ADD_COMMIT_FAIL: return { error: action.payload }

        default: return state
    }
}



// show post .
export const ShowPostIDReducres = (state = { productxp: [] }, action) => {
    switch (action.type) {

      //  case ADD_POST_ID_LOADING: return { loading: true }
        case ADD_POST_ID_SUCCESS: return {...state, productxp: action.payload }
        case ADD_POST_ID_FAIL: return { error: action.payload }

        default: return state
    }
}

// show post .
export const ShowPostReducres = (state = { post: [] }, action) => {
    switch (action.type) {

      
        case ADD_POST_SUCCESS: return { post: action.payload }
        case ADD_POST_FAIL: return { error: action.payload }

        default: return state
    }
}



// create post.. 
export const CreateReducres = (state = { createID: [] }, action) => {

    switch (action.type) {
        case ADD_CREATE_POST_LOADING: return { loading: true }
        case ADD_CREATE_POST_SUCEES: return { createID: action.payload }
        case ADD_CREATE_POST_FAIL: return { error: action.payload }
        default: return state
    }

}