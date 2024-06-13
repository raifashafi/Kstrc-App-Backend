const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")
const bcrypt=require("bcryptjs")
const {usermodel}=require("./models/kstrc")

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://raifashafi:raifashafi@cluster0.tznb7.mongodb.net/ksrtcDB?retryWrites=true&w=majority&appName=Cluster0")


const generateHashedPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

app.post("/signUp",async(req,res)=>{
    let input=req.body
    let hashedPassword = await generateHashedPassword(input.password)
    console.log(hashedPassword)
    input.password = hashedPassword
    let kstrc = new usermodel
    blog.save()
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("success")
})
