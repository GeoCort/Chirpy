import defaultProfilePicture from "./assets/defaultProfileImage.webp"
import { Link } from "react-router-dom"
function UserList(props){
    const listItemClass = "group flex justify-between items-center p-5 even:bg-slate-100 "
    const buttonClass ="invisible group-hover:visible ml-auto py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-800"
    return(
    <li className={listItemClass}>
        <div className="">
        <img src={defaultProfilePicture} className="h-12 w-12 rounded-full inline mr-5"/>
        <span>Username</span></div>
        <button className={buttonClass}>
            View Profile    
        </button>
    </li>
    )
}
export default function AllUsers(props){
    return(
        <div className="col-span-2 sm:col-span-1 flex flex-col ml-5 mt-5">
            <h1 className=" py-5 text-3xl text-center font-semibold">Explore The Growing Community!</h1>
            <ul className="text-lg font-semibold">
                <UserList/>
                <UserList/>
                <UserList/>
                <UserList/>
            </ul>
        </div>
    )
}