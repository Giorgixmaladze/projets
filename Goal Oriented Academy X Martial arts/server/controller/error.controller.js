const errorProd = (err,req,res,next) =>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message
    })

}


const errorDev = (err,req,res,next) =>{
    res.json(err)
}

const globalErrorHanlder = (err,req,res,next) =>{
    if(process.env.NODE_ENV === "development"){
        return errorDev(err,req,res,next)
    }else if(process.env.NODE_DEV === "production"){
        return errorProd(err,req,res,next)
    }
}


module.exports = globalErrorHanlder