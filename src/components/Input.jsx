import React from 'react'

const Input = ({text, type}) => {
  return (
    <div>
      <label>{text}<input type={type} required /></label>
    </div>
  )
}

export default Input
