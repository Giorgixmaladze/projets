const mongoose = require("mongoose")


const roomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    RoomType:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    capacity:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    amenities:{
        type:[String]
    },
    image:{
        type:String,
        required:true
    }
})

const Room = mongoose.model("Room",roomSchema)


module.exports = {Room}