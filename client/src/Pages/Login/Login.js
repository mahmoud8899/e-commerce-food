import { Col, Container, Row, Form, Button, ProgressBar } from "react-bootstrap"
import "./Login.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { user_Login, Google_action } from "../../redux/Action/Auth"
import { useDispatch, useSelector } from "react-redux"
import GoogleLogin from 'react-google-login';
import Title from "../Title/Title"
const Login = ({ history, location }) => {


    // console.log('location',location)

    const loactionSrarch = location ? location.search.split('?')[1] : null
    //  console.log(loactionSrarch)
    const dispatch = useDispatch()

    const [dataLogin, setDataLogin] = useState({ email: '', password: '' })

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, error } = userLogin


    // counrt ... 
    const [current, setCurrent] = useState(0)
    const sliderIamge = ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
        
 


    const allImage = sliderIamge && sliderIamge?.length - 1

    // console.log(current)
    useEffect(() => {


        if (allImage) {

            if (current === allImage) {


                return setCurrent(0)

            }


            const inver = setInterval(() => {


                setCurrent(prev => prev + 1)

            }, 4000)




            return () => clearInterval(inver)



        }

    }, [current, allImage])



    const [now, setNow] = useState(20)
    const [loginSet, setLoginSet] = useState(false)

    //console.log('now', now)



    useEffect(() => {

        if (userInfo) {
            if (loactionSrarch) {
                history.push('/cart')

            } else {
                history.push('/')
            }




        }

    }, [userInfo, history, loactionSrarch])




    // Progress bars
    useEffect(() => {

        if (loginSet === true) {

            if (now === 100) {

                setNow(0)
                dispatch(user_Login(dataLogin))
                return setLoginSet(false)
            }


            const conv = setInterval(() => {
                setNow(prev => prev + 20)


            }, 1000)

            return () => clearInterval(conv)

        }

    }, [loginSet, now, dataLogin,dispatch])








    const [validated, setValidated] = useState(false);
    const HandleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        //  console.log('dataLogin', dataLogin)
        setLoginSet(true)
    };



    // login with google... 
    const responseGoogle = (res) => {

        if (res.profileObj.email || res.profileObj.name || res.profileObj.googleId || res.profileObj.imageUrl) {
            // console.log(res.profileObj.email, res.profileObj.name, res.profileObj.googleId, res.profileObj.imageUrl)

            dispatch(Google_action({
                email: res.profileObj.email,
                name: res.profileObj.name,
                googleId: res.profileObj.googleId,
                imageUrl: res.profileObj.imageUrl
            }))

        }



    }



    return (

        <>



            <Title title="Logo in" />
            <Container className="AddImage">
                <Row className="justify-content-center TestLogin">
                    <Col xs={11} sm={12} md={6} lg={6} >
                        <h1 className="Sign_in_createHq">Sign in</h1>
                        <div className="create_singUp">
                            <span className="create_singUp_user">
                                New User ?

                            </span>
                            <span className="create_singUp_create">
                                <Link className="Link_login" to={`/singup`}>
                                    Create an account
                                </Link>
                            </span>
                        </div>

                        {error &&
                            <span className="error">

                                <Link className="class_likn" to={`/login`}>
                                    {error}
                                </Link>
                            </span>

                        }

                        <div className={loginSet ? "onlyLoginUser open" : "onlyLoginUser"}>
                            <ProgressBar variant="success" now={now} label={`${now}%`} visuallyHidden className="allt_login_d" />
                        </div>
                        <Form validated={validated} onSubmit={(e) => HandleLogin(e)}>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Email
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" required onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Password
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" required onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value })} />
                                </Col>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid state.
                                </Form.Control.Feedback>
                            </Form.Group>



                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit" className="Sign_Login_USER">Sign in</Button>
                                </Col>
                            </Form.Group>
                        </Form>

                        <Col >
                            <div className="Login_gOOGLE_uSER">

                                <div className="google_login_login">

                                    <img src={`./Image/3.png`} className="iMAGR_login_fa" alt="heloc kf" />

                                    <span>
                                        continue with Facebook
                                    </span>

                                </div>
                                <div className="Facebook_login_login">
                                    <GoogleLogin
                                        clientId="835149893481-5h9ukujqrghbbghsl6g79gi8pptkbvuf.apps.googleusercontent.com"

                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                        className="xxxxx"


                                    />



                                </div>

                            </div>

                        </Col>



                    </Col>

                    <Col sm={12} lg={6} className="d-none d-lg-block" xs={{ order: 'first' }}>








                        <div className="Slider_me_Image">
                            <h1 className="Sign_in_createHq">welcome</h1>

                            <img src={`./Image/${sliderIamge[current]}`} className="Iamge_Login_slider" alt="hello " />
                            <span>We are so glad you are here together</span>
                        </div>







                    </Col>
                </Row>

            </Container>
        </>
    )
}


export default Login



/*

    const allImage = sliderIamge && sliderIamge?.length - 1

   // console.log(current)



    useEffect(() => {


        if (allImage) {

            if (current === allImage) {


                return setCurrent(0)

            }


            const inver = setInterval(() => {


                setCurrent(prev => prev + 1)

            }, 4000)




            return () => clearInterval(inver)



        }

    }, [current, allImage])

    // console.log(sliderIamge)
*/