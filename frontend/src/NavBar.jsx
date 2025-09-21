import React from "react"
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div className="border-b-1 flex justify-around h-16 items-center w-full">
            <h1 className="text-lg lg:text-2xl font-bold">Blogverse</h1>
            <Link to ="/home" className="text-black cursor-pointer hover:bg-gray-600 px-5 py-2 rounded-2xl">Home</Link>

            <div>
            <Link to ="/signin"className="font-bold text-gray-600 cursor-pointer m-5 ">SignIn</Link>
            <Link to ="/signup" className="bg-blue-700 text-white py-2 px-5 rounded-2xl shadow-lg shadow-blue-700">SignUp</Link>
            </div>
        </div>
    )
}
export default NavBar