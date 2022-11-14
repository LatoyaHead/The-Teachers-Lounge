import React, {useEffect, useState, useContext} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Message from '../components/Message'
import Input from '../components/Input'
import Button from '../components/Button'
import Pusher from 'pusher-js'
import { UserContext } from '../App';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
  cluster: 'mt1'
});

const TopicDetails = () => {
  const user = useContext(UserContext)
  const [topic, setTopic] = useState(null)
  const [pushedMessage, setPushedMessage] = useState([])
  const [message, setMessage] = useState({message: ''})
  const params = useParams()
  console.log(params);
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
          avatar: user?.user.avatar
        })
  
      })
      .then(async(data) => {
        const res = await data.json()
        console.log(res);
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
  console.log("message", pushedMessage);

  return (
    <div className='pages'>
      <Navbar /> 
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <hr className='line' />
      <div style={{display:'flex', justifyContent:"center", alignItems:'center', height:'100vh'}}>
        <div className='details'>
          <div style={{width:'50%'}}>
            <h1 style={{textAlign:'center'}}>{topic?.title}</h1>
            <p style={{padding:'10px'}}>{topic?.body}</p>
          </div>
          <div style={{width:'50%', padding:"10px", display:'flex', flexDirection:'column', gap:"8px"}}>
            {
              pushedMessage.map(message => {
                return <Message message={message.message} avatar={message.avatar} author={message.author}/>
              })
            }
            <div style={{display:'flex', gap:'8px'}}>
              <div style={{width:'80%'}}>
                <Input placeholder="Comment" name="message" type="text" onChange={handleMessage}/>
              </div>
              <div style={{width:'20%'}}>
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