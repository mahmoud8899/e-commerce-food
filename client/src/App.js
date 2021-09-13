
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from "react-router-dom"
import NavBar from "./Pages/NavBar/NavBar"
import Footer from "./Pages/Footer/Footer"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import SingUp from "./Pages/Login/Singup"
import Product from "./Pages/Product/Product"
import Cart from "./Pages/Cart/Cart"
import Profile from "./Pages/User/Profile/Profile"
import AdminProfile  from "./Pages/Admin/AdminProfile"
import Payment from "./Pages/Payment/Payment"
import Menu from "./Pages/Menu/Menu"
import Order from "./Pages/Order/Order"
import Like from './Pages/Like/Like';
const App = ()=>{

  return (

    <BrowserRouter>
    <NavBar />
    <Route  path="/" component={Home}  exact  />
    <Route  path="/login/:id?" component={Login}  exact  />
    <Route  path="/singup" component={SingUp}  exact  />
    <Route path="/Product/:id/" component={Product} exact />
    <Route path="/cart/:id?" component={Cart} exact />
    <Route path="/like/" component={Like} exact />
    <Route path="/profile/" component={Profile} exact />
    <Route path="/admin/profile/" component={AdminProfile} exact />
    <Route path="/order/payment" component={Payment} exact />
    <Route path="/menu/" component={Menu} exact />
    <Route path="/order/shipping/:id/" component={Order} exact />
    <Footer />
    </BrowserRouter>

  )
}
export default App;
