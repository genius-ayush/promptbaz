import { Router } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
const router = Router();

router.post("/signup", async (req, res) => {

    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
        where: {
            email
        }
    })

    if(!admin){
        return res.status(400).json({message : "Invalid Credentials"});
    }
    console.log(admin.password);
    console.log(password);
    const match = await bcrypt.compare(password , admin.password);
    console.log(match);

    if(!match){
        return res.status(400).json({message : "Invalid Credentials"});
    }

    const token = jwt.sign({email} , "secret");

    console.log(token);

    return res.status(200).json({message :"Login Successfull" , token});
})

export default router; 