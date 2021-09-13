import Carousel from "./Carousel/Carousel"
import ListFood from "./ListFood/ListFood"
import ItemsCart from "./ItemsCart/ItemsCart"
import "./Home.css"
import SliderSingUp from "./SliderSingUp/SliderSingUp"
import BestFood from "./BestFood/BestFood"
import SliderFood from "./SliderFood/SliderFood"
import Cooks from "./Cooks/Cooks"
import { useEffect, useState } from "react"
import Title from "../Title/Title"
import { ShowCart_action } from "../../redux/Action/Post"
import { useDispatch, useSelector } from "react-redux"
import Search from "../Menu/Search/Search"
import { Container, Row } from "react-bootstrap"
const Home = () => {



    const dispatch = useDispatch()
    const [searchMessage, setSearchMessage] = useState('')
    const postID = useSelector((state) => state.postID)
    const { post } = postID


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // console.log(userInfo)



    // show post id ... 
    useEffect(() => {

        dispatch(ShowCart_action())

    }, [dispatch])





    // this is filter to menay .... 
    const checkPost = post?.filter((val) => val?.sort?.toLowerCase().includes(searchMessage?.toLowerCase()))




    // slider 4 time..... 
    // const newsplic = post?.slice(0, 4)
    //const newsplic = post?.slice(4, 8)
    // console.log('newsplic', newsplic)








    return (



        <Container fluid>
            <Title title="Uppsala Mat" />
            <Row>

                <div className="Home_container_first">

                    <Carousel post={post} />


                    <SliderFood post={post} />

                    <BestFood />

                    <Search setSearchMessage={setSearchMessage} />

                    <ListFood
                        post={post}
                        setSearchMessage={setSearchMessage}
                    />
                    <ItemsCart
                        checkPost={checkPost}

                    />

                    <Cooks />

                    <SliderSingUp userInfo={userInfo} />



                </div>

            </Row>


        </Container>






    )
}



export default Home




/*

    const [offset, setOffset] = useState('')
    useEffect(() => {

        window.onscroll = () => {
            // console.log(window.scrollY)
            if (window.scrollY >= 372) {
                setOffset('add_scroll')
            } else {
                setOffset('')
            }
        }


    }, [offset])



    const HandleScroll = (e) => {
        e.preventDefault()

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

                <div className={offset ? "class_ONscroll add_scroll" : "class_ONscroll"} onClick={(e) => HandleScroll(e)}>
                <i className="fas fa-arrow-up"></i>
            </div>
*/