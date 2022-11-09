import React from 'react'

const WelcomeContainer = ({width, children}) => {
  return (
    <div style={{width:width}}>
    <div style={{paddingLeft:20}}>
      <h1 className='header'>The <br/> Teacher's <br/> Lounge</h1>
    </div>
    {children}
  </div>
  )
}

export default WelcomeContainer
