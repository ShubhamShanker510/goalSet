const expressasynchandler=require('express-async-handler')

//@desc Get goals
//@route GET /api/goals
//@access private
const getGoals=expressasynchandler(async(req,res)=>{
    res.status(200).json({
        message:'get goals'
    })
})

//@desc set goals
//@route Post /api/goals
//@access private
const setGoals=expressasynchandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message:'Set goals'
    })
})
//@desc Update goals
//@route put /api/goals
//@access private
const updateGoals=expressasynchandler(async(req,res)=>{
    res.status(200).json({
        message:`Update goals ${req.params.id}`
    })
})

//@desc Delete goals
//@route delete /api/goals
//@access private
const deleteGoals=expressasynchandler(async(req,res)=>{
    res.status(200).json({
        message:`Delete goals ${req.params.id}`
    })
})

module.exports={getGoals,setGoals,updateGoals,deleteGoals}