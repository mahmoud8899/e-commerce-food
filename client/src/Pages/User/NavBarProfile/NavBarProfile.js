import { Col } from "react-bootstrap"


const NavBarProfile = ({ setAddressOpen, userInfo, history }) => {



    const HandleHomePage = (e) => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <Col xs={12} md={12} lg={12} className="Profile_User" >
          
                
                    <ul className="List_user_profil">

                        <li onClick={(e) => HandleHomePage(e)}>
                            <i className="fas fa-home"></i>

                            <span className="add_color_style">Home</span>

                        </li>


                        <li>
                            <i className="far fa-user"></i>
                            <span className="add_color_style">Your Wlacom :</span>
                            <span className="add_color_style">{userInfo?.username}</span>

                        </li>

                        <li onClick={() => setAddressOpen(true)}  >
                            <i className="fas fa-map-marked-alt"></i>
                            <span className="add_color_style">My Adress</span>
                        </li>

                        <li>
                            <i className="fas fa-utensils"></i>
                            <span className="add_color_style"> My Order</span>

                        </li>



                    </ul>

             


         


        </Col>
    )

}

export default NavBarProfile