import { useEffect, useState } from 'react'
import {Routes, Route, Link, Outlet, redirect} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Sidebar from './Sidebar'
import Timeline from './Timeline'
import Features from './Features'
import AllUsers from './ AllUsers'
import UserProfile from './UserProfile'
import Login from "./Components/Login"
import Loading from "./Components/Loading"
import { useNavigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [user,setUser] = useState({id:"",username:""})
  const [token, setToken] = useState("")
  const [loading,setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(loading){
      if(window.localStorage.getItem("token") == null){
        navigate("/login", { replace: true });
      }else{
        setLoading(false)
      }
    }
  }, [])

  return (
   loading? <Loading/> : 
   <main className=' min-h-screen grid grid-cols-[100px_1fr] lg:grid-cols-[250px_1fr_350px] xl:mx-[2%] 2xl:mx-[5%]'>
   <Sidebar toggleDark={darkMode}/>
    <Routes>
     <Route index element={<Timeline/>} />
     <Route path='home' element= {<Timeline/>}/>
     <Route path='/users' element={<AllUsers/>} />
     <Route path="/users/:id" element={<UserProfile/>} />
     <Route path='*' element={<Timeline/>} />
    </Routes>
    <Features toggleDark={darkMode}/>
   </main>
  )
}

export default App
