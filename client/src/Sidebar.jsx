import {Link}  from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import chirpy from "./assets/chirpy.webp"
import { useState } from "react";
export default function Sidebar(props){
    const [lightMode, setLightMode ] = useState("border-black text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    const linkButton = "py-5 px-4  flex items-center gap-2 hover:text-white [&:not(:last-child)]:hover:bg-zinc-600"
    const buttonClass =" block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-800"
    return(
    <div className={`${props.darkMode?darkMode:lightMode} col-span-1  sm:flex flex-col text-5xl lg:text-3xl gap-2 items-center py-10 hidden max-h-screen `}>
        <img src={chirpy} className="w-16 h-16 rounded-full border-2"/>
        <Link to={'/home'} className={linkButton}><FaHome/><span className="hidden lg:inline text-2xl ">Home</span></Link>
        <Link to={'/users'} className={linkButton}><HiUsers/> <span className="hidden lg:inline text-2xl">Users</span></Link>
        <Link to={'/users/:id'} className={linkButton}> <CgProfile /><span className="hidden lg:inline text-2xl" >Profile</span> </Link>
        <Link className={linkButton}><IoSettingsSharp /> <span className="hidden lg:inline text-2xl">Settings</span></Link>
        <div className="mt-auto">
        <Link to="/login" className={linkButton}><CiLogin className="lg:hidden"/> <span className="hidden lg:inline text-xl bg-blue-500 text-white py-2 px-4 rounded-lg">Login</span></Link>
        </div>
    </div>
)
}