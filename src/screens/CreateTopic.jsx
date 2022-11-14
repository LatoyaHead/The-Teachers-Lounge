import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import TextBackground from '../components/TextBackground'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';

  const CreateTopic = () => {
    const navigate = useNavigate()
    const user = useContext(UserContext)
    const [topic, setTopic] = useState({title:"", body:""})
    const createTopic = (e) => {
      e.preventDefault()
      if(topic.title === '' || topic.body === ''){
        return
      }
      fetch('http://localhost:3001/topic', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
  
        //make sure to serialize your JSON body
        body: JSON.stringify({
          title: topic.title,
          body: topic.body,
          author: user?.user.username,
          avatar: user?.user.avatar,
          author_id: user?.user._id
        })
  
      })
      .then(async(data) => {
        const res = await data.json()
        console.log(res);
        if(data.status === 400) return
        navigate('/lounge')
        setTopic({title:'', body:''})
      })
      .catch((error) => {
        console.log("Failed", error);
      })
    }
    const handleOnChange = (e) => {
      setTopic({...topic, [e.target.name]:e.target.value})
    }
  return (
    <div className="pages" >
      <Navbar />
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <hr className='line' />
      <div className="center">
        <TextBackground style={{width:300}} title="CREATE NEW POST">
        <form action="/topic" method="POST">
          <Input type="text" name="title" placeholder='Topic' style={{width:'100%', boxSizing: 'border-box' }} onChange={handleOnChange} required />
          <br />
          <textarea type="text" name="body" onChange={handleOnChange} placeholder="Insert text here.." rows="10" style={{width:'100%', boxSizing: 'border-box'}} required />
          <br />
          <Button text="POST!" onClick={createTopic}/>
          <br />
        </form>
        </TextBackground>
      </div>
      <Footer/>
    </div>
  )
}

export default CreateTopic