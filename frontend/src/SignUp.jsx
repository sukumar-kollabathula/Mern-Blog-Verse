import React from "react"
import { useState } from "react"
import NavBar from "./NavBar"
import { Link } from "react-router-dom"
import { CircleUser } from 'lucide-react';
import { Mail } from 'lucide-react';
import { KeySquare } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
const SignUp = () => {
    const [errors, setErorrs] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""

    })
    const [ShowPassword, setShowPassword] = useState(false);
    const [ShowConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        let newErrors = {}
        if (!formData.fullname) {
            newErrors.fullname = "Please enter your fullname"
        }
        if (!formData.email) {
            newErrors.email = "Please enter your email"
        }
        if (!formData.password) {
            newErrors.password = "Please enter your password"
        }
        if (!formData.confirmpassword) {
            newErrors.confirmpassword = "Please confirm your password"
        }
        else if (formData.password !== formData.confirmpassword) {
            newErrors.confirmpassword = "Password not matched"
        }
        if (Object.keys(newErrors).length > 0) {
            setErorrs(newErrors);
        } else (
            setSuccess("your account has been created successfully"),
            setFormData({
                fullname: "",
                email: "",
                password: "",
                confirmpassword: ""

            })

        )

    }
    // if(!formData.fullname || !formData.email || !formData.password || !formData.confirmpassword)
    //     setError("Please fill all the fields")
    // else if(formData.password !== formData.confirmpassword )
    //     setError("Your password doesnot matches")

    // else(
    //     setSuccess("Your account is created successfully"),
    //     setError(""),
    //     setFormData({
    //         fullname:"",
    //         email:"",
    //         password:"",
    //         confirmpassword:""

    //     }
    // ))

const [formData, setFormData] = useState(
    {
        fullname: "",
        email: "",
        password: "",
        confirmpassword: ""
    }
)
const handlePassword = () => {
    setShowPassword((password) => !password)
}
const handleConfirmPassword = () => {
    setShowConfirmPassword((ConfirmPassword) => !ConfirmPassword)
}
const handleChange = (event) => {
    setError("")
    setSuccess("")
    setFormData((formData) => ({
        ...formData,
        [event.target.name]: event.target.value

    }))
    setErrors((Errors) => ({
        ...Errors,
        [event.target.name]: ""


    }
    ))
}

return (
    <div className="flex flex-col items-center gap-5">
        <NavBar />
        <h1 className="text-blue-700 font-bold text-lg  ">Join BlogVerse</h1>
        <p className="mt-10">Create your account and <br></br>start your Blogging Jouirney</p>
        <form onSubmit={handleSubmit} className="flex flex-col border-1 border-gray-400 w-1/3 p-5 justify-center items-center gap-5 rounded-xl">
            <div className="w-[90%]">
                <div className="relative">
                    <p className="text-md text-gray-600 font-semibold">Full Name</p>
                    <input value={formData.fullname} onChange={handleChange} name="fullname" type="text" placeholder="Enter your fullname" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    <CircleUserRound className="absolute top-9.5 h-[15px] text-gray-500 " />
                    {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
                </div>
            </div>
            <div className="w-[90%] ">

                <p className="text-md text-gray-600 font-semibold">Email</p>
                <div className="relative">
                    <input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="Enter your email" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    <Mail className="absolute top-2.5 left-1 pr-2 text-gray-500" />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
            </div>
            <div className="w-[90%]">
                <div className="relative">
                    <p className="text-md text-gray-600 font-semibold">Password</p>
                    <input value={formData.password} onChange={handleChange}
                        name="password" type={ShowPassword ? "Password" : "text"} placeholder="Enter your password" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    <KeySquare className="absolute top-9.5 h-[15px] text-gray-500 " />
                    <p onClick={handlePassword}>{ShowPassword ? <Eye className="absolute top-9.5 h-[15px] text-gray-500 right-1 cursor-pointer" /> : <EyeOff className="absolute top-9.5 h-[15px] text-gray-500 right-1 cursor-pointer" />}</p>
                    {errors.password && <p className="text-red-500">{errors.password}</p>}

                </div>
            </div>
            <div className="w-[90%]">
                <div className="relative">
                    <p className="text-md text-gray-600 font-semibold">Confirm Password</p>
                    <input value={formData.confirmpassword} onChange={handleChange} name="confirmpassword" type={ShowConfirmPassword ? "Password" : "text"} placeholder="Re-enter your password" className="border-1 border-gray-700 w-full rounded-xl focus:outline-none focus:border-blue-600 px-5 py-2" ></input>
                    <LockKeyhole className="absolute top-9.5 text-gray-500 h-[15px]" />
                    <p onClick={handleConfirmPassword}>{ShowConfirmPassword ? <Eye className="absolute top-9.5 h-[15px] text-gray-500 right-1" /> : <EyeOff className="absolute top-9.5 h-[15px] text-gray-500 right-1" />}</p>
                    {errors.confirmpassword && <p className="text-red-500">{errors.confirmpassword}</p>}
                </div>
            </div>
            <div className="flex gap-1">
                <input type="checkbox" name="" id="" />
                <p>I agree to terms and condition</p>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <button type="submit" className="w-[90%] bg-purple-500 text-amber-50 rounded-xl border-1 px-5 py-2 flex justify-center gap-2 cursor-pointer"><CircleUser className="text-amber-50" />Create Account</button>
            <div className="border-[0.5px] border-gray-700 w-[90%]"></div>
            <p>Already Have an account?<Link to="/signin" className="text-purple-500">Sign In here</Link></p>
            <Link to="/home" className="text-gray-700 font-semibold hover:bg-gray-200 py-2 px-5 w-[90%] rounded-xl cursor-pointer text-center">Back to Home</Link>
        </form>
    </div>
)
}
export default SignUp