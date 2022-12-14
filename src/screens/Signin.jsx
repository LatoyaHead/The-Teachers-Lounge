import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const apiUrl = process.env.REACT_APP_URL || 'http://localhost:3001'
  const [user, setUser] = useState({email:'', password:''})
  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const handleLogin = () => {
    if(user.email === '' || user.password === ''){
      return
    }
    fetch(`${apiUrl}/signin`, {
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
