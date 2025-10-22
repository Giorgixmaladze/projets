const mongoose = require("mongoose")


const serviceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    image:{
        type:String,
        required:[true,"Image is required"]
    },
    icon:{
        type:String
    }
    
})


const Services = mongoose.model("Service",serviceSchema)


module.exports = Services