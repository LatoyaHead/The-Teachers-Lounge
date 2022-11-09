import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'
import WelcomeContainer from '../components/WelcomeContainer'
import Signin from './Signin'

const Welcome = () => {
  return (
    <WelcomeContainer width='50%'>
      <Signin />
    </WelcomeContainer>
  )
}

export default Welcome
