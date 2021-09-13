import { Col, Container, Row } from "react-bootstrap"
import "./ListFood.css"

const ListFood = ({ post, setSearchMessage }) => {



    //  const [checkfilter, setCheckfilter] = useState([])

    const checfilet = post?.map((ux) => ux.sort)
    const newArray = [...new Set(checfilet)]

    //  console.log('checfilet', newArray)

    // console.log(checkfilter)

    const HandleClick = (e, result) => {
        e.preventDefault()
        //   console.log(result)
        setSearchMessage(result)
    }


    /*
        const HandleClickAll = (e) => {
        e.preventDefault()

        setSearchMessage('')
    }
    
    */

    return (
        <Container  >
            <Row className="chhl">
            <p className="list_food_first">Explore Our Menu... <span className="All_list_menu" onClick={()=>setSearchMessage('')}>All Menu</span></p>
            
                {newArray?.map((loop, loopIndex) => (
                    <Col xs={6} md={4} lg={2} className="chhld">
                        <div className="List_Food_list">
                            <ul className="List_Food_All" >
                                <li key={loopIndex} onClick={(e) => HandleClick(e, loop)}>{loop}</li>
                            </ul>

                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}


export default ListFood

/*
 
  <li onMouseOver={(e) => HandleClickAll(e)}>All</li>
*/