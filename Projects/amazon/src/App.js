import React,{createContext,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Banner from './components/Banner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import RegMsg from './components/RegMsg'
import LoginMsg from './components/LoginMsg';
import Shop from './components/Shop';
import ProductDetail from './components/ProductDetail';
import OrderReview from './components/OrderReview';
import Inventory from './components/Inventory';
import ShippingAddress from './components/ShippingAddress';
import PaymentPath from './components/PaymentPath';
import Cart from './components/Cart';
import Submitted from './components/Submitted';
import Footer from './components/Footer';

export const UserContext = React.createContext();

export const CartContext = React.createContext();

export const CartProductsContext = React.createContext();


function App() {

const [cart,setCart]=useState([]);
const [user,setUser]=useState();
const [cartList,setCartList]=useState({});

console.log(cart)

  return (

    <CartProductsContext.Provider value={[cartList,setCartList]}>
    <CartContext.Provider value={[cart,setCart]}>
      <UserContext.Provider value={[user,setUser]}>
      <div>
        
        <Router>
        <Navigation></Navigation>
          <Switch>
            


          <Route path='/product/:id'>
              <ProductDetail></ProductDetail> 
            </Route>
            

            <Route path="/register">
              <Signup/>
            </Route>


            <Route path="/cart">
              <Cart/>
            </Route>


            <Route path="/orderreview">
              <OrderReview/>
            </Route>


            <Route path="/inventory">
              <Inventory/>
            </Route>



            <Route path="/shippingaddress">
              <ShippingAddress/>
            </Route>



            <Route path="/paymentpath">
              <PaymentPath/>
            </Route>


            <Route path="/submitted">
              <Submitted/>
            </Route>


            <Route path="/shop">
              <Shop/>
            </Route>


            <Route path="/regmsg">
              <RegMsg/>
            </Route>

            <Route path="/loginmsg">
              <LoginMsg/>
            </Route>

            <Route path="/login">
              <Login/>
            </Route>


            <Route path="/">
              <Banner/>
            </Route>
          </Switch>
          <Footer/>
      </Router>
      </div>
      </UserContext.Provider>
    </CartContext.Provider>
    </CartProductsContext.Provider>
  );
}

export default App;
