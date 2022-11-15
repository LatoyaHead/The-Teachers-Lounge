import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Footer from '../components/Footer';
import Form from '../components/Form';

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
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'75px'}}>The Teacher's Lounge</h1>
      <hr className='line' />
      <div className="center">
        <Form
          title={'Create New Post'} 
          btnText={'CREATE!'}
          handleOnChange={handleOnChange}
          submit={createTopic}
          defaultValue={topic}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default CreateTopic