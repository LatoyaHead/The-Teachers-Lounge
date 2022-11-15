import React, {useEffect, useState, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Message from '../components/Message'
import Input from '../components/Input'
import Button from '../components/Button'
import Pusher from 'pusher-js'
import { UserContext } from '../App';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import lounge from '../images/lounge.jpg'

const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
  cluster: 'mt1'
});

const TopicDetails = () => {
  const user = useContext(UserContext)
  const [topic, setTopic] = useState(null)
  const [pushedMessage, setPushedMessage] = useState([])
  const [message, setMessage] = useState({message: ''})
  const params = useParams()

  const getTopic = async () => {
    try {
      const res = await fetch(`http://localhost:3001/${params.id}`)
      const topic = await res.json()
      setTopic(topic)
    }catch(error) {
      console.log("Topic Not Found",error);
    }
    
  }
  const handleMessage = (e) => {
    setMessage({...message, [e.target.name]:e.target.value})
  }

  const channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function(data) {
  setPushedMessage([...pushedMessage, data])  //...(spread operator) adds previous messages
  });

  const sendMessage = () => {
    if(message.message === ''){
      return
    }
    fetch('http://localhost:3001/message', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        message: message.message,
        author: user?.user.username,
        author_id: user?.user._id,
        avatar: user?.user.avatar
      })

    })
    .then(async(data) => {
      const res = await data.json()
      if(data.status === 400) return
      setMessage({message:''})
    })
    .catch((error) => {
      console.log("Failed", error);
    })
  }

  useEffect(() => {
    getTopic()
  }, [])
console.log(pushedMessage);
  return (
    <div className='pages'>
      <Navbar /> 
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <hr className='line' />
      <div style={{display:'flex', justifyContent:"center", alignItems:'center'}}>
        <div className='details'>
          <div style={{width:'50%'}}>
            <img src={lounge} alt='teachers lounging' style={{width:'100%', borderRadius:'5px'}}/>
            <h1 style={{textAlign:'center', padding:'26px', fontSize:'45px', color:'black', fontWeight:"bold", paddingBottom:'1px'}}>{topic?.title}</h1>
            <h3 style={{textAlign:"center", fontSize:'15px', fontWeight:'bold', color:'black', paddingBottom:'1px'}}>Written By: {topic?.author}</h3>
            <p style={{padding:'20px', color:'black', fontSize:'22px'}}>{topic?.body}</p>
          </div>
          <div style={{width:'50%', padding:"10px", display:'flex', flexDirection:'column', gap:"8px", position:'relative'}}>
            <div style={{display:'flex',gap:"8px", flexDirection:'column', height:'90%', overflowY:'scroll'}}>
              {
                pushedMessage.map(message => {
                  return <Message message={message.message} avatar={message.avatar} username={message.username} user_id={message.author_id} myId={user?.user._id}/>
                })
              }
            </div>
            
            <div style={{display:'flex', gap:'8px', position:'absolute', bottom:'10px', width:'90%'}}>
              <div style={{width:'80%'}}>
                <Input placeholder="Comment" name="message" type="text" onChange={handleMessage}/>
              </div>
              <div>
                <Button text="submit" width='100%' onClick={sendMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
   
  )
}

export default TopicDetails