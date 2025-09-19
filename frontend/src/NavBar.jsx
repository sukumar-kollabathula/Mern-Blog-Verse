import React from "react"
const NavBar = () => {
    return (
        <div className="border-b-1 flex justify-around h-16 items-center">
            <h1 className="text-2xl font-bold">Blogverse</h1>
            <button className="text-black cursor-pointer hover:bg-gray-600 px-5 py-2 rounded-2xl">Home</button>

            <div>
            <button className="font-bold text-gray-600 cursor-pointer m-5 ">SignIn</button>
            <button className="bg-blue-700 text-white py-2 px-5 rounded-2xl shadow-lg shadow-blue-700">SignUp</button>
            </div>
        </div>
    )
}
export default NavBar