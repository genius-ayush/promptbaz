import { Router } from "express";
import { verifyAdmin } from "../middewares/auth";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const router = Router() ; 

router.get("/" , verifyAdmin ,  async(req , res) => {

    try{
        const prompts = await prisma.prompt.findMany();
    return res.status(200).json({message : "Prompts Fetched" , prompts});
    }catch(error){
        return res.status(500).json({message : "Internal Server Error"});
    }
    
})

router.post("/", verifyAdmin, async (req, res) => {
  const {
    title,
    promptText,
    sampleImageUrl,
    modelUsed,
    steps,
    aspectRatio,
    seed,
    categories = [],
    tags = [],
  } = req.body;

  try {
    const prompt = await prisma.prompt.create({
      data: {
        title,
        promptText,
        sampleImageUrl,
        modelUsed,
        steps,
        aspectRatio,
        seed,
        categories: {
          connectOrCreate: categories.map((cat: string) => ({
            where: { name: cat },
            create: { name: cat },
          })),
        },
        tags: {
          connectOrCreate: tags.map((tag: string) => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    });

    return res.status(200).json({ message: "Prompt Created", prompt });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


router.get("/:id" , verifyAdmin , async(req , res) => {
    const {id} = req.params ; 
    try{
        const prompt = await prisma.prompt.findUnique({
            where : {
                id : id
            }
        })
        return res.status(200).json({message : "Prompt Fetched" , prompt});
    }catch(error){
        return res.status(500).json({message : "Internal Server Error"});
    }
})

router.put("/:id" , verifyAdmin , async(req , res) => {
    const {id} = req.params ; 
    try{
        const prompt = await prisma.prompt.update({
            where : {
                id : id
            },
            data : req.body
        })
        return res.status(200).json({message : "Prompt Updated" , prompt});
    }catch(error){
        return res.status(500).json({message : "Internal Server Error"});
    }
})

router.delete("/:id" , verifyAdmin , async(req , res) => {
    const {id} = req.params ; 
    try{
        const prompt = await prisma.prompt.delete({
            where : {
                id : id
            }
        })
        return res.status(200).json({message : "Prompt Deleted" , prompt});
    }catch(error){
        return res.status(500).json({message : "Internal Server Error"});
    }   
})


export default router ; 