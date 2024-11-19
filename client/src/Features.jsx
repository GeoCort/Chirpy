import { useState } from "react"
export default function Features(props){
    const [lightMode, setLightMode ] = useState("border-black bg-zinc-50 text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    
    return(
        <div className={`mx-3 lg:flex flex-col gap-5 hidden p-5 ${props.darkMode?darkMode:lightMode}`}>
        <input type="text" className="rounded-lg p-2 " placeholder="Search"/>
        <article className="border-2 rounded-lg p-2 ">
            <button className="ml-auto block py-1 px-2 bg-slate-500 rounded-lg">Subscribe</button>
        </article>
        <section className="border-2 rounded-lg ">
            <article>
                <h2 className="text-2xl text-center">Welcome New Users</h2>
                New Users
                <p>Michael</p>
                <p>Lisa</p>
            </article>
        </section>
        <section className="border-2 rounded-lg ">
            <article>
                <h2 className="text-2xl text-center">New Posts</h2>
                New Users
                <p>Michael</p>
                <p>Lisa</p>
            </article>
        </section>
        </div>
    )
}