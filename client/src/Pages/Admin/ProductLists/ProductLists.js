import React, { Fragment, useState } from "react"
import { Row, Col, Image, Table } from "react-bootstrap"

import { removePost_Action } from "../../../redux/Action/Post"
import { useDispatch } from "react-redux"

const ProductLists = ({ productList, post, idPostId, setIdPostId, productxp }) => {



    const dispatch = useDispatch()


    // remove post.. 
    const HandleRemovePost = (e, id) => {
        e.preventDefault()
        console.log('click', id)
        dispatch(removePost_Action(id))
    }




    // open Edit product 
    const [openEdit, setOpenEdit] = useState(false)
    const EditValueProduct = (e, id) => {
        e.preventDefault()


        setIdPostId(id)
        setOpenEdit(true)
    



    }



















    return (
        <>
            {productList &&

                <Fragment>
                    <Row>
                        <Col xs={12} md={12} lg={12}>
                            <Table striped bordered hover size="sm" className="ADD_backgroun_color">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Image</th>
                                        <th>name</th>
                                        <th>Price</th>
                                        <th>quantity</th>
                                        <th>remove</th>
                                        <th>Edit</th>

                                    </tr>
                                </thead>
                                {post ? post?.map((postid, postidIndex) => (
                                    <tbody key={postidIndex}>
                                        <tr>
                                            <td>{postidIndex}</td>
                                            <td>
                                                <Image src={`/${postid?.image?.[0]}`} className="cart_Image_image" alt="" />

                                            </td>
                                            <td>{postid?.name} Kr</td>
                                            <td>{postid?.prics} Kr</td>
                                            <td>
                                                <span>{postid?.quantity}</span>
                                            </td>


                                            <td>
                                                <span className="Remove_Cart add_font" onClick={(e) => HandleRemovePost(e, postid?._id)}>
                                                    Remove
                                                </span>
                                            </td>
                                            <td>
                                                <span className="Remove_Cart add_font" onClick={(e) => EditValueProduct(e,postid?._id)
                                                   

                                                } >
                                                    Edit
                                                </span>

                                            </td>

                                        </tr>
                                    </tbody>


                                )) : null}

                            </Table>
                        </Col>


                    </Row>



                    {openEdit ?


                        <Row className="justify-content-center">
                            <Col xs={12} md={12} lg={4} className={openEdit ? "Add_open_Adress open" : "Add_open_Adress"}>
                                <div className="test_code">


                                    <p>
                                        <span className="close_items" onClick={() => setOpenEdit(false)}>X</span>
                                        <div className="Billing_Address">
                                            <h1 className="Address_My">update Product</h1>




                                            <h1 >{productxp?.name}</h1>
                                            <h1> {productxp?.prics}</h1>

                                        </div>

                                    </p>
                                </div>
                            </Col>





                        </Row>


                        : null}
                </Fragment>








            }

        </>
    )
}



export default ProductLists



/*

                                            <Form>
                                                <Row>
                                                    <Col>
                                                        <Form.Label>Name Product</Form.Label>
                                                        <Form.Control
                                                            value={name}
                                                            type="text"
                                                            onChange={(e) => setName(e.target.value)}
                                                            name="name"

                                                        />
                                                    </Col>

                                                </Row>
                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Label>quantity</Form.Label>
                                                    <Form.Control type="number" placeholder="quantity" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Label>prics</Form.Label>
                                                    <Form.Control type="number" placeholder="quantity" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Label>prics</Form.Label>
                                                    <Form.Control type="number" placeholder="quantity" />
                                                </Form.Group>



                                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                                    <Form.Label>Product information</Form.Label>
                                                    <Form.Control as="textarea" rows={3} className="font_size_all" />
                                                </Form.Group>

                                                <Form.Group className="mb-3" controlId="formGridAddress1">

                                                    <Form.Control type="file" placeholder="Upload File" />
                                                </Form.Group>




                                                <button type="submit" className="button_add_to_cart Add_with_width"> Change and Save </button>
                                            </Form>

*/