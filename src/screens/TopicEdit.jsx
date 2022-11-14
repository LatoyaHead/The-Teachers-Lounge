import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import TextBackground from '../components/TextBackground'
import Input from '../components/Input'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TopicEdit = () => {
  const [topic, setTopic] = useState(null)
  const params = useParams()
  const navigate = useNavigate()
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
useEffect(() => {
  getTopic()
}, [])
console.log(topic);

const handleOnChange = (e) => {
  setTopic({...topic, [e.target.name]:e.target.value})
}
const editTopic = async (e) => {
  e.preventDefault()
  try {
    const res = await fetch(`http://localhost:3001/${params.id}`,{
      method: 'put',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        title: topic.title,
        body: topic.body
      })
    })

    const updatedTopic = await res.json()
    setTopic(updatedTopic)
    navigate('/lounge')
  }catch(error) {
    console.log("Topic Not Found",error);
  }
}
  return (
    <div className="pages">
      <Navbar />
      <h1 style={{color:'rgb(136,0,0)', textAlign:'center', fontSize:'55px'}}>The Teacher's Lounge</h1>
      <hr className='line' />
      <div className="center">
        <TextBackground style={{width:300}} title="EDIT POST">
        <form>
          <Input type="text" name="title" placeholder='Topic' style={{width:'100%', boxSizing: 'border-box' }} onChange={handleOnChange} required defaultValue={topic?.title}/>
          <br />
          <textarea type="text" name="body" onChange={handleOnChange} placeholder="Insert text here.." rows="10" style={{width:'100%', boxSizing: 'border-box'}} required defaultValue={topic?.body}/>
          <br />
          <Button text="POST!" onClick={editTopic}/>
          <br />
        </form>
        </TextBackground>
      </div>
      <Footer />
    </div>
  )
}

export default TopicEdit