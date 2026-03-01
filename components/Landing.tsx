"use client";
import Form from "next/form";
import { useEffect, useState } from "react";


export default function Landing () {
    const [file, setFile] = useState <File | null>(null);
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if (!file) return;
        const formdata = new FormData()
        formdata.append("file", file)

        const accessToken = localStorage.getItem("access");

        const response = await fetch("http://localhost:8000/resume/upload/", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            credentials: "include",
            method: "POST",
            body: formdata,
        });

        const data = await response.json();
        console.log(data);
        
        
    }
    return(
        <>
        <div className="h-screen w-screen bg-amber-400 flex flex-col items-center justify-center">
            <Form action="/#submit" onSubmit={handleSubmit}>
                <input type="file" className="h-[50px] w-[200px] bg-blue-300" onChange={(e) => {const selectedFile = e.target.files?.[0] ?? null; setFile(selectedFile)}}/>
                <button type="submit" className="h-[50px] w-[300px]">Submit</button>
            </Form>
        </div>
        </>
    );
}