import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

const Signup = () => {
  return (
    <div>
      <Title text='Signup'/>
      <Input text='Name' type='text' />
      <Input text='Username' type='text' />
      <Input text='Password' type='password' />
      <Button text='Signup' />
    </div>
  )
}


export default Signup