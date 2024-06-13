const mongoose=require("mongoose")
const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/signUp",(req,res)=>{
    res.json({"status":"success"})
})

app.listen(8080,()=>{
    console.log("success")
})
