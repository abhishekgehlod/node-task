const mongoose = require("mongoose");
mongoose.set("strictQuery",true)
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    console.log("connection is successfull......");
}).catch((err)=>{
    console.log(err);
})