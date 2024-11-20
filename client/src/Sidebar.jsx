import {Link}  from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { HiUsers } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import chirpy from "./assets/chirpy.webp"
import { useState } from "react";
export default function Sidebar(props){
    const [lightMode, setLightMode ] = useState("border-black bg-zinc-50 text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    const linkButton = "py-5 px-4  flex gap-2 hover:text-white hover:bg-zinc-600"
    return(
    <div className={`${props.darkMode?darkMode:lightMode} col-span-1 border-r-2 flex flex-col text-5xl lg:text-3xl gap-2 items-center py-10`}>
        <img src={chirpy} className="w-16 h-16 rounded-full border-2"/>
        <Link className={linkButton}><FaHome/><span className="hidden lg:inline text-2xl ">Home</span></Link>
        <Link className={linkButton}><HiUsers/> <span className="hidden lg:inline text-2xl">Users</span></Link>
        <Link className={linkButton}> <CgProfile /><span className="hidden lg:inline text-2xl" >Profile</span> </Link>
        <Link className={linkButton}><IoSettingsSharp /> <span className="hidden lg:inline text-2xl">Settings</span></Link>
    </div>
)
}