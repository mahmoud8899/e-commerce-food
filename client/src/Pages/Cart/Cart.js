
import { Col, Container, Row, Table, Image,  Form, Button, Alert } from "react-bootstrap"
import "./Cart.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AddCart_Action, RemoveCart_Action } from "../../redux/Action/Cart"
import { useEffect, useState } from "react"
import Title from "../Title/Title"
import { Add_timeAction } from "../../redux/Action/Cart"
import { ShowCart_action } from "../../redux/Action/Post"
import SliderFood from "../Home/SliderFood/SliderFood"
import {ImageUrl} from '../../Utils/Url'

const Cart = ({ history }) => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
    const [startDate, setStartDate] = useState(new Date());
    const postID = useSelector((state) => state.postID)
    const { post } = postID



    // show all cart items......
    useEffect(() => {

        dispatch(ShowCart_action())


    }, [dispatch])



  
// alerit...
    const [validated, setValidated] = useState(false);
    const [alertid, setAlertid] = useState(false)

    const HandleCheckDate = (event) => {

        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {

            if (!userInfo) {

                setAlertid(true)

                setTimeout(() => {

                    setAlertid(false)
                    history.push(`/login?${`/cart`}`)



                }, [3000])




                //  history.push(`/login`) 
            } else {
                setValidated(true);
                // console.log(startDate)

                setAlertid(true)
                setTimeout(() => {

                    setAlertid(false)
                    history.push(`/order/payment/`)
                    dispatch(Add_timeAction(startDate))


                }, [3000])

            }



        }







    };



    return (
        <Container >


            <Title title="Cart Shipping " />

            <Row>
                <Col className={alertid ? "cart_login_s open" : "cart_login_s"}>
                    {
                        alertid &&

                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>

                                {!userInfo ?

                                    <p>You have to log in first</p>

                                    :

                                    <>
                                        <p> We've booked mealtime, thank you, and now moving on to writing the address with payment, thank you</p>
                                        {startDate && <p>{startDate}</p>}

                                    </>
                                }

                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy.
                            </p>
                        </Alert>
                    }
                </Col>
            </Row>


            {cartItems.length ?


                <Row>

                    <Col xs={12} md={12} lg={8}>
                        <Table striped bordered hover size="xs" className="ADD_backgroun_color">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>name</th>
                                    <th>Price</th>
                                    <th>quantity</th>
                                    <th>Final price</th>
                                    <th>remove</th>
                                </tr>
                            </thead>

                            {cartItems?.map((cart, cartIndex) => (
                                <tbody key={cartIndex}>
                                    <tr>
                                        <td>
                                            <span >{cartIndex}</span>
                                        </td>
                                        <td>
                                            <Image src={`${ImageUrl}${cart?.image}`} className="cart_Image_image" alt="" />

                                        </td>
                                        <td>
                                            <span >{cart?.name}</span>
                                        </td>
                                        <td>
                                            <span>{cart?.prics} Kr</span>

                                        </td>
                                        <td>
                                            <div className="cart_quantity">
                                                <Form.Control
                                                    as='select'
                                                    value={cart?.qty}
                                                    onChange={(e) =>
                                                        dispatch(AddCart_Action(cart?.product, Number(e.target.value)))
                                                    }
                                                    className="Change_width"
                                                >
                                                    {[...Array(cart?.quantity).keys()].map(
                                                        (x) => (
                                                            <option key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        )
                                                    )}
                                                </Form.Control>




                                            </div>
                                        </td>
                                        <td>
                                            <span>{cart?.prics * cart?.qty} Kr</span>
                                        </td>
                                        <td>
                                            <span className="Remove_Cart" onClick={() => dispatch(RemoveCart_Action(cart?.product))}>
                                                Remove
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>
                            ))}

                        </Table>
                    </Col>

                    <Col xs={12} md={12} lg={4} className="total_check_price">

                        <div className="check_price_cart" >
                            <h1>total summation</h1>
                            <p> price :{cartItems?.reduce((acc, item) => acc + item.prics * item.qty, 0).toFixed(2)} Kr</p>






                            <Form validated={validated} onSubmit={(e) => HandleCheckDate(e)}>
                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={12} md={12} lg={12}>
                                        Enter a date and time for your party booking
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            className="form-control x_zindex"
                                            onChange={(e) => setStartDate(e.target.value)}
                                            type="datetime-local"
                                            min="2021-07-01T00:00" max="2021-12-31T00:00"
                                            required
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        Enter a date and time for your party booking
                                    </Form.Control.Feedback>
                                </Form.Group>




                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button type="submit" className="Sign_Login_USER">booking your time</Button>
                                    </Col>
                                </Form.Group>
                            </Form>






                            <div>



                            </div>
                        </div>
                    </Col>
                </Row>


                : <div className="div_go_back">
                    Your cart is empty <Link className="link_go_back" to={`/`}>
                        Go Back
                    </Link>
                </div>
            }






            <Row className="justify-content-center" >

                <Col xs={12} md={12} lg={12}>
                    <h1 className="Recommended_cart">Recommended Products</h1>
                </Col>












                <SliderFood post={post} />





                <Col xs={12} md={12} lg={12}>
                    <div className="Conllection_full">
                        <Link className="Link_cart_click" to={`/menu`}>
                            View Full Conllection
                        </Link>

                    </div>
                </Col>




            </Row>




        </Container>
    )
}


export default Cart


