import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <Title text='Sign In'/>
      <Input text='Username' type='text' />
      <Input text='Password' type='password' />
      <Button text='Login' backgroundColor='#ea00ff' width={200}/>
    </div>
  )
}



export default Login
