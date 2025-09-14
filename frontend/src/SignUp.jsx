import React from "react"
const SignUp=()=>{
    return(
        <div className="flex flex-col items-center  mt-10 gap-6 ">
            <h1 className="text-blue-700 font-bold text-lg  ">Join BlogVerse</h1>
            <p className="mt-10">Create your account and <br></br>start your Blogging Jouirney</p>
            <form className="flex flex-col border-1 border-gray-400 w-1/3 p-5 justify-center items-center gap-5 rounded-xl">
                <div className="w-[90%]">
                    <p className="text-md text-gray-600 font-semibold">Full Name</p>
                    <input type="text" placeholder="Alekhya enter your fullname" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    
                </div>
                <div className="w-[90%]">
                    <p className="text-md text-gray-600 font-semibold">Email</p>
                    <input type="text" placeholder="enter your email" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    
                </div>
                <div className="w-[90%]">
                    <p className="text-md text-gray-600 font-semibold">Password</p>
                    <input type="text" placeholder="enter your password" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    
                </div>
                <div className="w-[90%]">
                    <p className="text-md text-gray-600 font-semibold">Confirm Password</p>
                    <input type="text" placeholder="enter your password" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    
                </div>
                <div className="flex gap-2 border-1 border-gray-700 w-[90%] py-2 px-5 rounded-xl items-center justify-center">
                    <input type="checkbox" name="" id=""/>
                    <p>I agree to terms and condition</p>
                </div>
                <button className="w-[90%] bg-purple-500 rounded-xl border-1 px-5 py-2">Create Account</button>
                <div className="border-[0.5px] border-gray-700 w-[90%]"></div>
                <p>Already Have an account?<span className="text-purple-500">  Sign In here</span></p>
                <button className="text-gray-700 font-semibold hover:bg-gray-200 py-2 px-5 w-[90%] rounded-xl cursor-pointer">Back to Home</button>
            </form>
        </div>
    )

}
export default SignUp