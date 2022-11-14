import React from 'react'


const Message = ({message, avatar}) => {
  return (
    <div style={{backgroundColor:'red', padding:'10px', borderRadius:'15px', width:'80%', display:'flex', alignItems:'center', gap:'8px'}}>
      <div style={{width:"40px", height:"40px", backgroundColor:"black", borderRadius:'50%'}}>
       <img src={avatar} alt='user avatar' style={{borderRadius:"50%", height:'40px', background:'black'}}/>
      </div>
      <p>{message}</p>
    </div>
  )
}

export default Message