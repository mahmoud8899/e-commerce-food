import {  useState } from "react"
import { Row, Col, Form } from "react-bootstrap"
import { ChangeLoaclStorgeUser } from "../../../redux/Action/Auth"
import { useDispatch } from "react-redux"

const ChangeName = ({ addressOpen, setAddressOpen, userInfo }) => {





    const dispatch = useDispatch()


    const [user, setUser] = useState(userInfo?.username)
    const [email, setEmail] = useState(userInfo?.email)



    const HandleChangel = (e) => {
        e.preventDefault()
      //  console.log('click', email, user)
        dispatch(ChangeLoaclStorgeUser({email, username :user}))
    }


  


    return (
        <>

            {addressOpen &&

                <Row className="justify-content-center">
                    <Col xs={12} md={12} lg={4} className={addressOpen ? "Add_open_Adress open" : "Add_open_Adress"}>
                        <div className="test_code">


                            <p>
                                <span className="close_items" onClick={() => setAddressOpen(false)}>X</span>
                                <div className="Billing_Address">
                                    <h1 className="Address_My">My Address</h1>

                                    <Form onSubmit={HandleChangel}  >
                                        <Row>
                                            <Col>
                                                <Form.Label>Your name</Form.Label>
                                                <Form.Control placeholder="First name" type="text" value={user} name="user" onChange={(e) => setUser(e.target.value)} />
                                            </Col>

                                        </Row>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"  name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </Form.Group>


                                        <button type="submit" className="button_add_to_cart Add_with_width"> Save </button>
                                    </Form>





                                </div>

                            </p>
                        </div>
                    </Col>





                </Row>
            }


        </>
    )
}



export default ChangeName