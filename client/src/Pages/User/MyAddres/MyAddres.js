
import { useEffect, useState } from "react"
import { Row, Col, Form, Alert } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { AddAdressUserAction } from "../../../redux/Action/Auth"
const MyAddress = ({ addressOpen, setAddressOpen, userInfo }) => {




    const dispatch = useDispatch()


    //console.log('userInfo', userInfo.email)
    const [current, setCurrent] = useState(5)
    const [alertid, setAlertid] = useState(false)
    const [createAddres, setCreateAddres] = useState(false)

   // console.log(current)

    //AddAdressUserAction
    const [firstName, setFirstName] = useState(userInfo?.Adress?.[0]?.firstName)
    const [lastName, setLastName] = useState(userInfo?.Adress?.[0]?.lastName)
    const [yourEmail, setYourEmail] = useState(userInfo?.Adress?.[0]?.yourEmail)
    const [telephone, setTelephone] = useState(userInfo?.Adress?.[0]?.telephone)
    const [yourAddress, setYourAddress] = useState(userInfo?.Adress?.[0]?.yourAddress)
    const [city, setCity] = useState(userInfo?.Adress?.[0]?.city)
    const [zipCode, setZipCode] = useState(userInfo?.Adress?.[0]?.zipCode)





    const [validated, setValidated] = useState(false);
    const HandelChangeAddres = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }


        if (userInfo.email !== yourEmail) {
            return setAlertid(true)
        } else {

            const addAdress = {
                firstName,
                lastName,
                yourEmail,
                telephone,
                yourAddress,
                city,
                zipCode
            }
            setAlertid(true)
            setCreateAddres(true)
            dispatch(AddAdressUserAction(
                addAdress
            ))
            //console.log('click', firstName, lastName, yourEmail, telephone, yourAddress, city, zipCode, userInfo.email)
            setValidated(true);
        }




    };


    useEffect(() => {
        if (alertid) {

            if (current === 1) {
                setCreateAddres(false)
                setCurrent(5)
                return setAlertid(false)
            }

            const conv = setInterval(() => {
                return setCurrent(prev => prev - 1)


            }, 1000)

            return () => clearInterval(conv)

        }
    }, [alertid, setAlertid, current])




    return (
        <Row >

            <Row>
                <Col className={alertid ? "cart_login_s open" : "cart_login_s"}>
                    {
                        alertid &&

                        <Alert variant="success">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <p>


                                {createAddres ?

                                    <p>
                                        Personal address saved, thank you

                                        <i className="fas fa-laugh-wink"></i>
                                    </p>


                                    :
                                    <p>
                                        You cannot change your personal name. If you want to change, go to change your email
                                        {userInfo.email} ...
                                        <br />
                                        <i className="fas fa-sad-cry"></i>

                                        <div style={{ color: 'white', fontSize: '20px' }}>{current}</div>

                                    </p>

                                }









                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy.
                            </p>
                        </Alert>
                    }
                </Col>
            </Row>

            <Col xs={12} md={12} lg={4} className={addressOpen ? "Add_open_Adress open" : "Add_open_Adress"}>
                <div className="test_code">


                    <p>
                        <span className="close_items" onClick={() => setAddressOpen(false)}>X</span>
                        <div className="Billing_Address">
                            <h1 className="Address_My">My Address</h1>

                            <Form validated={validated} onSubmit={(e) => HandelChangeAddres(e)}>
                                <Row>
                                    <Col>
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            placeholder="First name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            name="firstName"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control
                                            placeholder="Last name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            name="lastName"
                                            type="text"
                                            required
                                        />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control 
                                    type="email"
                                        placeholder="Your Email"
                                        value={yourEmail}
                                        onChange={(e) => setYourEmail(e.target.value)}
                                        name="yourEmail"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Telephone Number</Form.Label>
                                    <Form.Control
                                        placeholder="Telephone Number"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                        name="telephone"
                                        type="number"
                                        required
                                    />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Your Address</Form.Label>
                                    <Form.Control
                                        placeholder="Your Address"
                                        type="text"
                                        name="yourAddress"
                                        value={yourAddress}
                                        onChange={(e) => setYourAddress(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control
                                            placeholder="City"
                                            type="text"
                                            name="city"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            required

                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Zip Code</Form.Label>
                                        <Form.Control
                                            placeholder="Zip Code"
                                            type="text"
                                            name="zipCode"
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                            required

                                        />
                                    </Col>
                                </Row>


                                <button type="submit" className="button_add_to_cart"> Save </button>
                            </Form>





                        </div>

                    </p>
                </div>
            </Col>





        </Row>
    )
}


export default MyAddress