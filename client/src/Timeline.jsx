import { useState } from "react"
import TimelinePost from "./Components/TimelinePost"
function AddCommentBox(props){
    const buttonClass ="ml-auto block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-800"

    return(
        <form className="flex flex-col border-y-2 p-4">
        <input type="text" className="mx-5 bg-inherit p-2 my-3 text-xl " placeholder="Whats on your mind?" />
        <div className="block w-full border-t-2 p-2">
        <button className={buttonClass}>Post</button>
        </div>
       </form>
    )
}
export default function Timeline(props){
    const [lightMode, setLightMode ] = useState("border-black  text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    
    return(
       <div className={`flex flex-col text-white border-r-2 ${props.darkMode? darkMode:lightMode}`} >
       <ul className="flex *:border-r-2 max-h-8 gap-5 text-center *:px-5 overflow-hidden">
        <li>For You</li>
        <li>Following</li>
        <li>Music</li>
        <li>Following</li>
        <li>Music</li>
        <li>Diamonds</li>
       </ul>
       {/* Whats on your mind box */}
       <AddCommentBox/>
       <TimelinePost/>
       </div>
    )
}