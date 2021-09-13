import { useState } from "react"
import { Row, Col, Form } from "react-bootstrap"
import Title from "../../Title/Title"
import axios from "axios"
import _ from 'lodash';
import { Create_postAction } from "../../../redux/Action/Post"
import { useDispatch } from "react-redux"
const CreateProductOne = ({ createPord, setCreatePord }) => {


    const dispatch = useDispatch()



    const [postCreate, setPostCreate] = useState({ name: '', quantity: '', prics: '', description: '', sort: '' })
    const [uploadedImgs, setUplodedImgs] = useState([]);
    const [validated, setValidated] = useState(false);




    const CreatePost = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

      
     
     
        dispatch(Create_postAction({
            name: postCreate.name,
            prics: postCreate.prics,
            quantity: postCreate.quantity,
            description: postCreate.description,
            sort: postCreate.sort,
            image: uploadedImgs
        }))
     
      //  setPostCreate({ name: '', quantity: '', prics: '', description: '', sort: '' })
      //  setUplodedImgs([])
      
      //  console.log('uploadedImgs',  uploadedImgs)


    };






    const [isUploding, setUploding] = useState(true);
    const UploadingIamge = async (e) => {
        e.preventDefault()
        let { files } = e.target;

        let formData = new FormData();
        _.forEach(files, file => {
            formData.append('image', file);
        });


        setUploding(true)
        try {

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',

                }
            }
            const { data } = await axios.post(`/api/`, formData, config)
            //  console.log('data',data)
            setUplodedImgs(data)
            setUploding(false)
           


        } catch (error) {
            console.error(error)
            setUploding(false)

        }

    }



    return (
        <>

            <Title title="Create Post" />

            {createPord &&


                <Row className="justify-content-center">
                    <Col xs={12} md={12} lg={4} className={createPord ? "Add_open_Adress open" : "Add_open_Adress"}>
                        <div className="test_code">


                            <p>
                                <span className="close_items" onClick={() => setCreatePord(false)}>X</span>
                                <div className="Billing_Address">
                                    <h1 className="Address_My">update Product</h1>

                                    <Form validated={validated} onSubmit={(e) => CreatePost(e)}  >
                                        <Row>
                                            <Col>
                                                <Form.Label>Name Product</Form.Label>
                                                <Form.Control placeholder="First name" required onChange={(e) => setPostCreate({ ...postCreate, name: e.target.value })} />
                                            </Col>

                                        </Row>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>food type</Form.Label>
                                            <select className="pet-select" name="pets" id="pet-select" required
                                                 onChange={(e) => setPostCreate({ ...postCreate, sort: e.target.value })}
                                            >
                                                <option value="">--Please choose an option--</option>
                                                <option value="Chinese">Chinese</option>
                                                <option value="rice">rice</option>
                                                <option value="meat">meat</option>
                                                <option value="fish">fish</option>
                                                <option value="salad">salad</option>
                                                <option value="vegan">vegan</option>
                                                <option value="chicken">chicken</option>
                                                
                                            </select>
                                        </Form.Group>



                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>quantity</Form.Label>
                                            <Form.Control type="number" placeholder="quantity" required onChange={(e) => setPostCreate({ ...postCreate, quantity: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>prics</Form.Label>
                                            <Form.Control type="number" placeholder="prics" required onChange={(e) => setPostCreate({ ...postCreate, prics: e.target.value })} />
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Product information</Form.Label>
                                            <Form.Control as="textarea" rows={3} className="font_size_all" required onChange={(e) => setPostCreate({ ...postCreate, description: e.target.value })} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress1">

                                            <Form.Control
                                                type="file"
                                                placeholder="Upload File"
                                                required
                                                multiple
                                                onChange={UploadingIamge}
                                                name="image"


                                            />
                                            {isUploding && <span>Loading</span>}
                                        </Form.Group>
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid state.
                                        </Form.Control.Feedback>










                                        <button type="submit" className="button_add_to_cart Add_with_width"> Change and Save </button>
                                    </Form>





                                </div>

                            </p>
                        </div>
                    </Col>





                </Row>



            }

        </>
    )
}


export default CreateProductOne
