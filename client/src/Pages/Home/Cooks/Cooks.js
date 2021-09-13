import "./Cooks.css"
import { Container, Row, Col, Image } from "react-bootstrap"



const Cooks = () => {


    return (
        <Container>
            <Row className="justify-content-center cooks_info_list_first">
                <h1>Who cooks food for you?</h1>


                <Col xs={12} md={6} lg={6} className="bottom_px" >


                    <div className="cooks_info_list">
                       
                       <div className="cooks_info_list_top">
                       <Image src={`../Image/008.jpg`} className="cooks_info_list_Image" alt="" />
                        <div className="Info_name_cooks">
                            <span>Mahmoud</span>
                            <span>Cook</span>
                        </div>
                       </div>

                        <div className="cooks_info_list_top_text">
                            The CW’s All American is a heartfelt
                            drama that follows the story of Spencer
                            James, a young black man from a low-income
                            Los Angeles neighborhood who gets
                            recruited to play football
                            for the Beverly Hills High School team.
                        </div>
                    </div>

                </Col>

                <Col xs={12} md={6} lg={6} className="bottom_px" >


                    <div className="cooks_info_list">
                       
                       <div className="cooks_info_list_top">
                       <Image src={`../Image/007.jpg`} className="cooks_info_list_Image" alt="" />
                        <div className="Info_name_cooks">
                            <span>Mahmoud</span>
                            <span>Cook</span>
                        </div>
                       </div>

                        <div className="cooks_info_list_top_text">
                            The CW’s All American is a heartfelt
                            drama that follows the story of Spencer
                            James, a young black man from a low-income
                            Los Angeles neighborhood who gets
                            recruited to play football
                            for the Beverly Hills High School team.
                        </div>
                    </div>

                </Col>



            </Row>
        </Container>
    )
}


export default Cooks