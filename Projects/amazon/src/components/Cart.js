import React,{useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <div onClick={handleShow}>
          Cart
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Order Summary</Modal.Title>
          
        </Modal.Header>
        
        <Modal.Body>
        <h6>Items Ordered: 0</h6>
        <p>Items: 0$</p>
        <p>Shipping & Handling: 0$</p>
        <p>Total before tax: 0$</p>
        <p>Estimated Tax: 0$</p>
        <h5 className="text-danger">Order Total: $0</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Review your order
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Cart;