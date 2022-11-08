import React, { useEffect } from 'react'
import './App.css';
import Signup from './screens/Signup';

function App() {
  useEffect(() => {
    fetch('http://localhost:3001')
    .then((data)=> {
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    })
  })
  return (
    <div className="App">
      <h1 className='header'>The <br/> Teacher's <br/> Lounge</h1>
      {/* <Signin /> */}
      <Signup />

    
    </div>
  );
}

export default App;