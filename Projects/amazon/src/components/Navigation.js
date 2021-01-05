
import React, {useState,useContext} from 'react';
import {CartContext} from '../App';
import { Button, Nav, Navbar,NavDropdown,Form,FormControl } from 'react-bootstrap';
import logo from './images/logo.png'
import {
    Link,
    useHistory
  } from "react-router-dom";
import {UserContext} from '../App';
import Cart from './Cart';



const Navigation = () => {
    const [user,setUser]=useContext(UserContext);
    const [cart,setCart]=useContext(CartContext);
    console.log(cart.length)
    return (
        
            <Navbar bg="light"  expand="lg">
                <div className="container">
                <Navbar.Brand > 
                    <img src={logo} style={{width:"100px"}}/>    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <Nav.Link>
                            <Link to="/banner">
                            Home
                            </Link>
                        </Nav.Link>


                        <Nav.Link>
                            <Link to="/shop">
                            Products
                            </Link>
                        </Nav.Link>


                         
                        <Nav.Link >
                            <Cart cart={cart}/>
                        </Nav.Link>
                    
                        


                        <Nav.Link>
                            <Link to="/orderreview">
                            Order Review
                            </Link>
                        </Nav.Link>


                        <Nav.Link>
                            <Link to="/inventory">
                            Inventory
                            </Link>
                        </Nav.Link>
                    
                   
                     
                    <Nav.Link href="#link3">Contact Us</Nav.Link>
                    <NavDropdown title="My Account" id="basic-nav-dropdown">
                      {
                          !user && <>
                          <NavDropdown.Item>
                            <Link to="/register">
                            Sign Up
                            </Link>  
                        </NavDropdown.Item>

                        <NavDropdown.Item>
                            <Link to="/login">
                            Sign In
                            </Link>  
                        </NavDropdown.Item>
                          </>
                      }
                        


                        {
                            user && <NavDropdown.Item>
                            <Link to="/login">
                            Sign Out
                            </Link>  
                        </NavDropdown.Item>
                        }
                        


                         
                         
                        <NavDropdown.Item href="#action/3.3">My Account Information</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                     
                </Navbar.Collapse>
                </div>
            </Navbar>
    
    );
};

export default Navigation;