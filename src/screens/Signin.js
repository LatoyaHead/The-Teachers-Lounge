import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
  return (
    <div>
    <Title text='Login'/>
    <Input text='Username' type='text' />
    <Input text='Password' type='password' />
    <Button text='Login' />
  </div>
  )
}



export default Login
