'use client'

import axios from "axios";
import { useEffect, useState } from "react";

interface Prompt{
    id: string ; 
    title: string ; 
    description: string ; 
    category: string ; 
    sampleImageUrl: string ; 
    
}

export default function Prompts(){

    const [prompts , setPrompts] = useState<Prompt[]>([]) ;
    const [loading , setLoading] = useState(false) ; 
    const [error , setError] = useState("") ; 

    useEffect(()=>{
        
        setLoading(true) ; 

        const fetchPrompts = async()=>{

            try{
                const prompts = await axios.get("http://localhost:5000/prompts") ;
                //@ts-ignore
                console.log(prompts.data.prompts) ; 
                //@ts-ignore
                setPrompts(prompts.data.prompts) ; 
                setLoading(false) ;
            }catch(error){
                console.log(error) ; 
                setLoading(false) ; 
                setError("Error fetching prompts") ; 
            }
            
             
        }
        fetchPrompts() ; 
        
    } , [])


    if(loading){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h1>error fetching prompts</h1>
            </div>
        )
    }
    
    return(
        <div >
            <div className="flex justify-center pt-10 ">
            <div className="font-bold text-3xl">Prompts</div>
            </div>
            <div >
            <div className="flex flex-wrap gap-4 justify-center mt-10">
                {prompts.map((prompt)=>card(prompt.title , prompt.sampleImageUrl))}
            </div>
            </div>
        </div>
    )
}

const card = (title :string  , Image: string )=>{
    return(
        <div className="flex flex-col gap-2">
        <div>{title}</div>
        <img src={Image} alt="" />
        </div>
    )
}