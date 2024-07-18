const { stack } = require("../routes/goalroutes")

const errorHandler=async(err,req,res,next)=>{
    const statusCode=res.statusCode? res.statusCode:500
    res.status(statusCode)

    res.json({
        message:err.message,
        stack:err.stack
    })
}

module.exports={errorHandler}