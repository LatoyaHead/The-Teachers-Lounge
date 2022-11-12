import React from 'react'
import "../../src/App.css"
import { NavLink } from "react-router-dom"

const Navbar = ({signout}) => {
  const handleSignOut = () => {
    console.log('click');
    localStorage.removeItem('token')
    signout(true)
  }
  return (
    <nav className='nav-container'>
      <div className='signin'>
        <NavLink to='/new'>New Post</NavLink>
        <p style={{color:'white', fontSize:'1.5em'}} onClick={handleSignOut}>Sign Out</p>
      </div>
    </nav>
  )
}


export default Navbar