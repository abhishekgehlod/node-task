const express = require("express");
const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    }
})

const  userModel = new mongoose.model("user",userSchema);

module.exports = userModel