'use client'
import { LoginForm } from "@/components/login-form";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin , setIsLogin] = useState(false) ; 
  

  useEffect(()=>{
    const token = localStorage.getItem("token") ;

    if(token){

    const fetchMe = async()=>{
      const isAdmin = await axios.get("http://localhost:5000/auth/me" ,{
      headers : {
        Authorization : `Bearer ${token}`
      }} ) 
      console.log("hey there")
      console.log(isAdmin) ; 

    }

    fetchMe() ;

    
    
  } 
  } , [])
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
