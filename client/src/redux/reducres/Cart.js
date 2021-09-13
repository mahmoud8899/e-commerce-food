import {

    CART_ADD_ITEMS,
    REMOVE_CART_ITEMS,
    ADD_SAVE_TIME,
    ADD_ADRRESS_SAVE,

} from "../Action/Types"


export const CartReducres = (state = { cartItems: [], ShippingAdress : [], timeBooking : [] }, action) => {
    switch (action.type) {

        case CART_ADD_ITEMS:
            const item = action.payload

            const checkItems = state.cartItems.find((x) => x.product === item.product)
            if (checkItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === checkItems.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

            case REMOVE_CART_ITEMS : 
            return{
                ...state,
                cartItems : state.cartItems.filter((x)=> x.product !== action.payload)
            }

            case ADD_SAVE_TIME : 
            return {
                ...state, 
                timeBooking : action.payload
            }

            case ADD_ADRRESS_SAVE : 
            return {
                ...state, 
                ShippingAdress : action.payload
            }


        default: return state
    }
}


