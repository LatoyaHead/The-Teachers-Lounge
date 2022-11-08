import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div>
      <Navbar />
      <Title text='Login'/>
      <Input text='Username' type='text' />
      <Input text='Password' type='password' />
      <Button text='Login' />
    </div>
  )
}



export default Login
