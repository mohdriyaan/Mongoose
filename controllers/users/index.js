import express from "express"
import usersModel from "../../model/users/TaskyUsers.js"

const router = express.Router()

router.use(express.json())
router.post("/register",async(req,res)=>{
    try{
        let clientData = req.body
        let clientDataVerify = new usersModel(clientData)
        await clientDataVerify.save()
        res.status(201).json({"message":"User Registered Successfully!!"})
    }catch(err){
        console.log(err.errors)
        res.status(501).json({message:err.errors})
    }
})

export default router