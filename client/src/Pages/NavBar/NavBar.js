

import "./NavBar.css"
import { Link } from "react-router-dom"
import { Container, Row, Navbar, Nav } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Action_logout } from "../../redux/Action/Auth"
const NavBar = () => {



    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


     // add cart to
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    // add like... 
    const like = useSelector((state) => state.like)
    const { likeCart } = like

    const dispatch = useDispatch()


    useEffect(() => {

    }, [userInfo])




    const HandlLogoUt = (e) => {
        e.preventDefault()
        dispatch(Action_logout())
    }



    return (
        <Container fluid className="first_ba" >
            <Row>

                <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" className="coloexsss">
                 
                        <Navbar.Brand href="#home">
                            <span className="First_NavBarList_writ_name">
                                <Link className="HoME_link_Home" to={`/`} >
                                <i className="fas fa-utensils First_NavBarList_writ_name_lastName"></i> Uppsala 
                                    <span className="First_NavBarList_writ_name_lastName">Mat</span>
                                </Link>
                            </span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <div className="Link_Home_navBar_list">

                                  {userInfo ?
                                  
                                  
                                    userInfo.isAdmin ?
                                    <Link className="Link_Home_navBar" to={`/admin/profile/`}>
                                        profile
                                    </Link>
                                
                                
                                    :
                                    <Link className="Link_Home_navBar" to={`/profile/`}>
                                        profile
                                    </Link>
                                 : null

                                  }
                                    <Link className="Link_Home_navBar" to={`/menu/`}>
                                        Menu
                                    </Link>
                                </div>

                            </Nav>
                            <Nav>
                                <ul className="List_Singup">


                                <li className="List_Order">
                                    <Link className="order_all" to={`/like/`}>
                                        {likeCart?.length === 0 ?
                                            null
                                            :
                                            <div className="List_Order_cuuent">
                                                <span>{likeCart?.length}</span>
                                            </div>
                                        }
                                        
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                    </li>

                                    <li className="List_Order">
                                    <Link className="order_all" to={`/cart/`}>
                                        {cartItems?.length === 0 ?
                                            null
                                            :
                                            <div className="List_Order_cuuent">
                                                <span>{cartItems?.length}</span>
                                            </div>
                                        }
                                        
                                            <i className="fas fa-shopping-basket"></i>
                                        </Link>
                                    </li>

                                    <li className="List_SingUp_Li">

                                        {userInfo ?

                                            <div className="Link_no" onClick={(e) => HandlLogoUt(e)}>
                                                <span className="" >Logo ut</span>
                                            </div>

                                            :

                                            <Link className="Link_no" to={'/login'}>
                                                <span className="">Logo in</span>
                                            </Link>

                                        }


                                    </li>
                                </ul>

                            </Nav>
                        </Navbar.Collapse>
                  
                </Navbar>
            </Row>





        </Container>

    )

}


export default NavBar



/*

<i class="fas fa-heart"></i>

                <Navbar expand="lg" fixed="top"  className={offset && 'aDD_COLOE_navBAR'} >

                    <div className="First_NavBarList_writ">
                        <span className="First_NavBarList_writ_name">
                            <Link className="HoME_link_Home" to={`/`} >
                                Uppsala <span className="First_NavBarList_writ_name_lastName">Mat</span>
                            </Link>
                        </span>
                    </div>






                    <div className={sliderNavBar ? "navBar_list_Login open" : "navBar_list_Login"}>
                        <ul >
                            <li>
                                <Link className="Link_Home_navBar" to={`/`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="Link_Home_navBar_color" to={`/profile/`}>
                                    profile
                                </Link>
                            </li>
                            <li>

                            <Link className="Link_Home_navBar_color" to={`/About/`}>
                            Menu
                                </Link>
                                </li>
                            <li>
                                <Link className="Link_Home_navBar_color" to={`/About/`}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className="Link_Home_navBar_color" to={`/contact/`}>
                                    contact Us
                                </Link>
                            </li>


                        </ul>

                        <ul className="List_Singup">
                            <li className="List_Order">
                                <div className="List_Order_cuuent">
                                    <span>4</span>
                                </div>
                                <Link className="order_all" to={`/cart/`}>
                                    <i className="fas fa-shopping-basket"></i>
                                </Link>
                            </li>

                            <li className="List_SingUp_Li">

                                <Link className="Link_no" to={'/singup'}>
                                    <span className="">Sing Up</span>
                                </Link>
                            </li>
                        </ul>


                    </div>





                    <span className={sliderNavBar ? "min open" : "min"} onClick={HandleNavBar}>
                        <span className="xx"></span>
                        <span className="xx"></span>
                        <span className="xx"></span>
                    </span>


                </Navbar>

                   const [sliderNavBar, setSliderNavBar] = useState(false)


    // open NavBar...
    const HandleNavBar = () => {

        if (sliderNavBar) {
            setSliderNavBar(false)
        } else {
            setSliderNavBar(true)
        }

    }
    const [offset, setOffset] = useState('')

    useEffect(() => {

        window.onscroll = () => {

            //   console.log(window.scrollY)

            if (window.scrollY >= 90) {
                setOffset('aDD_COLOE_navBAR')
            } else {
                setOffset('')
            }
        }

    }, [offset])


*/