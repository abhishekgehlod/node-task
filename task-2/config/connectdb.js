const mongoose = require("mongoose");
mongoose.set("strictQuery", false)
mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("database connection successfull.......");
}).catch((err)=>{
    console.log(err);
})