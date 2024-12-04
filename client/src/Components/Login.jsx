import { useState } from "react"
import bird from "../assets/chirpy.webp"
import chirpy from "../assets/chirpyBackground.webp"
import { Link } from "react-router-dom"
import axios from 'axios'
export default function Login(){
    const [darkMode, setDarkMode] = useState(" h-screen m-12  ")
    const [loginScreen, setLoginScreen] = useState(true)
    const inputClass = "p-2 border-2 rounded-md w-full"
    const labelClass = "text-xl text-semibold"
    const inputDiv = "mx-10"
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const switchSignupSheet = (e)=>{
        e.preventDefault()
        setLoginScreen(!loginScreen);
        
    }
    const login = async (e)=>{
        e.preventDefault()
        // let response = await axios.post("/login", {
        //     username:username,
        //     password: password
        // })
    }
    const passwordChange = (e)=>{
        let input = e.target;
        setPassword(input.value)
    }
    const usernameChange = (e)=>{
        let input = e.target;
        setUsername(input.value)
    }
    return(
        <section className={darkMode}>
            <article className="h-5/6 bg-zinc-50 rounded-xl flex max-w-[1200px] xl:mx-auto">
                <div className="hidden lg:block w-1/2">
                    <img src={chirpy} className="w-full object-cover min-h-full max-h-full rounded-lg shadow-lg"/>
                </div>
               {loginScreen?  <div className="w-full lg:w-1/2 p-10 bg-zinc-50">
                    <form className="bg-white min-h-full rounded-lg p-4 flex flex-col gap-4" onSubmit={login}>
                        <h3 className="text-center text-4xl font-semibold m-4 mt-8">Welcome Back! Login</h3>
                        <div className={inputDiv}>
                            <label htmlFor="username" className={labelClass} >Username</label><br/>
                            <input type="text" name="username" className={inputClass} onChange={usernameChange} required/>
                        </div>
                        <div className={inputDiv}>
                            <label htmlFor="loginPassword" className={labelClass} >Password</label><br/>
                            <input type="password" name="password" id="loginPassword" className={inputClass} onChange={passwordChange}  required/>
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
                            <label htmlFor="loginPassword" className={labelClass} >Email</label><br/>
                            <input type="email" name="email" id="loginPassword" className={inputClass} required/>
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