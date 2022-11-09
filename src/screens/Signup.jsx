import React,{ useState } from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import WelcomeContainer from '../components/WelcomeContainer'
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';

const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser]= useState({username:'', email:'', password:''})
  const handleOnChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const avatar = createAvatar(style, {
    dataUri: true
  });

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
        password: user.password,
        avatar: avatar
      })

    })
    .then((data) => {
      console.log("Success", data);
      navigate('/lounge')
      setUser({username:'', email:'', password:''})
    })
    .catch((error) => {
      console.log("Failed", error);
    })
  } 
  console.log(user);
  return (
    <WelcomeContainer width='50%'>
      <div className='signin'>
        <div style={{marginBottom:30}}>
          <Title text='Create Account' />
        </div>
        <div style={{width:300}}>
          <div className='info'>
            <Input placeholder='Username' type='text' name='username' onChange={handleOnChange} />
            <Input placeholder='Email' type='text' name='email' onChange={handleOnChange} />
            <Input placeholder='Password' type='password' name='password' onChange={handleOnChange} />
            <Button text='Sign Up' width='100%' onClick={handleSignup}/>
          </div>


          <div className="signup">
              <p style={{color: 'white'}}>
                Already have an Account?<NavLink to='/signin'>Log In</NavLink>
              </p>
          </div>
        </div>
      </div>
    </WelcomeContainer>
  )
}


export default Signup