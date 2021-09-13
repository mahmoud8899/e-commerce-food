import { Fragment, useEffect, useState } from "react"
import { Col, Form, Row, Button, Alert } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Order_Action } from "../../../redux/Action/Oder"
import { useDispatch } from "react-redux"
const OrderPayment = ({ totalPrics, history }) => {


    const dispatch = useDispatch()
    const [orderBuy, setOrderBuy] = useState(false)
    const [alertid, setAlertid] = useState(false)
    const cart = useSelector((state) => state.cart)
    const { ShippingAdress, cartItems, timeBooking } = cart



    const order = useSelector((state) => state.order)
    const { orderUser } = order

    // console.log(orderUser?._id)





    const [validated, setValidated] = useState(false);
    const HandleCartPay = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            if (!ShippingAdress?.firstName ||
                !ShippingAdress?.lastName ||
                !ShippingAdress?.yourEmail ||
                !ShippingAdress?.telephone ||
                !ShippingAdress?.yourAddress ||
                !ShippingAdress?.city ||
                !ShippingAdress?.zipCode) {


                setAlertid(true)


                setTimeout(() => {

                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })

                    return setAlertid(false)
                }, [3000])

            } else {

                setValidated(true);

                console.log(ShippingAdress, totalPrics, timeBooking, cartItems)



                console.log('Yes Order')
                dispatch(Order_Action({
                    itemsPrics: totalPrics,
                    timeOrder: timeBooking,
                    orderItems: cartItems,
                    shippingAdress: ShippingAdress,
                    paymentMethod: 'Credit Card'

                }))

                setAlertid(true)
                setOrderBuy(true)






            }
        }



    };



    useEffect(() => {

        if (orderBuy) {

            setTimeout(() => {

                history.push(`/order/shipping/${orderUser?._id}`)


                setAlertid(false)
                return setOrderBuy(false)

            }, [5000])




        }

    }, [history, orderBuy, orderUser, alertid])




    return (
        <Fragment>


            <Row>
                <Col className={alertid ? "cart_login_s open" : "cart_login_s"}>
                    {
                        alertid &&

                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>

                            {orderBuy ?

                                <p>Thank you, we will always be there for you</p>

                                :
                                <p> Write an address first </p>

                            }


                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy.
                            </p>
                        </Alert>
                    }
                </Col>
            </Row>






           

                <Col xs={12} md={6} lg={6} className="Form_cart_input">

                    <Form controlId="validationCustom03" validated={validated} onSubmit={(e) => HandleCartPay(e)}>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label className="Enter__cart">Enter Credit Card</Form.Label>
                            <Form.Control type="number" placeholder="Enter Credit Card" maxlength="4" required />
                        </Form.Group>


                        <Row>
                            <span className="Enter__cart">Volid Date</span>
                            <Col >

                                <Form.Control placeholder="MM" type="number" required min="01" max="12" />
                            </Col>
                            <Form.Control.Feedback type="invalid">
                                ccc
                            </Form.Control.Feedback>
                            <Col>

                                <Form.Control placeholder="YYYY" type="number" required min="2021" max="2025" />
                            </Col>
                            <Col>

                                <Form.Control placeholder="CVV" required min="000" max="999" />
                            </Col>
                        </Row>


                        <Button className="add_botton" type="submit" >
                            Pay {totalPrics} Kr
                        </Button>


                    </Form>

                </Col>

            



        </Fragment>
    )
}



export default OrderPayment