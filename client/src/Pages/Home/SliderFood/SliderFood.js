import "./SliderFood.css"
import { Container, Row, Col, Image } from "react-bootstrap"
import React, {  useState } from "react"
import {Link} from "react-router-dom"
import { AddCart_Action } from "../../../redux/Action/Cart"
import { useDispatch } from "react-redux"
import {ImageUrl, TheSlice} from '../../../Utils/Url'



const SliderFood = (props) => {
const { post } = props

     const qty = Number(1)
     const dispatch = useDispatch()
    const [currentLeft, setCurrentLeft] = useState(0)
    const [currentRight, setCurrentRight] = useState(4)
    //  const [sliderPost, setSliderPost] = useState()


    //


    const currenLingth = post?.length

   // console.log('currentRight', currentRight)


    const newsplic = post?.slice(currentLeft, currentRight)

    // console.log(newsplic)

    // left on click...   
    const HandleLeft = (e) => {
        e.preventDefault()
        setCurrentRight(prev => prev - 4)
        setCurrentLeft(prev => prev - 4)

    }



    // right on lick 
    const HandleRight = (e, red) => {
        e.preventDefault()
        setCurrentRight(prev => prev + 4)
        setCurrentLeft(prev => prev + 4)

    }



     // add cart 
     const HandleAddTOcart = (e,id)=>{
         e.preventDefault()
         if(qty){
            
            dispatch(AddCart_Action(id, qty))
         }
        
     }





    return (
        <Container>

            <Row >
                <Col>
                    <div className="Top_sLIDER_Image">
                        <h1>Hot Desserts</h1>
                        <div className="Top_sLIDER_Image_next">

                            <i className={currentLeft === 0 ? "fas fa-arrow-left add_color_null" : "fas fa-arrow-left"} value={currentLeft} onClick={(e) => HandleLeft(e, currentLeft)} ></i>
                            <i className={currentRight >= currenLingth ? "fas fa-arrow-right add_color_null" : "fas fa-arrow-right"} value={currentRight} onClick={(e) => HandleRight(e, currentRight)} ></i>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="botton_xp ">


                {newsplic?.map((slider, sliderIndex) => (
                    <Col xs={6} md={4} lg={3} key={sliderIndex} >
                        <div className="Cart_slider_cart">
                          <Link to={`/product/${slider?._id}`} className="link_product">
                          <Image src={`${ImageUrl}${slider?.image}`} className="Cart_slider_Image" alt="" />
                          </Link>

                            <div className="info_text_and_add">
                                <span>{TheSlice(slider?.name)}</span>
                                <span>{slider.prices} Kr</span>

                                <div className="Icons_Add_Cart" onClick={(e)=> HandleAddTOcart(e,slider)}>
                                    <i className="fas fa-plus"></i>

                                </div>

                            </div>

                        </div>

                    </Col>
                ))}












            </Row>
        </Container>
    )
}


export default SliderFood