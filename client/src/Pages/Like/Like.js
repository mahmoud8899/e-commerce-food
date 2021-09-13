import "./Like.css"
import { Container, Row, Col, Card } from "react-bootstrap"

import Title from "../Title/Title"
import { useDispatch, useSelector } from "react-redux"
import { removeLikeAction } from "../../redux/Action/Like"
import {AddCart_Action } from "../../redux/Action/Cart"
const Like = ({ history }) => {



    const dispatch = useDispatch()

    const like = useSelector((state) => state.like)
    const { likeCart } = like
    console.log('like', likeCart?.length)


    // add cart...
    const HandleAddCart = (e, id) => {
        e.preventDefault()
       // console.log('cliek', id)
        dispatch(AddCart_Action(id))
    }

    // go back .... 
    const HandlBack = (e) => {
        e.preventDefault()
        history.push('/')
    }

    // remove like cart.. 
    const HandlRemoveLike = (e, id) => {
        e.preventDefault()
        console.log('cliek', id)
        dispatch(removeLikeAction(id))
    }

    return (
        <Container fluid>
            <Title title="Like Cart" />
            <Row>
                <Col className="navBar_Shipping">

                    <h1>Like Cart  <i className="fas fa-heart"></i>  </h1>
                    <div className="like_PageHome" onClick={(e) => HandlBack(e)}>
                        <span className="add_back"> Homepage   <i className="fas fa-check"></i> </span>

                    </div>

                </Col>
            </Row>

            <Row className="justify-content-center">



                {likeCart?.length !== 0 ? likeCart?.map((likeyou, likeyouIndex) => (
                    <Col xs={12} sm={6} md={4} lg={4} className="bottom_cart" key={likeyouIndex}>
                        <Card>
                            <Card.Img variant="top" src={`/${likeyou?.image}`} className="Image_like" />
                            <Card.Body>
                                <Card.Text className="text_posx">
                                    {likeyou?.description}
                                </Card.Text>

                            </Card.Body>
                            <Card.Text className="price_like">102.00 Kr</Card.Text>

                            <Card.Text className="add_cart_like" onClick={(e) => HandleAddCart(e, likeyou?.product)}>
                                <i class="fas fa-plus" ></i>
                            </Card.Text>

                            <Card.Text className="Add_Remove_Like" onClick={(e) => HandlRemoveLike(e, likeyou?.product)}>
                                <i className="fas fa-trash-alt"></i>
                            </Card.Text>
                        </Card>
                    </Col>
                )) : <h1 className="bottom_x">There are no things you like</h1>
                }













            </Row>
        </Container>
    )
}


export default Like


/*




   <Card className="bg-dark text-white">
                                <Card.Img src={`/${likeyou?.image}`} alt="Card image" className="Image_like" />
                                <Card.ImgOverlay>
                                    <Card.Title className="cart_Title">{likeyou?.name}</Card.Title>
                                    <Card.Text>
                                        {likeyou?.description}
                                    </Card.Text>
                                    <Card.Text className="price_like">102.00 Kr</Card.Text>

                                    <Card.Text className="add_cart_like" onClick={(e) => HandleAddCart(e, likeyou?.product)}>
                                        <i class="fas fa-plus" ></i>
                                    </Card.Text>

                                    <Card.Text className="Add_Remove_Like" onClick={(e) => HandlRemoveLike(e, likeyou?.product)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </Card.Text>
                                </Card.ImgOverlay>

                            </Card>



*/