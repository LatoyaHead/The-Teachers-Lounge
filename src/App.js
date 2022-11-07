import React, { useEffect } from 'react'
import './App.css';

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
      <h1>Family Reunion</h1>
    
    </div>
  );
}

export default App;