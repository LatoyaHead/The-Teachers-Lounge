import React, {useContext, useEffect} from 'react'
import "../../src/App.css"
import { UserContext } from '../App'
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const context = useContext(UserContext)
  const handleSignOut = () => {
    localStorage.removeItem('token')
    context.setIsAuth(true)
  }
  useEffect(() => {

  }, [context.isAuth])
  console.log('context', context);

  return (
    <nav className='nav-container'>
      <div className='signin'>
        <NavLink to='/new'>New Post</NavLink>
        <NavLink to='/lounge'>Lounge</NavLink>
        <p style={{color:'white', fontSize:'1.5em'}} onClick={handleSignOut}>Sign Out</p>
      </div>
    </nav>
  )
}


export default Navbar