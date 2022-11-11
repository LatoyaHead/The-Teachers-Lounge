import React, {useState, useEffect} from 'react'
import WelcomeContainer from '../components/WelcomeContainer'
import Signin from './Signin'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  const authenticated = () => { //authenticating whether or not the user is logged in by checking token saved on localstorage
    const token = localStorage.getItem('token')
    if(token) {
      setIsAuth(true)
      return true
    }
    setIsAuth(false)
    return false
  }
  useEffect(() => {
    if(authenticated()) {
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
