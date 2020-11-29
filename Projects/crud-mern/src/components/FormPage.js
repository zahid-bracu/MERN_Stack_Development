import React from 'react';
import { Form } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";
const FormPage = () => {
    return (
        <div className="container">
            <h5 className="text-center mt-5">Add new contact</h5>
            <Form style={{maxWidth:"400px"}} className="d-block mx-auto">
                <Form.Group controlId="name">
                    <Form.Label>Contact Name : </Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="number">
                    <Form.Label>Contact Number: </Form.Label>
                    <Form.Control type="number" placeholder="Enter Number" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Contact Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
             
            
                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <button className="btn btn-primary">Save</button>
            </Form>

            <div className="d-block mx-auto" style={{background:"none", maxWidth:"152.9px" }}>
                <div className="d-inline-block text-center">
                    <Link style={{textDecoration:"inherit"}} to="/login">
                        <button className="btn btn-success my-2 d-block mx-auto" style={{padding:"6px 55px"}}>Login</button>
                    </Link>
                    
                    <Link style={{textDecoration:"inherit"}} to="/contact">
                        <button className="btn btn-primary d-block my-2 mx-auto">Show All Contacts</button>
                    </Link>
                    
                    
                    <Link style={{textDecoration:"inherit"}} to="/home">
                        <button className="btn btn-secondary text-white my-2 px-4 d-block mx-auto">Back to Home</button>
                    </Link>
                </div>
            </div>
        </div>
        
    );
};

export default FormPage;