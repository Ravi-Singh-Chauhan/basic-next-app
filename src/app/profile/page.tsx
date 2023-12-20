"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

import toast from "react-hot-toast"


export default function ProfilePage(){
    const router = useRouter();
    const [data,setData] = useState("");
    const logout =async ()=>{
        try {
            await axios.get("/api/users/logout")
            router.push("/login")
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }

    }
    const mydet = async()=>{
        console.log("Getting clicked");
        const res= await axios.get("/api/users/me")
        setData(res.data.data._id)
        
    }
    return(
        <div className="flex flex-col file w-screen h-screen items-center justify-center">
            <h1 className="text-4xl mb-5">Profile</h1>
            
            <p className="text-2xl ">Profile page</p>
            <h2 className="text-4xl bg-orange-400 p-4 rounded font-bold cursor-pointer">{data===""?"Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">LogOut</button>
            <button onClick={mydet} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Get my details.</button>
        </div>
    )

}