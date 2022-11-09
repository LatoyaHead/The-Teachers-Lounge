import React from 'react'

const Button = ({text, backgroundColor, width, onClick}) => {
  return (
    <div>
      <button className='btn' style={{backgroundColor:backgroundColor, width:width}} onClick={onClick}>
      {text}</button>
    </div>
  )
}

export default Button