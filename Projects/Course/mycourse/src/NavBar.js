import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg="dark" style={{color:"white"}} expand="lg">
      <Navbar.Brand href="#home" style={{color:"white"}}>Developer's Programming Academy</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
          <Nav.Link href="#link" style={{color:"white"}}>Courses</Nav.Link>
          <Nav.Link href="#home" style={{color:"white"}}>Bootcamp</Nav.Link>
          <Nav.Link href="#link" style={{color:"white"}}>Login</Nav.Link>
          <Nav.Link href="#home" style={{color:"white"}}>Registration</Nav.Link>
          <Nav.Link href="#link" style={{color:"white"}}>Contact Us</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
