import React, {useState, useEffect} from 'react'
import WelcomeContainer from '../components/WelcomeContainer'
import Signin from './Signin'
import { useNavigate } from 'react-router-dom'
import { authenticated } from '../utility/auth'

const Welcome = () => {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  
  useEffect(() => {
    if(authenticated(setIsAuth)) {
      navigate('/lounge')
    }
  }, [isAuth])

  return (
    <WelcomeContainer width='50%'>
      <Signin />
    </WelcomeContainer>
  )

}

export default Welcome
