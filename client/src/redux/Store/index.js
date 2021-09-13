import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware, combineReducers } from "redux"


import {
    LoginReducres,
    changeuserInfo,
    ListUserReducres,
    BliRedures,
    AddAdressReducres,

} from "../reducres/Auth"


import {
    CreateReducres,
    ShowPostReducres,
    ShowPostIDReducres,
    AddCommit_Reducres,
    removepostReducres,

} from "../reducres/Post"

import {
    OrderReducres,
    orderIDReducres,
    orderUserReducres,
    removeOrderUserReducress,
} from "../reducres/Order"



import {
    addLikeReducres
} from "../reducres/Like"

import { CartReducres } from "../reducres/Cart"

const reducer = combineReducers({
    userLogin: LoginReducres,
    changeuser: changeuserInfo,
    listID: ListUserReducres,
    bliID: BliRedures,
    addressuser: AddAdressReducres,



    createPost: CreateReducres,
    postID: ShowPostReducres,
    product: ShowPostIDReducres,
    commitID: AddCommit_Reducres,
    cart: CartReducres,
    removePost: removepostReducres,




    like: addLikeReducres,


    order: OrderReducres,
    orderid: orderIDReducres,
    orderuser: orderUserReducres,

    removeOder: removeOrderUserReducress,
})



// add adress  
const loachShipping = localStorage.getItem('ShippingAdress') ?
    JSON.parse(localStorage.getItem('ShippingAdress')) : []


const itemsLocalstorge = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const loaclLogin = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null



// like cart ... 
const LocastorLike = localStorage.getItem('likeCart') ?
    JSON.parse(localStorage.getItem('likeCart')) : []


const loacTime = localStorage.getItem('timeBooking') ? JSON.parse(localStorage.getItem('timeBooking')) : null


const intialstate = ({


    cart: {
        cartItems: itemsLocalstorge,
        timeBooking: loacTime,
        ShippingAdress: loachShipping
    },



    userLogin: {
        userInfo: loaclLogin
    },


    like: {
        likeCart: LocastorLike
    }

})

const middleware = [thunk]

const store = createStore(reducer, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store