import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function verifyAdmin(req :Request , res : Response , next : NextFunction){
    
    const token = req.headers.authorization?.split(" ")[1]; 
    console.log("reached inside middleware") ; 
    console.log(token) ; 
    if(!token){
        return res.status(401).json({message : "Unauthorized"}); 
    }

    try {
        const decodedToken = jwt.verify(token , "secret");
        req.admin = decodedToken;
        next(); 
    } catch (error) {
        return res.status(401).json({message : "Unauthorized"}); 
    }
}