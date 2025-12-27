import { Router } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { verifyAdmin } from "../middewares/auth";
const prisma = new PrismaClient();
const router = Router();

router.post("/signup", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
        where: {
            email
        }
    })

    if(!admin){
        return res.status(400).json({message : "Invalid Credentials"});
    }
    
    const match = await bcrypt.compare(password , admin.password);
    

    if(!match){
        return res.status(400).json({message : "Invalid Credentials"});
    }

    const token = jwt.sign({email} , "secret");

    

    return res.status(200).json({message :"Login Successfull" , token});
})

router.get('/me' ,verifyAdmin ,  (req , res)=>{
     
    return res.status(200).json({message : "verified admin" , isAdmin : true})

})

export default router; 