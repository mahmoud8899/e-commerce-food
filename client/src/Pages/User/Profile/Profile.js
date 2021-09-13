
import { Container, Row, Col } from "react-bootstrap"
import "./Profile.css"

import React, { useEffect, useState } from "react"
import Title from "../../Title/Title"
import NavBarProfile from "../NavBarProfile/NavBarProfile"
import OrderUser from "../OrderUser/OrderUser"
import MyAddress from "../MyAddres/MyAddres"
import { orderIDAction } from "../../../redux/Action/Oder"
import { useDispatch, useSelector } from "react-redux"
import Search from "../../Menu/Search/Search"





const Profile = ({ history }) => {



    const dispatch = useDispatch()

    const [searchMessage, setSearchMessage] = useState([])

    // privat order id... 
    const orderuser = useSelector((state) => state.orderuser)
    const { orderIDuser } = orderuser



     // return succes remove order.
    const removeOder = useSelector((state) => state.removeOder)
    const { success:removeSuccess } = removeOder



    // user info...
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin



    const [addressOpen, setAddressOpen] = useState(false)


    useEffect(() => {

        if(userInfo){
            dispatch(orderIDAction())
        }else{

            history.push('/')

        }


        


    }, [dispatch,removeSuccess,history,userInfo])




    return (
        <Container fluid>

            <Title title={`My Profil - ${userInfo?.username}`} />
            <Row className="justify-content-center ass_test" >


                <NavBarProfile
                    setAddressOpen={setAddressOpen}
                    userInfo={userInfo}
                    history={history}
                />



                <Row>
                    <Col xs={12} sm={8} md={12} lg={12}>
                        <Search
                            setSearchMessage={setSearchMessage}

                        />
                    </Col>
                </Row>

                {searchMessage &&  <h1>not work</h1>}


                <OrderUser
                    orderIDuser={orderIDuser}
                    userInfo={userInfo}
                    history={history}

                />





            </Row>




            <MyAddress
                addressOpen={addressOpen}
                setAddressOpen={setAddressOpen}
                userInfo={userInfo}
            />






        </Container>
    )
}


export default Profile



/*











  <div  className={addressOpen ? "Add_open_Adress open" : "Add_open_Adress"}>
                        <Form>
                            <Row className="justify-content-center">
                                <Col>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control placeholder="City" />
                                </Col>
                                <Col>
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control placeholder="Zip Code" />
                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Telephone Number</Form.Label>
                                <Form.Control placeholder="Telephone Number" />
                            </Form.Group>
                        </Form>


                    </div>
*/