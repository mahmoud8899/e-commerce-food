import { Container, Row, Col, Image } from "react-bootstrap"
import "./Order.css"
import { orderId_action } from "../../redux/Action/Oder"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { format } from "timeago.js"
import Title from "../Title/Title"
const Order = ({ match }) => {


    const orderxp = match.params.id
    const dispatch = useDispatch()
    const orderid = useSelector((state) => state.orderid)
    const { orderuserid } = orderid

   // console.log(orderid)

    useEffect(() => {

        if (orderxp) {

            dispatch(orderId_action(orderxp))

        }
    }, [orderxp,dispatch])






    

    return (
        <Container>

            <Title title="My Order Shipping." />

            <Row>
                <Col xs={12} md={6} lg={6}>
                    <h1 className="my_order_now">My Order</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">

                <Col xs={12} md={10} lg={8} >

                    <div className="xp_order">

                        <div className="Order_List_list">
                            <h1 >Order # <span className="Order_List_list_color">{orderuserid?._id}</span></h1>

                            <div className="time_buy">

                                <i className="fas fa-clock"></i>
                                <span>{format(orderuserid?.createdAt)}</span>
                            </div>

                            <div className="Delivered">
                                <i className="fas fa-truck"></i>
                                <span className="add_delivered">Delivered</span>
                                <span className="add_delivered await_delivered">
                                    <i className="fas fa-clock"></i>
                                </span>

                            </div>



                            <p className="order_payment">pay Payment :
                                <span className="method_payment">{orderuserid?.paymentMethod}</span>
                                <span className="credit_card"><i className="fas fa-credit-card"></i></span>

                            </p>

                        </div>




                        <div className="MyAddress_Info">

                            <div className="MyAddress_Info_info">
                                <i className="far fa-user"></i>
                                <span>Username :</span>
                                <span>{orderuserid?.user?.username}</span>


                            </div>

                            <div className="MyAddress_Info_info">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>email :</span>
                                <span>{orderuserid?.user?.email}</span>

                            </div>


                        </div>




                        <h1 className="my_addres_info_bil">

                            <i class="fas fa-map-marked-alt"></i>
                            My Address
                        </h1>










                        {orderuserid?.shippingAdress?.map((add, addIndex) => (

                            <div className="MyAddress_Info" key={addIndex}>

                                <div className="MyAddress_Info_info">
                                   
                                    <span>{add?.firstName} </span>

                                    <span>{add?.lastName}</span>

                                </div>


                                <div className="MyAddress_Info_info">
                                    <i className="fas fa-mobile-alt"></i>
                                    <span>phone :</span>

                                    <span>+{add?.telephone}</span>

                                </div>

                                <div className="MyAddress_Info_info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>address :</span>
                                    <span>{add?.yourAddress}</span>
                                </div>


                                <div className="MyAddress_Info_info">
                                    <i className="far fa-building"></i>
                                    <span>city :</span>
                                    <span> {add?.city}</span>
                                </div>



                                <div className="MyAddress_Info_info">
                                    <i className="fas fa-mail-bulk"></i>

                                    <span>zip Code :</span>
                                    <span>{add?.zipCode}</span>

                                </div>


                            </div>

                        ))}




                        {orderuserid?.orderItems?.map((item, itemIndex) => (
                            <div className="Order_List_Order_Info" key={itemIndex}>
                                <Image src={`/${item?.image}`} className="items_oreder_info_Image" alt="" />

                                <span className="items_oreder_info"><span>name : </span>{item?.name}</span>

                                <span className="items_oreder_info" ><span>price : </span>{item?.prics} Kr</span>

                                <span className="items_oreder_info" ><span>Qty :</span>{item?.qty}</span>





                            </div>
                        ))}






                        <div className="items_total_info">
                            <span className="time_boking_info_info">
                                <span className="time_boking_info_info_time" >time boking :</span>
                                <span className="credit_card" >{format(orderuserid?.timeOrder)}</span>
                                <span className="credit_card"><i className="fas fa-truck"></i></span>
                            </span>
                        </div>







                        <div className="items_total_info">
                            <span className="">
                                {orderuserid?.orderItems?.length}x items
                            </span>

                        </div>

                        <div className="items_total_info">
                            <span className="Add_last">
                                <span>{orderuserid?.itemsPrics} Kr </span>
                            </span>
                        </div>

                    </div>



                </Col>
            </Row>
        </Container>
    )
}


export default Order