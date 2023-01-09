const express = require("express");
require("./connection/connectdb")
const app = express()
const port = 3000;

app.get("/",(req,res)=>{
    console.log("hello guys😊");
})

app.listen(port,()=>{
    console.log(`serveris running is port ${port}`);
})