const express = require("express");
require("./config/connectdb")
const userRoutes = require("./routes/userRoutes")
const bodyparser = require("body-parser")
const app = express()
const port = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/user",userRoutes)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.listen(port ,"localhost", ()=>{
    console.log(`port is running ${port}`);
})