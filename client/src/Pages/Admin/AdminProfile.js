import { Container, Row, Col } from "react-bootstrap"
import "./AdminProfile.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ListUsersItems from "./ListUsersItems/ListUsersItems"
import ProductLists from "./ProductLists/ProductLists"
import CreateProductOne from "./CreateProductOne/CreateProductOne"
import ChangeName from "./ChangeName/ChangName"
import { useSelector, useDispatch } from "react-redux"
import { ListUser } from "../../redux/Action/Auth"
import { ShowCart_action ,product_IDAction } from "../../redux/Action/Post"
const AdminProfile = ({ history }) => {



    const dispatch = useDispatch()
    const [addressOpen, setAddressOpen] = useState(false)

    const [listUsers, setListUsers] = useState(false)
    const [productList, setProductList] = useState(false)
    const [createPord, setCreatePord] = useState(false)


    // user id... 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin
    //console.log(userLogin)

    // change user id.. 
    const changeuser = useSelector((state) => state.changeuser)
    const { changeSucess } = changeuser

    // users list 
    const listID = useSelector((state) => state.listID)
    const { list } = listID
    // console.log('list',list)

    const bliID = useSelector((state) => state.bliID)
    const { bli } = bliID

    const postID = useSelector((state) => state.postID)
    const { post } = postID

    const removePost = useSelector((state) => state.removePost)
    const { success: removesuccess } = removePost

    // console.log(post)

    useEffect(() => {

        if (productList || removesuccess) {
            dispatch(ShowCart_action())
        }



    }, [dispatch, productList, removesuccess])


    useEffect(() => {

        if (!userInfo?.isAdmin) return history.push('/')


        dispatch(ListUser())



    }, [userInfo, history, changeSucess, dispatch])





    // user list... 
    useEffect(() => {

        if (bli) {
            dispatch(ListUser())
        }

    }, [bli, dispatch])



    // open List User 
    const OpenListUser = (e) => {
        e.preventDefault()
        if (listUsers) {
            return setListUsers(false)
        } else {
            return setListUsers(true)

        }
    }


    // open list products 
    const OpenAllProduct = (e) => {
        e.preventDefault()
        if (productList) {
            return setProductList(false)
        } else {
            return setProductList(true)

        }
    }


    // open list create Product 
    const OpenCreateProduct = (e) => {
        e.preventDefault()
        if (createPord) {
            return setCreatePord(false)
        } else {
            return setCreatePord(true)

        }
    }







    // add MyAdress  = ... 
    const OpenMyAdress = (e) => {
        e.preventDefault()
        if (addressOpen) {
            return setAddressOpen(false)
        } else {
            return setAddressOpen(true)

        }
    }


  
    const [idPostId, setIdPostId] = useState()
    const product = useSelector((state) => state.product)
    const { productxp } = product
    

    useEffect(() => {
        if (idPostId ) {
            dispatch(product_IDAction(idPostId))
        // setNameid(productxp?.name)
        }

    }, [idPostId, setIdPostId, dispatch])

 //   console.log('name',nameid)



    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={12} lg={12} >
                    <div className="Profile_User">

                        <ul className="List_user_profil">



                            <li>
                                <Link className="Link_Home" to={`/`}>
                                    Home
                                </Link>
                            </li>



                            <li>Your Wlacom :<span>{userInfo?.username}</span></li>
                            <li onClick={(e) => OpenMyAdress(e)}  >change profil</li>
                            <li onClick={(e) => OpenListUser(e)}> list user </li>
                            <li onClick={(e) => OpenAllProduct(e)}>All product</li>

                            <li onClick={(e) => OpenCreateProduct(e)}>  Create product </li>


                        </ul>

                    </div>



                </Col>
            </Row>


            <ListUsersItems
                listUsers={listUsers}
                list={list}
                userInfo={userInfo}
            />

            <ProductLists
                productList={productList}
                post={post}
                idPostId={idPostId}
                setIdPostId={setIdPostId}
                productxp={productxp}

            />

            <CreateProductOne
                createPord={createPord}
                setCreatePord={setCreatePord}
            />

            <ChangeName
                addressOpen={addressOpen}
                setAddressOpen={setAddressOpen}
                userInfo={userInfo}
            />


        </Container>
    )


}



export default AdminProfile



