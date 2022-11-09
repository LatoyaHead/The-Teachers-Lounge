import React from 'react'
import "../../src/App.css"

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <a href='/'>Teacher's Lounge</a>
      <div className='signin'>
        <a href='/'>Sign In</a>
        <a href='/'>Sign Up</a>
      </div>
    </nav>
  )
}


export default Navbar