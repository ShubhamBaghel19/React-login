import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import  { useState } from 'react'
import { Alert, Container } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { async } from '@firebase/util';
import "../styles/Login.css";



const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {logIn,googleSignIn}=useUserAuth();
    const  [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            navigate("/home");
        }catch(err){
            setError(err.message);
        }
    };
    const handleGoogleSignIn=async (e) => {
      e.preventDefault(); 
      try{
        await googleSignIn();
        navigate("/home");
      }catch(err){
        setError(err.message)
      }
    };
  return (
    // <div>
    //     {error && <Alert variant='danger'>{error}</Alert>}
    //     <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="Enter email" 
    //     onChange={(e)=>setEmail(e.target.value)}/>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
    //   </Form.Group>
    //    <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    //   <Button variant="secondary">
    //   <Link to="/signup">Signup</Link>
    //   </Button>
    //   <div>
    //     <GoogleButton className='g-btn' type="dark" onClick={handleGoogleSignIn}></GoogleButton>
    //   </div>
    // </Form>
    // </div>
    
   <>
   <div className='login' id='login'>
  <div className='head'>
  <h1 className='company'>Car Servicing</h1>
  </div>
  <p className='msg'>Welcome back</p>
  <div className='form'>
    <form>
  <input type="text" placeholder='Username' className='text' id='username' required/><br/>
  <input type="password" placeholder='Password' className='password'/><br/>
  <a href="#" className='btn-login' id='do-login'>Login</a>
  <a href="#" className='forgot'>Forgot?</a>
    </form>
  </div>
</div>
<footer>
  <p>Made with <span className='heart'>&hearts;</span> by Bridges(<a href='https://github.com/pxntxs'>@pxntxs</a>)</p>
  <p>Gradient: <a href='https://uigradients.com/#Turquoiseflow'>https://uigradients.com/#Turquoiseflow</a></p>
</footer>
   </>
    
  );
}

export default Login