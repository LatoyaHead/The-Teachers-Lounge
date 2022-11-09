import React, { useEffect } from 'react'
import './App.css';
import Signin from './screens/Signin';
import Navbar from './components/Navbar';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([ //Creating router
  { // This object let's the router know what url to go to and what element to present on the url
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

function App() {
  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('http://localhost:3001/')
      const data = await res.json()
      return data
    }

    fetchData().then(data => console.log(data))
  })

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;