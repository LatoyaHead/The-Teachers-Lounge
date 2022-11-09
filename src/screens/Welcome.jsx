import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const Welcome = () => {
  return (
    <div>
      <h1 className='header'>The <br/> Teacher's <br/> Lounge</h1>
      <div style={{display:'flex',justifyContent:'center', marginTop:'100px'}}>
        <NavLink to='/signin'><Button text="Sign In" backgroundColor='#ea00ff' width={200} /></NavLink>
        <NavLink to='/signup'><Button text="Sign Up" backgroundColor='#ea00ff' width={200}/></NavLink>
      </div>
    </div>
  )
}

export default Welcome
