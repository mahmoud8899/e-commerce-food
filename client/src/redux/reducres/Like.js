import {

    ADD_LIKE_CART,
    ADD_LIKE_REMOVE

} from "../Action/Types"



// add like cart  from User... 

export const addLikeReducres = (state= {likeCart: []},action) =>{


    switch(action.type){

       case ADD_LIKE_CART : 

        const likeUser = action.payload

        const checkLike = state.likeCart.find((x)=> x.product ===  likeUser.product)

        if(checkLike){

            return {
                ...state, 
                likeCart :  state.likeCart.map((x)=> x.product === checkLike.product ? likeUser : x )
            }
        }else{

            return {
                ...state, 
                likeCart : [...state.likeCart , likeUser]
            }
        }



        case ADD_LIKE_REMOVE : 
        return {
            ...state,
            likeCart : state.likeCart.filter((x)=>x.product !== action.payload )
        }
       


        default : return state
    }
}