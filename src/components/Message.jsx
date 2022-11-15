import React from 'react'


const Message = ({message, avatar, user_id, myId, username}) => {
  console.log(username);
  return (
    <div style={{display:'flex', justifyContent: user_id === myId ? 'flex-start': 'flex-end'}}>
      <div style={{backgroundColor:'rgb(136,0,0)', padding:'10px', borderRadius:'15px', width:'80%', display:'flex', alignItems:'center', gap:'8px'}}>
        <div style={{height:"40px", backgroundColor:"black", borderRadius:'5px', padding:'5px'}}>
          <h4 style={{color:'white'}}>{username}</h4>
        {/* <img src={avatar} alt='avatar' style={{borderRadius:"50%", height:'40px', background:'black'}}/> */}
        </div>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message