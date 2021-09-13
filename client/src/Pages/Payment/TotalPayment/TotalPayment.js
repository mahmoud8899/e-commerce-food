import { Col, Image } from "react-bootstrap"
import {RemoveCart_Action} from "../../../redux/Action/Cart"
import {useDispatch ,useSelector} from "react-redux"
import { useEffect } from "react"
const TotalPayment = ({setTotalPrics}) => {

    
  



    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    
    const dispatch = useDispatch()


    const Delivery = Number(10)
    const discount = Number(10)

    const cartAllt = cartItems?.reduce((acc, item) => acc + item?.prics * item?.qty, 0).toFixed(2)

    const Allt = Delivery + discount
   
    const sistatest = cartAllt - Allt

    useEffect(()=>{

        if(sistatest){
            setTotalPrics(Number(sistatest))
        }

    },[sistatest,setTotalPrics])



    return (
        <Col xs={12} md={5} lg={4} >
            <div className="Your_Order">
                <h1>Your Order</h1>

                {cartItems?.map((cart, cartIndex) => (
                    <div className="List_Oder_Image_with_price" key={cartIndex}>
                        <Image src={`/${cart?.image}`} alt="first order" className="Oder_Image_allt" />
                        <span className="price_and_text">
                            {cart?.name}

                            <span >{cart?.prics} * {cart?.qty} = {cart?.prics * cart?.qty} Kr</span>
                        </span>

                        <div className="remove_items" onClick={()=> dispatch(RemoveCart_Action(cart?.product))}>
                        <i className="far fa-trash-alt"></i>
                        </div>

                    </div>
                ))}




                <div className="Pric_Delivery">
                    <span>Delivery</span>
                    <span>{Delivery} Kr</span>
                </div>
                <div className="Pric_Delivery">
                    <span>discount</span>
                    <span>{discount} Kr</span>
                </div>


                <div className="Pric_Total">
                    <span>Total</span>
                    <span>
                        {sistatest?.toFixed(2)} Kr</span>
                </div>

            </div>

        </Col>
    )
}


export default TotalPayment