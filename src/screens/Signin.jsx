import React, { useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({email:'', password:''})
  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleLogin = () => {
    if(user.email === '' || user.password === ''){
      return
    }
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })

    })
    .then(async(data) => {
      const res = await data.json()
      localStorage.setItem('token', res.token)
      console.log("Success", res);
      if(data.status === 400) return
      navigate('/lounge')
      setUser({email:'', password:''})
    })
    .catch((error) => {
      console.log("Failed", error);
    })
  } 
  

  return (
    <div className='signin'>
      <div style={{marginBottom:30}}>
        <Title text='' />
      </div>
      <div style={{width:300}}>
        <div className='info'>
          <Input placeholder='email' name='email' type='text'onChange={handleOnChange}/>
          <Input placeholder='Password' name='password' type='password' onChange={handleOnChange}/>
          <Button text='Log In' width='100%' onClick={handleLogin}/>
        </div>
        <div className='signup'>
          <p style={{color: 'white'}}>
            New to The Teacher's Lounge?<NavLink to='/signup'>Sign Up</NavLink>
          </p> 
        </div> 
      </div>
    </div>
  )
}



export default Login
