import React from 'react'
import "../../src/App.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <NavLink to="/">Teacher's Lounge</NavLink>
      <div className='signin'>
        <NavLink to='/signin'>Sign In</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>
    </nav>
  )
}


export default Navbar