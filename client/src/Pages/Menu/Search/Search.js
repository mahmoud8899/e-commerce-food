import { Container, Row, Col, Form } from "react-bootstrap"


const Search = ({ setSearchMessage }) => {



    return (
        <Container>
            <Row>
                <Col xs="12" md="6" lg="4">
                    <Form className="form_class">
                        <Form.Group className="mb-3 search_menu" controlId="formBasicEmail">
                            <Form.Label className="Search_text">Search</Form.Label>
                            <Form.Control type="email" placeholder="Search here good food" className="search_input" onChange={(e) => setSearchMessage(e.target.value)} />
                            <div className="div_search">
                                <i className="fas fa-search"></i>
                            </div>

                        </Form.Group>



                    </Form>
                </Col>
            </Row>
        </Container>
    )
}







export default Search