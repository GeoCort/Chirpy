import { useState } from "react"
import bird from "../assets/chirpy.webp"
import chirpy from "../assets/chirpyBackground.webp"
import { Link } from "react-router-dom"
export default function Login(){
    const [darkMode, setDarkMode] = useState(" h-screen m-12  ")
    const [loginScreen, setLoginScreen] = useState(true)
    const inputClass = "p-2 border-2 rounded-md w-full"
    const labelClass = "text-xl text-semibold"
    const inputDiv = "mx-10"
    const switchSignupSheet = (e)=>{
        e.preventDefault()
        setLoginScreen(!loginScreen);
        
    }
    return(
        <section className={darkMode}>
            <article className="h-5/6 bg-zinc-50 rounded-lg flex max-w-[1200px] xl:mx-auto">
                <div className="w-1/2">
                    <img src={chirpy} className="w-full object-cover min-h-full max-h-full rounded-lg shadow-lg"/>
                </div>
               {loginScreen?  <div className="w-1/2 p-10 bg-zinc-50">
                    <form className="bg-white min-h-full rounded-lg p-4 flex flex-col gap-4">
                        <h3 className="text-center text-4xl font-semibold m-4 mt-8">Login</h3>
                        <div className={inputDiv}>
                            <label htmlFor="username" className={labelClass}>Username</label><br/>
                            <input type="text" name="username" className={inputClass} required/>
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="loginPassword" className={labelClass} >Password</label><br/>
                            <input type="password" name="password" id="loginPassword" className={inputClass} required/>
                        </div>
                        <button className="mx-10 text-white bg-blue-600 rounded-md py-2 hover:bg-blue-400">Login</button>
                        <p className="text-center text-italic">Not a user? <button onClick={switchSignupSheet} className="text-blue-500 underline underline-offset-2">Sign up</button></p>
                    </form>
                </div> :  <div className="w-1/2 p-10">
                    <form className="bg-white min-h-full rounded-lg p-4 flex flex-col gap-4">
                        <h3 className="text-center text-4xl font-semibold m-4 mt-8">Signup</h3>
                        <div className={inputDiv}>
                            <label htmlFor="username" className={labelClass}>Username</label><br/>
                            <input type="text" name="username" className={inputClass} required/>
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="loginPassword" className={labelClass} >Password</label><br/>
                            <input type="password" name="password" id="loginPassword" className={inputClass} required/>
                        </div>
                        <button className="mx-10 text-white bg-blue-600 rounded-md py-2 hover:bg-blue-400">Login</button>
                        <p className="text-center text-italic">Not a user? <button onClick={switchSignupSheet} className="text-blue-500 underline underline-offset-2">Sign up</button></p>
                    </form>
                </div>}
            </article>
        </section>
    )
}