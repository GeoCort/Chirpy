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
    
    return(
    <div className={`${props.darkMode?darkMode:lightMode} col-span-1 border-r-2 flex flex-col text-5xl gap-5 items-center p-5 px-2`}>
        <img src={chirpy} className="w-16 h-16 rounded-full border-2"/>
        <Link><FaHome/></Link>
        <Link><HiUsers/></Link>
        <Link> <CgProfile /></Link>
        <Link><IoSettingsSharp /></Link>
    </div>
)
}