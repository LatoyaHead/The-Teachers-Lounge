import React from 'react'
import './App.css';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lounge from './screens/Lounge';

const router = createBrowserRouter([ //Creating router
  { // This object let's the router know what url to go to and what element to present on the url
    path: "/signin",
    element: <Welcome />,
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/lounge',
    element: <Lounge />
  }
]);

function App() {
   return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;