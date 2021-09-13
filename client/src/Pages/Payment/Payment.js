import "./Payment.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import TotalPayment from "./TotalPayment/TotalPayment"
import Address from "./Address/Address"
import OrderPayment from "./OrderPayment/OrderPayment"
import Title from "../Title/Title"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
const Payment = ({ history }) => {



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    //  console.log(userInfo)
    const cart = useSelector((state) => state.cart)
    const { cartItems ,ShippingAdress } = cart
 

    



    useEffect(() => {

        if (!userInfo || cartItems?.length === 0) return history.push(`/cart`)

    }, [userInfo, history, cartItems,ShippingAdress])




    const [totalPrics, setTotalPrics] = useState('')

    //  console.log('totalPrics',totalPrics)


    return (

        <>
            <Title title="My Shopping Cart" />
            <Container fluid>
                <Row>
                    <Col className="navBar_Shipping">

                        <h1>Shopping Cart</h1>
                        <div>
                            <Link to={'/'}> Homepage   <i class="fas fa-check"></i> </Link>
                            / <Link to={`/cart`}>Cart Items<i class="fas fa-check"></i> </Link> /
                            <Link to={`/`}><span className="gold_shipping">My Shopping Cart</span></Link>
                        </div>

                    </Col>
                </Row>
                <Row className="justify-content-center">




                    <Col xs={12} md={7} lg={5}>

                        <Address   ShippingAdress={ShippingAdress} />








                        <div className="Payment_method">

                            <div className="Payment_method_text">
                                <i className="far fa-bookmark"></i>
                                <span>payment method</span>
                            </div>

                            <div className="Payment_Credit_Image">
                                <span className="router_first">c</span>
                                <i class="far fa-credit-card"></i>
                                <span className="check_cart_span">Debit / Credit Card</span>
                            </div>

                            <OrderPayment totalPrics={totalPrics} history={history} />


                        </div>




                    </Col>



                    <TotalPayment setTotalPrics={setTotalPrics} />

                </Row>
            </Container>

        </>
    )


}


export default Payment


