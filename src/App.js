import React, {createContext, useState, useEffect } from 'react'
import './App.css';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import New from './screens/CreateTopic';
import TopicEdit from './screens/TopicEdit';
import TopicDetails from './screens/TopicDetails';
import { decodeToken } from "react-jwt"
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lounge from './screens/Lounge';

export const UserContext = createContext()
const router = createBrowserRouter([ //Creating router
  { // This object let's the router know what url to go to and what element to present on the url
    path: "/",
    element: <Welcome />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/lounge',
    element: <Lounge />
  },
  {
    path: '/new',
    element: <New />
  }, 
  {
    path: '/topic/:id',
    element: <TopicEdit />
  },
  {
    path: 'topic-details/:id',
    element: <TopicDetails />
  }
]);

function App() {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)

  const authenticated = () => {
    const token = localStorage.getItem('token')
    if(token) {
      const decode = decodeToken(token)
      setUser(decode.user)
      setIsAuth(true)
    }
    
  }
  useEffect(() => {
    authenticated()
  }, [isAuth])
   return (
    <div className="App">
      <UserContext.Provider value={{user, auth:isAuth, setUser, setIsAuth}}>
        <RouterProvider router={router} />    
      </UserContext.Provider>
    </div>
  );
}

export default App;