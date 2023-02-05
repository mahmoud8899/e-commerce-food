
import { Col, Container, Row, Form, Button, ProgressBar } from "react-bootstrap"
import "./Login.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { singUp_action } from "../../redux/Action/Auth"
import Title from "../Title/Title"
import { Fragment } from "react"
const SingUp = ({ history }) => {


    const [dataLogin, setDataLogin] = useState({
        email: '',
        firstname: '',
        lastname: '',
        password: "",
        telephone: '',
    })
    const [loginSet, setLoginSet] = useState(false)
    const [now, setNow] = useState(20)
    const dispatch = useDispatch()


    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin









    useEffect(() => {

        if (userInfo) history.push('/')


        if (loginSet) {

            if (now === 100) {

                setNow(0)
                dispatch(singUp_action(dataLogin))
                return setLoginSet(false)
            }

            const current = setInterval(() => {

                return setNow(prev => prev + 20)

            }, 1000)


            return () => clearInterval(current)


        }

    }, [userInfo, history, loginSet, now, dataLogin, dispatch])

    const [validated, setValidated] = useState(false);
    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        //   console.log('dataLogin', dataLogin)
        setLoginSet(true)
    };



    return (

        <Fragment>

            <Title title="Sing up" />
            <Container className="AddImage">
                <Row className="justify-content-center">
                    <Col xs={11} sm={12} md={6} lg={6} className="TestLogin">
                        <h1 className="Sign_in_createHq">Create an account</h1>
                        <div className="create_singUp">
                            <span className="create_singUp_user">
                                Already have an account ?

                            </span>
                            <span className="create_singUp_create">
                                <Link className="Link_login" to={`/login`}>
                                    sing in
                                </Link>
                            </span>
                        </div>




                        <div className={loginSet ? "onlyLoginUser open" : "onlyLoginUser"}>
                            <ProgressBar now={now} label={`${now}%`} visuallyHidden className="allt_login_d" />
                        </div>


                        <Form validated={validated} onSubmit={(e) => HandleLogin(e)}>
                
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    first name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="text"
                                        placeholder="first name"
                                        required
                                        onChange={(e) => setDataLogin({ ...dataLogin, firstname: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid username.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    last name
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="last name" required onChange={(e) => setDataLogin({ ...dataLogin, lastname: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid username.
                                </Form.Control.Feedback>
                            </Form.Group>

                            
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" required onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                telephone number
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="number" 
                                    placeholder="your phone number" required onChange={(e) => setDataLogin({ ...dataLogin, telephone: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" 
                                    required onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Password.
                                </Form.Control.Feedback>
                            </Form.Group>



                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit" className="Sign_Login_USER">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>





                    </Col>


                </Row>

            </Container>
        </Fragment>
    )
}


export default SingUp



/*

                        {error &&
                            <span className="error">

                                <Link className="class_likn" to={`/login`}>
                                    {error}
                                </Link>
                            </span>

                        }
*/