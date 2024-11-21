import { useState } from "react"
import bird from "../assets/chirpy.webp"
import chirpy from "../assets/chirpyBackground.webp"
import { Link } from "react-router-dom"
export default function Login(){
    const [darkMode, setDarkMode] = useState(" h-screen m-12  ")
    const [loginScreen, setLoginScreen] = useState(true)
    const inputClass = "p-2 border-2 rounded-md w-full"
    const inputDiv = "mx-10"
    return(
        <section className={darkMode}>
            <article className="h-5/6 bg-blue-300 rounded-lg flex max-w-[1200px] xl:mx-auto">
                <div className="w-1/2">
                    <img src={chirpy} className="w-full object-cover min-h-full max-h-full"/>
                </div>
                <div className="w-1/2 p-10">
                    <form className="bg-zinc-50 min-h-full rounded-lg p-4 flex flex-col gap-4">
                        <h3 className="text-center text-3xl font-semibold m-4">Login</h3>
                        <div className={inputDiv}>
                            <label htmlFor="username">Username</label><br/>
                            <input type="text" name="username" className={inputClass}/>
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="loginPassword">Password</label><br/>
                            <input type="password" name="password" id="loginPassword" className={inputClass} />
                        </div>
                        <button className="mx-10 text-white bg-blue-400 rounded-md py-2">Login</button>
                        <p className="text-center text-italic">Not a user? <Link>Sign up</Link></p>
                    </form>
                </div>
            </article>
        </section>
    )
}