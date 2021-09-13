
import React from "react"
import { Container, Col, Row, Form } from "react-bootstrap"

import "./Footer.css"


const Footer = () => {




    return (

        <Container fluid className="container_color_footer">
            <Row  className="footer_first_class justify-content-center">
                <Col xs={12} sm={6}  md={3} log={3}>
                    <h1 className="container_color_footer_h1">Your Logo</h1>
                    <span>Your Taggline here</span>
                    <div className="container_color_footer_About">
                        <h1 className="container_color_footer_h1">About Us</h1>
                        <p>We want to help bring talanted students
                            and unique startups together</p>
                    </div>
                    <div className="container_color_footer_About">
                        <h1 className="container_color_footer_h1">Contact Us</h1>
                       <div className="Icons_row">
                       <i class="fas fa-phone-volume "></i>
                        <span className="router_all_icons">+91 999 38994 49</span>
                       </div>


                       <div className="Icons_row"> 
                       <i className="fas fa-envelope "></i>
                        <span className="router_all_icons"> Mahmoud.talat@gmail.com</span>
                       </div>

                    </div>
                </Col>

                <Col xs={12} sm={6} md={3}  log={3}>
                    <h1 className="container_color_footer_h1">Information</h1>
                  <div className="search_more_icons">
                  <span>More Search</span>
                    <span>Blog</span>
                    <span>Testimonials</span>
                    <span>Events</span>
                  </div>
                </Col>



                <Col  xs={12} sm={6} md={3}  log={3}>
                    <h1 className="container_color_footer_h1">Helpful Links</h1>
                    <div className="search_more_icons">
                    <span>Services</span>
                    <span>Supports</span>
                    <span>Terms & Condition</span>
                    <span>Privacy Policy</span>
                    </div>
       
                </Col>

                <Col xs={12} sm={6} md={3}  log={3}>
                    <h1 className="container_color_footer_h1">Subscribe More Info</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"  className="font_size_all"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} className="font_size_all" />
                        </Form.Group>
                        <button className="buuton_color_boot" size="sm">
                            Small button
                        </button>
                    </Form>
                </Col>

            </Row>
            <Row className="justify-content-center Footer_onder">
                <Col xs={12} md={6}  lg={6} >
                    <div className="icons_alle">
                        <span className="reutor_icons">
                        <i className="fab fa-facebook"></i>
                        </span>
                        <span className="reutor_icons">
                        <i className="fab fa-google"></i>
                        </span>

                        <span className="reutor_icons">
                        <i class="fab fa-twitter"></i>
                        </span>

                        <span className="reutor_icons">
                        <i class="fab fa-instagram-square"></i>
                        </span>

                    </div>
                </Col>

                <Col xs={12} md={6}  lg={6} >
                    <div className="icons_foller">
                        <span >
                            2021 @ Compay, All Right reserved
                        </span>

                    </div>
                </Col>


            </Row>

        </Container>

    )

}



export default Footer