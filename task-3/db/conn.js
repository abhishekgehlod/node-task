const mongoose = require("mongoose");
mongoose.set("strictQuery",true)

mongoose.connect("mongodb://localhost:27017/project")
.then(()=>{
    console.log("database connection successfull.....");
}).catch((err)=>{
    console.log(err);
})