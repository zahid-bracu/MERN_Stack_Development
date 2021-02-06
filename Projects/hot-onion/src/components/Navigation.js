import React from 'react';
import {  NavDropdown, Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';
import './style.css';
import cart from './resources/cart.svg';
import logo2 from './resources/logo2.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navigation = () => {
    return (
        <Navbar bg="light" className="sticky-top" expand="lg">
            <div className="container">
                <Navbar.Brand>
                    <Link to="/">
                    <img style={{width:"140px"}} src={logo2}/>
                    </Link>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link>
                        <img id="cart" src={cart}/>
                    </Nav.Link>
                    <Nav.Link className="nav-link">Login</Nav.Link>
                    <Nav.Link className="nav-link">
                        <button className="btn-sign btn btn-danger">Sign Up</button>
                    </Nav.Link>
                    </Nav>
                    
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;