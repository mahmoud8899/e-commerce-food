
import "./BestFood.css"
import { Container, Row, Col } from "react-bootstrap"

const BestFood = () => {



    return (
        <Container>
            <Row className="justify-content-center add_content_h1" >
                <h1>Why Choose us ?</h1>
                <Col xs={6} md={3} lo={3}>
                    <div className="Food_fresh ">
                        <i className="fas fa-lemon"></i>
                        <h1>Fresh Food</h1>
                        <span>
                            Best Cooks And Best Delivery Guys All At Your Service
                            .Hot Tasty Food Will Reach You 20 Mins.
                        </span>
                    </div>
                </Col>

                <Col xs={6} md={3} lo={3}>
                    <div className="Food_fresh ">
                    <i className="fas fa-mortar-pestle"></i>
                        <h1>Fresh Food</h1>
                        <span>
                            Best Cooks And Best Delivery Guys All At Your Service
                            .Hot Tasty Food Will Reach You 20 Mins.
                        </span>
                    </div>
                </Col>


                <Col xs={6} md={3} lo={3}>
                    <div className="Food_fresh">
                    <i className="fas fa-check"></i>
                   
                        <h1>Best offer</h1>
                        <span>
                            Best Cooks And Best Delivery Guys All At Your Service
                            .Hot Tasty Food Will Reach You 20 Mins.
                        </span>
                    </div>
                </Col>

            </Row>
        </Container>
    )

}


export default BestFood