import React from 'react'

const Show = ({lounge}) => {
  return (
    <div className='pages'>
      <h1>Lounge</h1>
      
      <h1>{lounge.title}</h1>
      <p>{lounge.body}</p>
      <img src={lounge.image} width="350px" alt="user avatar" />
      <h5>{lounge.author}</h5>
    </div>
  )
}


export default Show