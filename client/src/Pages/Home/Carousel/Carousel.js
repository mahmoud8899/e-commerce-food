
import "./CarouselItems.css"
import { Col, Row, Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Fragment } from "react"
import { Link } from "react-router-dom"
const CarouselItems = ({ post }) => {

    const [current, setCurrent] = useState(1)
    const maxcurrent = Number(10)
  //  const [sliderPostAll, setSliderPostAll] = useState(null)


    const newFilerPost = post?.slice(current - 1, current)
    // console.log(newFilerPost)
  //  console.log(post)



     

    useEffect(() => {

        if (current !== maxcurrent) {


            const newCurrent = setInterval(() => {

                setCurrent(prev => prev + 1)

            }, [9000])

            return () => clearInterval(newCurrent)

        } else {

            return setCurrent(1)
        }

    }, [maxcurrent, current])
    //console.log(current)

    return (



        <Row className="justify-content-center add_photo" >

            <div className="add_Color_post"></div>

            {newFilerPost?.map((list, listIndex) => (

                <Fragment key={listIndex}>
                    <Col xs={9} sm={12} md={6} lg={4} className="Home_Menu">
                        <div className="Home_Menu_text">

                            <h2 >Uppsala Mat</h2>

                            <div className="Minute_text_Home">
                                <span className="now_color">We Deliver best</span>
                                <span className="now_color">{list?.name}.</span>
                            </div>

                            <span className="text_Home_sp">
                                {list?.description}
                            </span>


                            <div className="menu_bottom_Home">
                                <Link className="add_link_all" to={`/product/${list?._id}`}>
                                    <div className="button_content_home">

                                        <span>Discover Menu</span>


                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </Link>

                                <div className="PRICE_content_Home">
                                    <span>Price</span>
                                    <span>{list?.prics} Kr</span>
                                </div>
                            </div>
                        </div>


                    </Col>
                    <Col xs={9} sm={12} md={6} lg={6} className="Home_Menu">
                        <div className="image_Home_image__div">
                            <Link className="add_link_all" to={`/product/${list?._id}`}>
                                <Image src={`./${list?.image?.[0]}`} className="image_Home_image" alt="hello Image" />
                            </Link>


                        </div>
                    </Col>


                </Fragment>

            ))

            }





        </Row>



    )
}



export default CarouselItems

