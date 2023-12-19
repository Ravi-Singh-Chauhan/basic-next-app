"use client"

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

export default function LoginPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        
    });
    const onLogin = async()=>{

    }
    return(
        <div className="flex flex-col min-h-screen items-center justify-center py-2">
            <h1 className="p-4">Login</h1>
            <hr />
            

            <label htmlFor="email" className="mt-7">email</label>
            <input id="email" value ={user.email} type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email" className="p-2 border border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600"/>

            <label htmlFor="password" className="mt-5">password</label>
            <input id="password" value ={user.password} type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password" className="p-2 border border-grey-300 rounded-lg md-4 focus:outline-none focus:border-grey-600"/>

            <button onClick={onLogin} className="p-2 border border-grey-300 bg-blue-500 mt-5 rounded-lg md-4 focus:outline-none focus:border-grey-600">Signup</button>
            <a href="/signup" className="mt-5">Visit Signup</a>
        </div>
    )
}