import { useState } from "react"
import TimelinePost from "./Components/TimelinePost"
function AddCommentBox(props){
    const buttonClass ="ml-auto block py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-800"
    const baseCharCount = 99;
    const [charCount, setCharCount] = useState(baseCharCount);
    const [disabled,setDisabled] = useState(false)
    const charCountCheck = (e)=>{
        console.log(e.target)
        if(e.target.value.length >= 99){
            setDisabled(true)
            setCharCount(0)
            e.target.isDisabled = true;
            return
        }
        setDisabled(false)
        const val = e.target.value;
        let newChar = baseCharCount - val.length
        setCharCount(newChar)
    }
    return(
        <form className="flex flex-col border-y-2 p-4">
        <textarea type="text" className="mx-5 bg-inherit p-2 my-3 text-xl " placeholder="Whats on your mind?" onChange={charCountCheck} ></textarea>
        <div className="flex justify-between w-full border-t-2 p-2">
        <p className="text-lg font-semibold">Char Count: {charCount}</p><button className={disabled?buttonClass + " bg-blue-300" :buttonClass} disabled={disabled}>Post</button>
        </div>
       </form>
    )
}
export default function Timeline(props){
    const [lightMode, setLightMode ] = useState("border-black  text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    
    return(
       <div className={` col-span-2 sm:col-span-1 flex flex-col text-white border-x-2 ${props.darkMode? darkMode:lightMode}`} >
       <h1>Welcome back {props.user? props.user.username: "anon" }</h1>
       {/* Whats on your mind box */}
       <AddCommentBox/>
       <TimelinePost/>
       </div>
    )
}