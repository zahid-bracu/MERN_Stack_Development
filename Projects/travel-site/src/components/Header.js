import React from 'react';
import { Button,Nav, Navbar, NavDropdown, NavDropdownProps, Form, FormControl } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Header = () => {
    const imgUrl="https://i.ibb.co/z6H0pdq/Logo.png";
    return (
        <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">
            <img src={imgUrl} style={{width:"80px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <Nav.Link  >
                <Link to="/home">
                    Home
                </Link>    
            </Nav.Link>

            <Nav.Link  >
                <Link to="/login">
                    Login
                </Link>    
            </Nav.Link>

            <Nav.Link  >
                <Link to="/contact">
                    Contact
                </Link>    
            </Nav.Link>

            <Nav.Link target="_blank" href="https://portfolio-zahid-bracu.netlify.app/" >
                    Portfolio
            </Nav.Link>

            <Nav.Link target="_blank" href="https://github.com/zahid-bracu" >
                    Github
            </Nav.Link>

            

            
             
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>

        </div>
        </Navbar>
    );
};

export default Header;