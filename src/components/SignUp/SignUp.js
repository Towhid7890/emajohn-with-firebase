import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
       createUserWithEmailAndPassword,
       user
     ] = useCreateUserWithEmailAndPassword(auth);
   
   /*-Function for input email/pass  handle-*/
   const handleEmailBlur =(e)=>{
    setEmail(e.target.value);
   }
   const handlePasswordBlur =(e)=>{
       setPassword(e.target.value);
   }
   const handleConfirmPasswordBlur =(e)=>{
    setConfirmPassword(e.target.value);
   }
   const handleSubmit =(e)=>{
       e.preventDefault();
      if(password !== confirmPassword){
          setError('Password do not match')
       return;
      }
      if(password.length < 8){
          setError('Password must be at least 8 characters')
          return;
      }
   
       createUserWithEmailAndPassword(email,password);
       console.log(user);
       navigate('/shop');
       
   
   }
  return (
    <div>
      <div className="form-container mt-4">
        <h2 className="text-center">Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <button className="submit-btn mt-3">Sign Up</button>
        </Form>
       <div className='d-flex mt-3'>
       <p>Already have an account?</p>
        <Link to="/login">Login</Link>
       </div>
      </div>
    </div>
  );
};

export default SignUp;
