import {

    CART_ADD_ITEMS,
    REMOVE_CART_ITEMS,
    ADD_SAVE_TIME,
    ADD_ADRRESS_SAVE

} from "./Types"
import axios from "axios"






// add addres... 
export const Addares_Action = (data)=> async (dispatch)=>{

    dispatch({type: ADD_ADRRESS_SAVE, payload : data})
    localStorage.setItem('ShippingAdress', JSON.stringify(data))
}


// save time and date.

export const Add_timeAction = (data)=> async (dispatch)=>{

    dispatch({type : ADD_SAVE_TIME , payload : data})

    localStorage.setItem('timeBooking', JSON.stringify(data))
}




// remove Cart from items... 
export const RemoveCart_Action = (id)=> async (dispatch,getStat)=>{
    dispatch({
        type:REMOVE_CART_ITEMS,
        payload: id
    })

    localStorage.setItem('cartItems', JSON.stringify(getStat().cart.cartItems))
}



// add cart save in loacastorage..
export const AddCart_Action = (id, qty) => async (dispatch, getStat) => {

    const { data } = await axios.get(`/api/post/post/${id}/`)
    dispatch({
        type: CART_ADD_ITEMS,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image[0],
            prics: data.prics,
            quantity : data.quantity,
            qty
        }
    })
     
    localStorage.setItem('cartItems', JSON.stringify(getStat().cart.cartItems))

}




