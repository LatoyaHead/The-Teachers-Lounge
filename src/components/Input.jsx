import React from 'react'

const Input = ({text, type, onChange, name}) => {
  return (
    <div>
      <label>{text}<input type={type} required name={name} onChange={onChange}/></label>
    </div>
  )
}

export default Input
