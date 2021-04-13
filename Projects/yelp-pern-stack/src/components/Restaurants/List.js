import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import './style.css';



export default function List(props) {
    const [show, setShow] = useState(false);
    const [review,setReview]=useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {name,location,price_range}=props.info;
    const id=props.id
    const {deleteRes}=props;
    function executeFunc(id){
        deleteRes(id);
        handleClose();
        window.location.reload();
    }

    let history = useHistory();


    function updateFunc(id){
        console.log(id);
        history.push(`/restaurants/${id}/update`);
    }


    function goDetails(id){
        console.log(id);
        history.push(`/restaurants/${id}/details`);
    }

    // review calculate
    useEffect(async () => {
        await fetch(`http://localhost:5000/api/v1/review/${id}`)
        .then(response => response.json())
        .then(json => {
            setReview(json.review);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

 
    var sum=0;
    for(var i=0;i<review.length;i++){
        sum=sum+review[i].mark;
    }
    var reviewMark=sum/(review.length);
    var reviewValue=Math.round(reviewMark);

    return (
        <>
                    <tr className="tr-custom">
                        <td>{name}</td>
                        <td>{location}</td>
                        {/* <td>${price_range}</td> */}
                        <td>{'$'.repeat(price_range)}</td>
                        <td>{'⭐'.repeat(reviewValue)}</td>
                        <td>
                            <button onClick={()=> goDetails(id)} className="btn btn-info btn-sm">Details</button>
                        </td>
                        <td>
                            <button onClick={()=>updateFunc(id)} className="btn btn-warning btn-sm">Update</button>
                        </td>
                        <td>
                            {/* <button onClick={()=>deleteRes(id)}  className="btn btn-danger btn-sm">{id}</button> */}
                            <Button className="btn btn-danger btn-sm" onClick={handleShow}>
                                Delete
                            </Button>
                        </td>
                    </tr>



                    <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <h6>
                            Delete {name}, {location} ?
                        </h6>    
                    </Modal.Body>
                    <Modal.Footer>
                    <Button className="btn-sm" variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="btn-sm" variant="danger" onClick={()=>executeFunc(id)}>
                        Yes
                    </Button>
                    </Modal.Footer>
                    </Modal>
        </>
    )
}
