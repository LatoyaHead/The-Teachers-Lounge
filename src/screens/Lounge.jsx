import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar';
import { UserContext } from '../App';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { decodeToken } from "react-jwt"
import Footer from '../components/Footer';

const Lounge = () => {
  const user = useContext(UserContext)
  const navigate = useNavigate()
  const [topics, setTopics] = useState([])
 

  const getTopics = async () => {
    try {
      const response = await fetch('http://localhost:3001/topics') 
      const topics = await response.json()
      setTopics(topics)
    }catch(error) {
      console.log('Topic Errors', error);
    }
  }
  const authenticated = () => { //authenticating whether or not the user is logged in by checking token saved on localstorage
    const token = localStorage.getItem('token')
    if(token) {
      user.setIsAuth(false)
      return false
    }
    user.setIsAuth(true)
    return true
  }
  const decodeUser = () => {
    const token = localStorage.getItem('token')
    if(token) {
      const decode = decodeToken(token)
      user.setUser(decode.user)
      user.setIsAuth(true)
    }
  }
  
  const handleDelete = (topicId) => {
    fetch(`http://localhost:3001/remove/${topicId}`, {
      method: 'delete'
    })
    .then(res => {
      setTopics(topics.filter(topic => topic._id !== topicId))
    }).catch(error => {
      console.log(error);
    }) 
  }

  useEffect(() => {
    if(authenticated()) {
      navigate('/')
    }
    getTopics()
    decodeUser()
  }, [user.isAuth])

  return (
    <div className='pages'>
      <Navbar signout={user.setIsAuth}/>
      <div>
        <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'75px'}}>The Teacher's Lounge</h1>
        <hr className='line' />
      </div>
      <h2 className="post">|| Latest Lounge Post</h2>

    <section className="lounge-section">
      {topics.map((topic) => (
        <div className="card" key={topic._id}>
          <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Link to={`/topic-details/${topic._id}`} style={{ fontSize: 20, justifyContent:'center', padding: 0}}>
            {" "}
            <h2>{topic.title}</h2>
            </Link>
          <div >
              <p style={{padding:'10px', fontSize:'20px',}} className="ellipsis">{topic.body}</p>
          </div>
          <div style={{ padding:'8px', width: '100%', background: '', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing:'border-box'}}>
            <div style={{width: "100%", display: 'flex', justifyContent:'start', alignItems:"center", gap:'10px'}}>
              <img src={topic.avatar} alt="users avatar" style={{borderRadius:"50%", height:'55px', background:'black'}}/>
              <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
              <h6 style={{color:'black', fontSize:"20px", textAlign:"left", fontWeight:'bold'}}>{topic.author}</h6>
              <h2 style={{color:'white', fontSize:"15px"}}>{topic.created_at}</h2>
              </div>
              
            </div>
        </div>
          
          {user.user._id ===  topic.author_id ? (
          <div style={{display: 'flex', gap: 10, width: '100%'}}>
            <div className="parent-input-div">
              <button className="delete-button percent-100" style={{padding:'0.3em'}} onClick={() => handleDelete(topic._id)}>Delete</button>
            </div>
            
            <div className="parent-input-div percent-100">
              <Link to={`/topic/${topic._id}`} className="edit-button percent-100">Edit</Link>
            </div>
          </div> 
            ) : null}
          </div>
      </div>
    ))}
    </section>
    <Footer/>
    </div>
    
    );
    }
    

export default Lounge