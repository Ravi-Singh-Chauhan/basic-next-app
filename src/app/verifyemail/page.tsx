"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVrified] = useState(false);
    const [error, setError] = useState(false);
    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVrified(true);
        } catch (error: any) {
            setError(true);
            console.log(error.response.data);
        }
    };
    useEffect(() => {
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken ||"");
    }, [token]);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify  email</h1>
            <h2 className="p-2 font-bold rounded-xl text-2xl  bg-orange-500 text-white">
                {token ? `${token} ` : "No token"}
            </h2>
            {verified &&(
                <div>
                    <h2 className="text-2xl p-2 font-bold rounded-xl  bg-orange-500 text-white">Email Verified</h2>
                    <Link href="/login">
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-white">Error</h2>  
                </div>
            )}
        </div>
    );
}
