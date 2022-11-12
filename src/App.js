import React from 'react'
import './App.css';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import New from './screens/New';
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lounge from './screens/Lounge';

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