
import { Container, Row, Card, Col, CardGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ItemsCart.css"
import Rating from "../../Rating/Rating"
import { AddCart_Action } from "../../../redux/Action/Cart"
import { AddLikeCartAction } from "../../../redux/Action/Like"
import { useDispatch, useSelector } from "react-redux"

const ItemsCart = ({ checkPost }) => {

    const qty = 1

    const dispatch = useDispatch()

    // add cart to
    const like = useSelector((state) => state.like)
    const { likeCart } = like


    // const chexk = likeCart.filter((vale)=> vale.id )

  //  console.log('like', likeCart)

    // add to cart..... 
    const AddCartTO = (e, id) => {

        e.preventDefault()

        if (qty) {
            dispatch(AddCart_Action(id, qty))
        }


        // console.log('click',rest,qty)
    }



    // add Like .... 
    const Handlelile = (e, id) => {
        e.preventDefault()

        dispatch(AddLikeCartAction(id, qty))
      // console.log('click heart... and id :', id)
    }

    return (
        <Container >
            <Row className="justify-content-center">


                {checkPost?.map((post, postIndex) => (

                    <Col xs={6} sm={6} md={4} lg={3} className="bottom_px" key={postIndex}>
                        <CardGroup  >
                            <Card className="Add_Cart_Home Add_color_border_top">




                               
                                    <span onClick={(e) => Handlelile(e, post?._id)}>
                                        <i className="fas fa-heart"></i>
                                    </span>
                            






                                <Link className="" to={`/product/${post?._id}`}>

                                    <Card.Img variant="top" src={`../${post?.image[0]}`} className="Add_Cart_Home_image Add_Cart_Home_image_add" />
                                </Link>
                                <span className="cart_body_Price_adxx"> kr {post?.prics}</span>

                                <div className="cart_body_all Add_color_border">
                                    <h1>{post?.name}</h1>
                                    <Rating value={post?.rating} />

                                    <div className="cart_body_Price_viws">






                                        <button className="Add_router_food" onClick={(e) => AddCartTO(e, post?._id)}>
                                            <i class="fas fa-plus" ></i>
                                        </button>

                                    </div>
                                </div>

                            </Card>


                        </CardGroup>
                    </Col>

                ))}






            </Row>
        </Container>
    )
}


export default ItemsCart

