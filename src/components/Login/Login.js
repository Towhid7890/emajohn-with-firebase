import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './Login.css';
import { Form } from 'react-bootstrap';
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const Login = () => {
 const [email, setEmail] = useState('');
 const [password,setPassword] = useState('');
 const navigate = useNavigate();
 const location = useLocation();
 const from = location.state?.from?.pathname || "/";

 

 const [
    signInWithEmailAndPassword,user,error
  ] = useSignInWithEmailAndPassword(auth);


/*-Function for input email/pass  handle-*/
const handleEmailBlur =(e)=>{
 setEmail(e.target.value);
}
const handlePasswordBlur =(e)=>{
    setPassword(e.target.value);
}

if(user){
    navigate(from, { replace: true })
}
const handleSubmit =(e)=>{
    e.preventDefault();
   signInWithEmailAndPassword(email, password)
   
 
  
}


  return (
    <div>
       
      <div className="form-container mt-4">
      <h2 className="text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <p className="text-danger">{error}</p>
          <button className="submit-btn mt-3">Login</button>
        </Form>
        <div className="d-flex mt-3">
        <p>New to here?</p>
        <Link to="/signup">Create a new account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
