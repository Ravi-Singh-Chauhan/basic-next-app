"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignupPage(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    });
    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const onSignUP = async()=>{
        try {
            const response= await axios.post("/api/users/signup",user);
            console.log("Sign Up sucess = ",response.data);
            router.push("/login")
        } catch (error:any) {
            console.log("signup failed",error.message);
            
            toast.error(error.message)
        }

    }
    useEffect(()=>{
        if((user.email.length && user.username.length && user.password.length)>0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }

    },[user])
    return(
        <div className="flex flex-col min-h-screen items-center justify-center py-2">
            <h1 className="p-4">Signup</h1>
            <hr />
            <label htmlFor="username">username</label>
            <input id="username" value ={user.username} type="text" onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="username" className="p-2 border border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600 text-black"
            />

            <label htmlFor="email" className="mt-7">email</label>
            <input id="email" value ={user.email} type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" className="p-2 border text-black border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600"/>

            <label htmlFor="password" className="mt-5">password</label>
            <input id="password" value ={user.password} type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" className="p-2 border border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600 text-black"/>

            <button onClick={onSignUP} className="p-2 border border-grey-300 bg-blue-500 mt-5 rounded-lg md-4 focus:outline-none focus:border-grey-600">{buttonDisabled?"No signup":"Sign up"}</button>
            <a href="/login" className="mt-5">Visit login </a>
        </div>
    )
}