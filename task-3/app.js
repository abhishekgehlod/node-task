const express = require("express");
require("./db/conn.js")
const userModel = require("./models/user")
const app = express()
const port = process.env.PORT || 8000;

app.use(express.json())



app.post("/user",async(req,res)=>{
    try{
        const addingdata = new userModel(req.body)
        const add =  await addingdata.save()
        res.send(add)


    }catch(err){
        res.send(err)
    }
})

app.get("/user", async(req,res)=>{
    try{
        const getdata =  await userModel.find({});
        res.send(getdata)


    }catch(err){
        res.send(err)
    }
})

app.patch("/user/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const updatedata = await userModel.findByIdAndUpdate(_id,req.body,{new:true})
        res.send(updatedata)

    }catch(err){
        res.send(err)
    }
})

app.delete("/user/:id", async(req,res)=>{
    try{
        const _id = req.params.id;
        const deletedata = await userModel.findByIdAndDelete(_id,)
        res.send(deletedata)

    }catch(err){
        res.send(err)
    }
})




app.listen(port,()=>{
    console.log(`connection is running is port ${port}`);
})