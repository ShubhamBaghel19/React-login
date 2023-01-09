import { async } from '@firebase/util';
import { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom'; 
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const {signUp}=useUserAuth();
    const  [error,setError]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password);
            navigate("/");
        }catch(err){
            setError(err.message);
        }
    }
  return (
    <div>
        {error && <Alert variant='danger'>{error}</Alert>}
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e)=> setEmail(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
         onChange={(e)=> setPassword(e.target.value)}  />  
      </Form.Group>
      <Link to="/">Log In</Link>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </div>
  )
}

export default Signup