import React from 'react'

const Input = ({text, type, onChange, name, placeholder, defaultValue}) => {
  return (
    <div>
      <label>{text}<input className="input-style" type={type} required name={name} onChange={onChange} placeholder={placeholder} defaultValue={defaultValue}/></label>
    </div>
  )
}

export default Input
