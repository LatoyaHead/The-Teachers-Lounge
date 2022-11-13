import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const TopicDetails = () => {
  const [topic, setTopic] = useState(null)
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
  useEffect(() => {
    getTopic()
  }, [])
  console.log(topic);
  return (
    <div>
      <h1>{topic.title}</h1>
      <p>{topic.body}</p>
    </div>
   
  )
}

export default TopicDetails