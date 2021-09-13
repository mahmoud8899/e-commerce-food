import { Fragment, useEffect, useState } from "react"
import { Col, Row, Table, Form } from "react-bootstrap"
import { bliAction } from "../../../redux/Action/Auth"
import { useDispatch } from "react-redux"
import "./ListUsersItems.css"


const ListUsersItems = ({ listUsers, list, userInfo }) => {


    const dispatch = useDispatch()
    // open change user email and first name .. 
    const [infoOpenChangeUserId, setInfoOpenChangeUserId] = useState(false)
    const [filterid, setFilterid] = useState()



    // remove user id from page .. 
    const RemoveUsers = (e, id) => {
        e.preventDefault()
        //console.log('click remove...... userId', id)
        dispatch(bliAction({ userId: id }))
    }





    // remove Open 

    const OpenChangeUserId = (e, id) => {
        //  e.preventDefault()

        setFilterid(id ? list?.filter((ux) => ux?._id === id) : null)





        if (id && infoOpenChangeUserId) {

            return setInfoOpenChangeUserId(false)

        } else {

            return setInfoOpenChangeUserId(true)
        }


    }

    useEffect(() => {


    }, [filterid])

    // console.log('checkFilter', filterid?.[0]?.username, `${filterid?.[0]?.email}`)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [checkAdmin, setCheckAdmin] = useState(false)
    // console.log('checkAdmin', checkAdmin)

    const HandelIsAdmin = (e, id) => {
        e.preventDefault()

        if (checkAdmin) {
            setCheckAdmin(false)
            dispatch(bliAction({ addAmin: id }))
        } else {
            setCheckAdmin(true)
            dispatch(bliAction({ addAmin: id }))
        }




    }

    return (
        <>

            {listUsers &&

                <Fragment>


                    <Row className="justify-content-center">
                        <Col xs={12} md={12} lg={12}>
                            <Table striped bordered hover size="sm" className="ADD_backgroun_color">
                                <thead>
                                    <tr>
                                        <th>#</th>

                                        <th>UserName</th>
                                        <th>isAdmin</th>
                                        <th>remove</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                {userInfo &&
                                    list?.map((user, userIndex) => (

                                        userInfo?._id === user?._id ? null :
                                            <tbody key={userIndex}>
                                                <tr>
                                                    <td>{userIndex}</td>

                                                    <td>
                                                        <span>{user?.username}</span>

                                                    </td>
                                                    {user?.isAdmin ? <td>Yes</td> : <td>No</td>}

                                                    <td>
                                                        <span className="Remove_Cart add_font" onClick={(e) => RemoveUsers(e, user?._id)}>
                                                            Remove
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className="Remove_Cart add_font" onClick={(e) => OpenChangeUserId(e, user?._id)}>
                                                            Update
                                                        </span>
                                                    </td>
                                                </tr>

                                            </tbody>
                                    ))

                                }


                            </Table>
                        </Col>
                    </Row>


                    {infoOpenChangeUserId &&

                        <Row className="justify-content-center">
                            <Col xs={12} md={12} lg={4} className={infoOpenChangeUserId ? "Add_open_Adress open" : "Add_open_Adress"}>
                                <div className="test_code">


                                    <p>
                                        <span className="close_items" onClick={() => setInfoOpenChangeUserId(false)}>X</span>
                                        <div className="Billing_Address">
                                            <h1 className="Address_My">My Address</h1>


                                            <Form >
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Your name</Form.Label>
                                                        <Form.Control
                                                    
                                                            type="text"
                                                            placeholder={filterid?.[0]?.username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            value={username}
                                                        />
                                                    </Col>

                                                    

                                                </Row>
                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        
                                                        name="email"
                                                        placeholder={filterid?.[0]?.email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        value={email}
                                                    />

                                                </Form.Group>

                                                <Col xs="auto" className="CheckOut_first">
                                                    <span
                                                        className={filterid?.[0]?.isAdmin === checkAdmin ? "CheckOut color" : "CheckOut"}
                                                        onClick={(e) => HandelIsAdmin(e, filterid?.[0]?._id)}
                                                    >

                                                    </span>
                                                    <span className="CheckOut_text">
                                                        is Admin
                                                    </span>
                                                </Col>


                                                <button type="submit" className="button_add_to_cart Add_with_width"> Change and Save </button>
                                            </Form>







                                        </div>

                                    </p>
                                </div>
                            </Col>





                        </Row>


                    }



                </Fragment>


            }






        </>
    )
}



export default ListUsersItems