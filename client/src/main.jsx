import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Login from "./Components/Login.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import AllUsers from './ AllUsers.jsx'
import UserProfile from './UserProfile.jsx'
const router = createBrowserRouter([{
  path:"/login",
  element:<Login/>,
  errorElement:<Error/>
},
{
  path:"/",
  element:<App/>,
  errorElement:<Error/>,
  children:[
    {
      path:"/users",
      element:<AllUsers/>
    },
    {
      path:"/users/:id",
    element:<UserProfile/>
    }
  ]
},
{
  path:"/home",
  element:<App/>,
  errorElement:<Error/>
},
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>,
)
