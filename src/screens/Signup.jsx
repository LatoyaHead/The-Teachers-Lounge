import React,{ useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  const [user, setUser]= useState({username:'', email:'', password:''})
  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleSignup = () => {
    if(user.username === '' || user.email === '' || user.password === ''){
      console.log('data needed');
      return
    }
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password
      })

    })
    .then((data) => {
      console.log("Success", data);
    })
    .catch((error) => {
      console.log("Failed", error);
    })
  } 
  console.log(user);
  return (
    <div>
      <Navbar />
      <Title text='Signup' />
      <Input text='Username' type='text' name='username' onChange={handleOnChange}/>
      <Input text='Email' type='text' name='email' onChange={handleOnChange}/>
      <Input text='Password' type='password' name='password' onChange={handleOnChange} />
      <Button text='Signup' backgroundColor='#ea00ff' width={200} onClick={handleSignup}/>


      <div className="signin">
          <p style={{color: 'white'}}>
            Already have an Account?<NavLink to='/signin'>Sign In</NavLink>
          </p>
      </div>
    </div>
  )
}


export default Signup