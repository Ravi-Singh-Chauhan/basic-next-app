"use client"


import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        
    });
    const [buttonDisabled,setButtonDisabled] = React.useState(false);
    const onLogin = async()=>{
        try {
            const response= await axios.post("/api/users/login",user);
            console.log("Login Up sucess = ",response.data);
            toast.success("login Success")
            router.push(`/profile/`)

        } catch (error:any) {
            console.log("Login failed",error.message);
            toast.error(error.message)
            
        }

    }
    useEffect(()=>{
        if((user.email.length && user.password.length)>0){
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    },[user])

    return(
        <div className="flex flex-col min-h-screen items-center justify-center py-2">
            <h1 className="p-4">Login</h1>
            <hr />
            

            <label htmlFor="email" className="mt-7">email</label>
            <input id="email" value ={user.email} type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" className="p-2 border border-grey-300 text-black rounded-lg md-4 focus:outline-none focus:border-grey-600"/>

            <label htmlFor="password" className="mt-5">password</label>
            <input id="password" value ={user.password} type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" className="p-2 border text-black border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600"/>

            <button onClick={onLogin} className="p-2 border border-grey-300 bg-blue-500 mt-5 rounded-lg md-4 focus:outline-none focus:border-grey-600">{buttonDisabled?"No Login":"Login"}</button>
            <a href="/signup" className="mt-5">Visit Signup</a>
        </div>
    )
}