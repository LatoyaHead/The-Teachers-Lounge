import React from 'react'
import Title from '../components/Title'
import Input from '../components/Input'
import Button from '../components/Button'

const Signup = () => {
  return (
    <div>
      <Title text='Signup' />
      <Input text='Name' type='text' />
      <Input text='Username' type='text' />
      <Input text='Password' type='password' />
      <Button text='Signup' />


      <div className="signin">
          <p style={{color: 'white'}}>
            Already have an Account?<a className="signin1" href="/screens/signin">SIGN IN</a>{" "}
          </p>
      </div>
    </div>
  )
}


export default Signup