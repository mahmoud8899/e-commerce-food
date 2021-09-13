import "./SliderSingUp.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
const SliderSingUp = ({ userInfo }) => {



    return (
        <Container>
            <Row className="justify-content-center">

                {userInfo ?
                    null
                    :
                    <Col xs={10} md={10} lg={10} className="Add_singup_redirest">

                        <h1>Ready To Start ?</h1>

                        <div className="Add_container_box">
                            <span className="Add_container_box_text">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed eiusmod tempor
                            </span>

                            <span className="Add_container_box_singup">

                                <Link className="sing_up_link" to={`/singup/`}>
                                    sign up
                                </Link>

                            </span>
                        </div>
                    </Col>


                }


            </Row>
        </Container>
    )


}



export default SliderSingUp