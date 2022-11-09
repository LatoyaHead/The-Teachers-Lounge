import React from 'react'

const Input = ({text, type, onChange, name, placeholder}) => {
  return (
    <div>
      <label>{text}<input className="input-style" type={type} required name={name} onChange={onChange} placeholder={placeholder}/></label>
    </div>
  )
}

export default Input
