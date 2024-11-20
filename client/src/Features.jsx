import { useState } from "react"
export default function Features(props){
    const [lightMode, setLightMode ] = useState("border-black  text-zinc-800")
    const [darkMode, setDarkMode] = useState("border-zinc-50 bg-zinc-800 text-zinc-50")
    const articleClass = "p-4 flex flex-col gap-2 "
    const buttonClass ="ml-auto block py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-800"
    const headers = "text-2xl text-center py-2 font-semibold bg-zinc-100 rounded-lg"
    const linksClass = "text-blue-500 font-semibold mx-4"
    return(
        <div className={`mx-3 lg:flex flex-col gap-5 hidden p-5 ${props.darkMode?darkMode:lightMode}`}>
        <input type="text" className="rounded-lg p-3 bg-zinc-50 border-2 " placeholder="Search"/>
        <article className="border-2 rounded-lg p-2 flex items-center">
            <p className="text-xl">Get Premium</p>
            <button className={buttonClass}>Subscribe</button>
        </article>
        <section className="border-2 rounded-md ">
            <article className={articleClass}>
                <h2 className={headers}>Newest Members</h2>
                <span className={linksClass}>Lilith</span>
                <span className={linksClass}>Lilith</span>
                <span className={linksClass}>Lilith</span>
            </article>
        </section>
        <section className="border-2 rounded-lg ">
            <article className={articleClass}>
                <h2 className={headers}>Recent Activity</h2>
                <span className={linksClass}>Lilith</span>
                <span className={linksClass}>Lilith</span>
                <span className={linksClass}>Lilith</span>
            </article>
        </section>
        </div>
    )
}