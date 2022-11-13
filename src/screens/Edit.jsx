import React from 'react'
import Navbar from '../components/Navbar'
import TextBackground from '../components/TextBackground'

const Edit = ({LoungeModel}) => {
  return (
      <div>         
        <Navbar/> 
        <div className="center">
        <TextBackground style={{width:300}} title="EDIT POST">
        <form action={`/lounge/${LoungeModel._id}?_method=PUT`} method='POST'>
              Title: <input type='text' name='title' defaultValue={LoungeModel.title} style={{width:'100%'}} required /> 
              <br />        
              Body: <textarea name="body" defaultValue={LoungeModel.body}  rows="10" style={{width:'100%'}} required />
              <br />
              <input type='submit' value='Edit Post'/>
        </form>
        </TextBackground>
        </div>
      </div>  
  )
}

export default Edit