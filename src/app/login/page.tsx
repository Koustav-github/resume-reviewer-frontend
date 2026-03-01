"use client";
import Form from "next/form";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Login () {
    const [email, setEmail] = useState<string | null>(null);
    const router = useRouter();
    const [password, setPassword] = useState<string | null>(null);
    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!email || !password) return;

        const response = await fetch("http://localhost:8000/accounts/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({email, password}),
        })

        const data = await response.json();
        console.log(data);
        localStorage.setItem("access", data.access);
        router.push("../")
    }
    return(
        <>
        <form action="/components/Landing" onSubmit={handleSubmit}>
            <input type="email" className="h-[50px] w-[200px] bg-white text-black" onChange={(e)=>{const email = e.target.value; setEmail(email)}}/>Enter email here
            <input type="password" className="h-[50px] w-[200px] bg-white text-black" onChange={(e)=>{const password = e.target.value; setPassword(password)}}/>Enter password here
            <button type="submit">Login</button>
        </form>
        </>
    )
}