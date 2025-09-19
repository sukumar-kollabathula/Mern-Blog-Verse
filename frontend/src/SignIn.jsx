import React from "react";
const SignIn = () => {
    return (
        <div className="flex flex-col gap-6 w-full min-h-screen items-center  justify-center bg-blue-100  ">
           <div className="border border-gray-50 p-10 w-1/4 rounded-2xl bg-gray-50 shadow-2xl shadow-gray-400"> 
            <h1 className="text-black font-bold text-lg text-center ">Sign In</h1>
            <p className="text-center">Access your account</p>
            <form className="flex flex-col  p-5 justify-center  gap-5 rounded-xl ">
                <div>
                    <p className="text-md text-gray-600 font-semibold">Email Adress</p>
                    <input type="text" placeholder="enter your email" className="border-1 border-gray-200 w-full rounded-xl focus:outline-none focus:border-black px-5 py-2" ></input>
                </div>
                <div>
                    <p>Password</p>
                    <input type="text" placeholder="Enter your password" className="border-1 border-gray-200  w-full rounded-xl focus:outline-none focus:border-black  px-5 py-2"></input>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center px-5 py-2 ">
                        <input type="checkbox"></input>
                        <p className="">Remember me</p>
                    </div>
                    <button className="text-blue-400 cursor-pointer ">Forgot password?</button>
                </div>
                <button className=" w-full rounded-xl px-5 py-2  bg-blue-300 hover:bg-blue-600 cursor-pointer">SignIn</button>
                <div className="border-[0.5px] border-gray-700 w-[100%]"></div>
                <p className="text-center">Don't have an account?<span className="text-blue-600 cursor-pointer hover:underline">Create an account</span></p>




            </form>
            </div>
        </div>
    )
}
export default SignIn