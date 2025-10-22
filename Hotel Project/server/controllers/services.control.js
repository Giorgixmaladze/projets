const Services = require("../model/services.model")

const getServices = async (req,res,next) =>{
    try{
        const services = await Services.find()
        res.json(services)
    }catch(err){
        res.status(404).json({
            message:err.message
        })
    }
}
module.exports = {getServices}