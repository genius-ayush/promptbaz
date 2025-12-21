'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useInsertionEffect, useState } from "react"
import axios from "axios"
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const router = useRouter() ; 
  const [email , setEmail] = useState("") ; 
  const [password , setPassword] = useState("") ; 
  const [loading , setLoading] = useState(false) ; 
  const [error , setError] = useState("")
  const [token , setToken] = useState("")

    const handleLogin = async(e:React.FormEvent)=>{
      e.preventDefault() ; 
      setLoading(true) ; 
      setError("") ;

      console.log(email , password) ; 
      try{
        
          console.log("login") ; 
          const response = await axios.post("http://localhost:5000/auth/signup" , {email , password})
          console.log(response)
          if(!response.data){
            console.log("reached here"  )
            setError("Invalid credentials") ; 
            setLoading(false) ; 
          }
          else{
            //@ts-ignore
            localStorage.setItem("token" , response.data)
            setLoading(false) ; 
            setError("") ; 
            router.push("/dashboard")
          }
        
          console.log(response.data) 
        

      }catch(err){
        console.log(err)
        setError("something went wrong") ; 
        setLoading(false) ; 
      }
    }


    if(loading){
      return <div>Loading...</div>
    }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your admin account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  
                </div>
                <Input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                
              </Field>

              <p className="text-red-500">{error}</p>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
