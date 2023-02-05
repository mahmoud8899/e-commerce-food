import { Col, Container, Row, Image, Card, Form } from "react-bootstrap"
import "./Product.css"
import { product_IDAction, addCommit_Action } from "../../redux/Action/Post"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Title from "../Title/Title"
import Rating from "../Rating/Rating"
import { format } from "timeago.js"
import { AddCart_Action } from "../../redux/Action/Cart"
import { ImageUrl } from '../../Utils/Url'
const Product = ({ match }) => {




    const [qty, setQty] = useState(1)
    // console.log(match)
    const productID = match.params.id
    const dispatch = useDispatch()

    const product = useSelector((state) => state.product)
    const { productxp } = product


    // user id .....
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const commitID = useSelector((state) => state.commitID)
    const { success } = commitID




    // show product id...
    useEffect(() => {
        if (productID) {
            dispatch(product_IDAction(productID))
        }

    }, [productID, dispatch, success])








    // slider image NavBar...........>
    const [museOver, setMuseOver] = useState(null)
    const HandleImagSlider = (e, img) => {
        e.preventDefault()
        setMuseOver(img)
    }


    // commit from user... 
    const [rating, setRating] = useState(0)
    const [commit, setCommit] = useState('')
    const [validated, setValidated] = useState(false);
    const HandleCommit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (productID) {
            event.preventDefault();
            dispatch(addCommit_Action({
                _id: productID,
                rating,
                userCommit: commit,
            }))

            setRating(0)
            setCommit(event.target.value = '')

        }



        setValidated(true);

    };



    // add to cart items.. 
    const AddCart = (e,productxp) => {
        e.preventDefault()
        if (productID && qty) {

            dispatch(AddCart_Action(productxp, qty))
        }
    }



  

    return (

        <>


            <Title title={productxp?.name} />
            <Container>

                <Row>
                    <Col className="navBar_Shipping">

                        <h1>Product Cart</h1>
                        <div className="Back_Home">
                            <Link className="Back_Home_A" to={'/'}>
                                Homepage
                                <i className="fas fa-check"></i>
                            </Link>
                        </div>

                    </Col>
                </Row>



                <Row>

                    <Col xs={8} md={9} lg={5}>
                        <div className="product_Image_One">

                            <Image src={`${ImageUrl}${productxp?.image}`} className="product_Image_One_Image" alt="" />


                        </div>

                    </Col>

                    <Col xs={12} md={12} lg={5}>

                        <div className="Selector_Product">


                            <Card.Body>
                                <h1 className="name_menay">{productxp?.name}</h1>

                                <div className="cart_body_all">
                                    <h1>{productxp?.name}</h1>
                                    <Rating value={productxp?.rating} />

                                    <Card.Text className="text_center">
                                        {productxp?.description}
                                    </Card.Text>

                                    <div className="Selector_Product_option">
                                        <h1>How many</h1>


                                        <Form.Control
                                            as='select'
                                            className="input_selector"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                        >
                                            {[...Array(productxp?.quantity).keys()].map(
                                                (x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                )
                                            )}
                                        </Form.Control>



                                    </div>




                                    <div className="cart_body_Price_viws">

                                        <span className="cart_body_Price">{productxp?.prices} Kr</span>

                                        <button
                                            className="button_add_to_cart"
                                            type="type"
                                            disabled={productxp?.quantity === 0}
                                            onClick={(e) => AddCart(e,productxp)}
                                        >
                                            Add To Cart
                                        </button>

                                    </div>
                                </div>
                            </Card.Body>

                        </div>

                    </Col>

                </Row>





                <Row>
                    <Col lg={6} className="top_commit_xp">

                        {productxp?.commit?.map((commituser, commitIndex) => (
                            <div className="Comment_User" key={commitIndex}>
                                <div className="Comment_User_Info">
                                    <span>{commituser?.username}</span>
                                    <Rating value={commituser?.rating} />
                                </div>
                                <p className="user_text_comment">
                                    <span className="time_commit">{format(commituser?.date)}</span>
                                    {commituser?.userCommit}
                                    .</p>

                            </div>
                        ))}







                        {
                            userInfo ?

                                <div className="commentUser_star">


                                    <Form validated={validated} onSubmit={(e) => HandleCommit(e)}>
                                        <select
                                            className="input_selector_user"
                                            onChange={(e) => setRating(e.target.value)}
                                            required
                                        >
                                            <option > value  </option>
                                            <option value="1">1  good </option>
                                            <option value="2">2 very good </option>
                                            <option value="3">3 Excellent </option>
                                            <option value="4">4 The best</option>
                                            <option value="5">5 number one</option>
                                        </select>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea"
                                                rows={3} required onChange={(e) => setCommit(e.target.value)}
                                                placeholder="Commit here"
                                                className="width_more"
                                                style={{ height: '60px' }}
                                            />
                                        </Form.Group>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid commit.
                                        </Form.Control.Feedback>
                                        <button className="button_add_to_cart add_width">comment</button>
                                    </Form>

                                </div>

                                :

                                <div className="Logoin_user">
                                    If you want to rate the product, you must
                                    <Link className="Logoin_user_user" to={`/login`}>
                                        log in
                                    </Link>
                                </div>
                        }

                    </Col>
                </Row>



            </Container>

        </>
    )
}


export default Product


