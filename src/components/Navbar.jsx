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
 

  return (
    <nav className='nav-container'>
      <div className='signin'>
        <NavLink style={{color:'rgb(245,245,245, 0.6)'}} to='/new'>New Post</NavLink>
        <NavLink style={{color:'rgb(245,245,245, 0.6)'}} to='/lounge'>Lounge</NavLink>
        <p style={{color:'rgb(245,245,245, 0.6)', fontSize:'25px', fontWeight:"bold", cursor:'pointer'}} onClick={handleSignOut}>Sign Out</p>
      </div>
    </nav>
  )
}


export default Navbar