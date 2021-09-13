import { Fragment, useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"




import "./Address.css"
import { useDispatch } from "react-redux"
import { Addares_Action } from "../../../redux/Action/Cart"

const Address = ({ShippingAdress}) => {



    const dispatch = useDispatch()


    const [closChange, setClosChange] = useState(false)
    const [firstOpen, setFirstOpen] = useState(true)
    const [closAdress, setClosAdress] = useState(false)

    const [firstName, setFirstName] = useState(ShippingAdress?.firstName)
    const [lastName, setLastName] = useState(ShippingAdress?.lastName)
    const [yourEmail, setYourEmail] = useState(ShippingAdress?.yourEmail)
    const [telephone, setTelephone] = useState(ShippingAdress?.telephone)
    const [yourAddress, setYourAddress] = useState(ShippingAdress?.yourAddress)
    const [city, setCity] = useState(ShippingAdress?.city)
    const [zipCode, setZipCode] = useState(ShippingAdress?.zipCode)


    // username and phone... 
    const [validated, setValidated] = useState(false);
    const HandleUserName = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        dispatch(Addares_Action({ firstName, lastName, yourEmail, telephone, yourAddress, city, zipCode }))
        setFirstOpen(false)
        setClosChange(true)


    }


    // 
    const HandleAdress = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        dispatch(Addares_Action({ firstName, lastName, yourEmail, telephone, yourAddress, city, zipCode }))

        setClosAdress(true)
    }



    return (
        <Fragment>
            <div className="first_class_info_user">


                {firstOpen &&
                    <Form validated={validated} onSubmit={(e) => HandleUserName(e)}>

                        <Row>
                            <Col>
                                <Form.Group className="mb-1" controlId="formBasicEmail">
                                    <i className="far fa-user login_user_icons"></i>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        required
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}

                                    />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-1" controlId="formBasicEmail">

                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        required
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}

                                    />
                                </Form.Group>
                            </Col>
                        </Row>


                        <Form.Group className="mb-2" controlId="formBasicPassword">
                            <i className="fas fa-mobile-alt login_user_icons"></i>
                            <Form.Label>Phone Number</Form.Label>

                            <Form.Control
                                type="number"
                                placeholder="Phone Number"
                                required
                                name="telephone"
                                onChange={(e) => setTelephone(e.target.value)}
                                value={telephone}
                            />
                        </Form.Group>
                        <Button className="Change_Edit_submit" type="submit">
                            Save
                        </Button>

                    </Form>

                }


                {closChange &&

                    <Fragment>
                        <div className="check_user_agree">
                            <span className="router_first_Adress">A</span>
                            <span className="router_login">Login</span>
                            <i class="fas fa-check"></i>
                        </div>


                        <div className="user_info_name">
                            <p>{ShippingAdress?.firstName} {ShippingAdress?.lastName}</p>
                            <p className="telefon_style">+46{ShippingAdress?.telephones}</p>
                            <p className="Change_Edit" onClick={() => {
                                setFirstOpen(true)
                                setClosChange(false)
                            }}> Change </p>
                        </div>
                    </Fragment>

                }

            </div>


            <div className="first_Shiooing_address">

                {closAdress ?

                    <Fragment>
                        <div className="check_user_agree">
                            <span className="router_first_Adress">B</span>
                            <span className="router_login">Shipping address</span>
                            <i className="fas fa-check"></i>
                        </div>
                        <div className="first_Shiooing_address_adress">
                            <p>
                                {ShippingAdress?.city} ,
                                {ShippingAdress?.yourAddress},
                                {ShippingAdress?.yourEmail},
                                {ShippingAdress?.zipCode}...


                            </p>

                            <p className="Change_Edit" onClick={() => setClosAdress(false)}>
                                Change
                            </p>
                        </div>
                    </Fragment>

                    :


                    <Form validated={validated} onSubmit={(e) => HandleAdress(e)}>
                        <Form.Group className="mb-1" controlId="formGridAddress1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={(e) => setYourEmail(e.target.value)}
                                value={yourEmail}
                                name="yourEmail"

                            />
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formGridAddress1">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control
                                placeholder="1234 Main St"
                                required
                                onChange={(e) => setYourAddress(e.target.value)}
                                value={yourAddress}
                                name="address"

                            />
                        </Form.Group>
                        <Row className="marrgin_bottom_form">
                            <Col>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    placeholder="City"
                                    required
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                    name="city"

                                />
                            </Col>
                            <Col>
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control
                                    placeholder="Zip Code"
                                    required
                                    onChange={(e) => setZipCode(e.target.value)}
                                    value={zipCode}
                                    name="zipCode"

                                />
                            </Col>
                        </Row>
                        <Button className="Change_Edit_submit" type="submit">
                            Save
                        </Button>
                    </Form>


                }




            </div>

        </Fragment>
    )
}


export default Address



/*


*/