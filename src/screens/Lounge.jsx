import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar';
import { UserContext } from '../App';
import {Link} from 'react-router-dom'


const Lounge = ({loggedInUser}) => {
  const user = useContext(UserContext)
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
  useEffect(() => {
    getTopics()
  }, [])
  console.log(topics);

  return (
    <div className='pages'>
      <Navbar />
      <hr className='line' />
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <h2 className="post">Latest Lounge Post</h2>

    <section className="lounge-section">
      {topics.map((topic) => (
        <div className="card" key={topic._id}>
          <div style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <a href={`/topic-details/${topic._id}`} style={{ fontSize: 18, justifyContent:'center', padding: 0}}>
            {" "}
            <h2>{topic.title}</h2>
            </a>
          <div >
              <p className="ellipsis">{topic.body}</p>
          </div>
          <div style={{ padding:'8px', width: '100%', background: '', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing:'border-box'}}>
            <div style={{width: "100%", display: 'flex', justifyContent:'start', alignItems:"center", gap:'10px'}}>
              <img src={topic.avatar} alt="users avatar" style={{borderRadius:"50%", height:'65px', background:'black'}}/>
              <div style={{display:'flex', flexDirection:'column', gap:'2px'}}>
              <h6 style={{color:'black', fontSize:"16px", textAlign:"left"}}>{topic.author}</h6>
              <h2 style={{color:'white', fontSize:"11px"}}>{topic.created_at}</h2>
              </div>
              
            </div>
        </div>
          
          {true ? (
          <div style={{display: 'flex', gap: 10, width: '100%'}}>
            <div className="parent-input-div">
              <input type='submit' value='Delete' className="delete-button percent-100" style={{padding:'0.3em'}}/>
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

    </div>
    );
    }

export default Lounge