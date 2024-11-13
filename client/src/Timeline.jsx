import { useState } from "react"
import TimelinePost from "./Components/TimelinePost"
export default function Timeline(props){
    const [lightMode, setLightMode ] = useState("border-black bg-zinc-50 text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    return(
       <div className={`flex flex-col text-white border-r-2 ${props.darkMode? darkMode:lightMode}`} >
       <ul className="flex *:border-r-2 max-h-8 gap-5 text-center *:px-5">
        <li>For You</li>
        <li>Following</li>
        <li>Music</li>
       </ul>
       <form className="flex flex-col border-y-2 py-2">
        <h2>Whats on your mind? </h2>
        <input type="text" className="mx-5 bg-inherit border-2" />
        <button className="bg-slate-400 w-min py-2 px-4 rounded-lg  ml-auto mr-12 my-3 mb-1">Post</button>
       </form>
       <TimelinePost/>
       </div>
    )
}