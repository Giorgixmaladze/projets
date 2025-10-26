const Message = require("../model/message.model")

const sendMessages = async (req,res,next) =>{
    try{
        const {name,email,text} = req.body


        const message = await Message.create({
            name,
            email,
            text
        })

        res.json(message)
    }catch(err){
        console.error(err)
    }
}

module.exports = sendMessages