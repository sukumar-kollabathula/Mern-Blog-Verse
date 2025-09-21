import React from "react";
import NavBar from "./NavBar";
import {Link} from "react-router-dom"
import { Mail } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const SignIn = () => {
    const SignUp = () => {
        const[ShowPassword,setShowPassword] =useState(false);
        
        const handlePassword=() =>{
            setShowPassword((password)=>!password)
        }
    }
    return (
        <div>
            <NavBar/>
        <div className="flex flex-col gap-6 w-full min-h-screen items-center  justify-center bg-blue-100  ">
           <div className="border border-gray-50 p-10 md:w-1/4 rounded-2xl bg-gray-50 shadow-2xl shadow-gray-400 w-[90%]"> 
            <h1 className="text-black font-bold text-lg text-center ">Sign In</h1>
            <p className="text-center">Access your account</p>
            <form className="flex flex-col  p-5 justify-center  gap-5 rounded-xl  ">
                <div className="relative">
                    <div>
                    <p className="text-md text-gray-600 font-semibold">Email Adress</p>
                    <input type="text" placeholder=" Enter your email" className="border-1 border-gray-200 w-full rounded-xl focus:outline-none focus:border-black px-5 py-2" ></input>
                    <Mail className="absolute top-8.5 left-1.5 w-[15px] "/>
                    </div>
                </div>
                <div>
                    <div className="relative">
                    <p>Password</p>
                    <input type="text" placeholder=" Enter your password" className="border-1 border-gray-200  w-full rounded-xl focus:outline-none focus:border-black  px-5 py-2"></input>
                      <KeyRound className="absolute top-8 w-[15px] left-1"/>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center md:px-5 md:py-2 ">
                        <input type="checkbox"></input>
                        <p className="text-sm md:text-lg">Remember me</p>
                    </div>
                    <button className="text-blue-400 cursor-pointer text-sm md:text-lg">Forgot password?</button>
                </div>
                <button className=" w-full rounded-xl px-5 py-2  bg-blue-300 hover:bg-blue-600 cursor-pointer">SignIn</button>
                <div className="border-[0.5px] border-gray-700 w-[100%]"></div>
                <p className="text-center">Don't have an account?<Link to="/signup" className="text-blue-600 cursor-pointer hover:underline">Create an account</Link></p>





            </form>
            </div>
        </div>
        </div>

    )
}
export default SignIn