import {

    ADD_LIKE_CART,
    ADD_LIKE_REMOVE

} from "./Types"
import axios from "axios"

// remove like cart.. 
export const removeLikeAction = (id) => (dispatch,getState) => {

    dispatch({ type: ADD_LIKE_REMOVE, payload: id })

    localStorage.setItem('likeCart', JSON.stringify(getState().like.likeCart) )
}






// add cart  like... 
export const AddLikeCartAction = (id, qty) => async (dispatch, getState) => {


    const { data } = await axios.get(`/api/post/post/${id}/`)
    console.log('data', data)
    dispatch({
        type: ADD_LIKE_CART,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image[0],
            prics: data.prics,
            quantity: data.quantity,
            description: data.description,
            qty

        }
    })


    localStorage.setItem('likeCart', JSON.stringify(getState().like.likeCart))

}