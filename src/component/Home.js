import React from 'react'
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {
  const {user,logOut}=useUserAuth();
  console.log(user);
  const handleLogout=async ()=>{
try{
await logOut();
}catch(err)
{
  console.log(err.message)
}
  }
  return (
    <div>

      <Button variant='primary' onClick={handleLogout}>logOut</Button>
    </div>
  )
}

export default Home