import React from 'react'
import "../../src/App.css"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='nav-container'>
      {/* <NavLink to="/">Teacher's Lounge</NavLink> */}
      <div className='signin'>
        <NavLink to=''>New Post</NavLink>
        <NavLink to='/signin'>Sign Out</NavLink>
      </div>
    </nav>
  )
}


export default Navbar