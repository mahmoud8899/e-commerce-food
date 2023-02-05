import { useSelector, useDispatch } from "react-redux"
import React, { useEffect, useState } from "react"
import { ShowCart_action } from "../../redux/Action/Post"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../Title/Title"
import ItemsCart from "../Home/ItemsCart/ItemsCart"
import { Link } from "react-router-dom"
import Search from "./Search/Search"
import "./Menu.css"
const Menu = () => {


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })


    const dispatch = useDispatch()
    const [searchMessage, setSearchMessage] = useState('')
    const postID = useSelector((state) => state.postID)
    const { post } = postID



    useEffect(() => {


        if (post?.length === Number(0)) return dispatch(ShowCart_action())


    }, [post?.length])






    // console.log('post',post)

    return (
        <Container>
            <Title title="Menu" />
            <Row>
                <Col className="navBar_Shipping">

                    <h1 >Menu</h1>
                    <div className="menu_home">
                        <Link className="Class_Home" to={'/'}> Homepage   <i className="fas fa-check"></i> </Link>
                    </div>

                </Col>
            </Row>


            <Search setSearchMessage={setSearchMessage} />


           


            <ItemsCart
                checkPost={post}
            />




        </Container>






    )
}


export default Menu