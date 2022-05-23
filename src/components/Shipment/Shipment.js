import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Shipment = () => {
    const[user]= useAuthState(auth)
    const [name, setName] = useState('');
    const [address,setAddress] = useState('');
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('');
    // const navigate = useNavigate();
   
   
   /*-Function for input email/pass  handle-*/
   const handleNameBlur =(e)=>{
    setName(e.target.value);
   }
   const handleAddressBlur =(e)=>{
       setAddress(e.target.value);
   }
   const handlePhoneBlur =(e)=>{
    setPhone(e.target.value);
   }
   const handleSubmit =(e)=>{
       e.preventDefault();
     
      }
    return (
        <div>
      <div className="form-container mt-4">
        <h2 className="text-center">Shipment Information</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={user?.email} readOnly type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Address" required/>
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Phone</Form.Label>
            <Form.Control onBlur={handlePhoneBlur} type="text" placeholder="Your Phone" required/>
          </Form.Group>
          <p className="text-danger">{error}</p>
          <button className="submit-btn mt-3">Shipment</button>
        </Form>
      </div>
    </div>
    );
};

export default Shipment;