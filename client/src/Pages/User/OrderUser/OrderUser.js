import { Fragment } from "react"
import { Col, Image } from "react-bootstrap"
import "./OrderUser.css"
import { format } from "timeago.js"
import { RemoveOrderUser_Action } from "../../../redux/Action/Oder"
import { useDispatch } from "react-redux"
const OrderUser = ({ orderIDuser, userInfo, history }) => {


    const dispatch = useDispatch()



    // ruter to order id.
    const orderHandel = (e, id) => {
        e.preventDefault()
        history.push(`/order/shipping/${id}`)
    }


    // remove order id ... 
    const RrmoveOrder = (e, id) => {
        e.preventDefault()

        dispatch(RemoveOrderUser_Action(id))
        console.log('click', id)
    }



    return (
        <Fragment>

            <Col xs={12} md={12} lg={12} className="Order_List_User_Info">

                <h1>Order List #</h1>
            </Col>


            {!orderIDuser?.length -1 ? orderIDuser?.map((order, orderIndex) => (
                <Col xs={12} sm={6} md={6} lg={4} key={orderIndex} >

                    <div className="xp_order add_style">

                        <div className="Remove_order_user" onClick={(e) => RrmoveOrder(e, order?._id)}>
                            <i className="far fa-trash-alt"></i>
                        </div>

                        <div className="Order_List_list">
                            <h1 >Order # <span className="Order_List_list_color">{order?._id}</span></h1>

                            <div className="time_buy">

                                <i className="fas fa-clock"></i>
                                <span>{format(order?.createdAt)}</span>
                            </div>

                            <div className="Delivered">
                                <i className="fas fa-truck"></i>
                                <span className="add_delivered">Delivered</span>
                                <span className="add_delivered await_delivered">
                                    <i className="fas fa-clock"></i>
                                </span>

                            </div>

                            <p className="order_payment">pay Payment :
                                <span className="method_payment">{order?.paymentMethod}</span>
                                <span className="credit_card"><i className="fas fa-credit-card"></i></span>

                            </p>

                        </div>


                        <div className="MyAddress_Info">

                            <div className="MyAddress_Info_info">
                                <i className="far fa-user"></i>
                                <span>Username :</span>
                                <span>{order?.user?.username}</span>


                            </div>

                            <div className="MyAddress_Info_info">
                                <i className="fas fa-envelope-open-text"></i>
                                <span>email :</span>
                                <span>{order?.user?.email}</span>

                            </div>


                        </div>


                        {order?.orderItems?.map((buy, buyIndex) => (
                            <div className="Order_List_Order_Info" key={buyIndex}  >
                                <Image src={`/${buy?.image}`} className="items_oreder_info_Image" alt="xop hell" onClick={(e) => orderHandel(e, order?._id)} />

                                <span className="items_oreder_info"><span>name : </span>{buy?.name}</span>

                                <span className="items_oreder_info" ><span>price : </span>{buy?.price} Kr</span>

                                <span className="items_oreder_info" ><span>Qty :</span>{buy?.qty}</span>

                            </div>
                        ))}




                        <div className="items_total_info">
                            <span className="time_boking_info_info">
                                <span className="time_boking_info_info_time" >time boking :</span>
                                <span className="credit_card" >{format(order?.timeOrder)}</span>
                                <span className="credit_card"><i className="fas fa-truck"></i></span>
                            </span>
                        </div>







                        <div className="items_total_info">
                            <span className="">
                                {order?.orderItems?.length}x items
                            </span>

                        </div>

                        <div className="items_total_info">
                            <span className="Add_last">
                                <span>{order?.itemsPrics} Kr </span>
                            </span>
                        </div>

                    </div>



                </Col>

            ))
                :
                <Col xs={12} md={12} lg={12} className="Order_List_User_Info">


                  <h1>There are no items to buy now ...</h1> 
                </Col>
            }






        </Fragment>
    )
}



export default OrderUser


/*


*/