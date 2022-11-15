import React from 'react'
import TextBackground from './TextBackground'
import Input from './Input'

const Form = ({title, btnText, handleOnChange, submit, defaultValue}) => {
  return (
    <TextBackground style={{width:600}} title={title}>
      <form>
        <div style={{width:'100%'}}>
        <Input
          type="text"
          name="title"
          placeholder='Topic'
          style={{width:'100%', boxSizing: 'border-box' }}
          onChange={handleOnChange}
          required
          defaultValue={defaultValue?.title}
        />
        </div>
        <br />
        <textarea 
          type="text" 
          name="body" 
          onChange={handleOnChange} 
          placeholder="Insert text here.." 
          rows="10" 
          style={{width:'100%', boxSizing: 'border-box'}} 
          required 
          defaultValue={defaultValue?.body}/>
        <br />
        <button className="edit-b" onClick={submit}>{btnText}</button>
        <br />
      </form>
    </TextBackground>
  )
}

export default Form
