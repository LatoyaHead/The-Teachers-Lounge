import React from 'react'

const TextBackground = ({children, title, style}) => {
  return (
    <div style={style}>
      <div className="text-background">
        <div className='title'>{title}</div>
        <div style={{padding:20}}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextBackground
