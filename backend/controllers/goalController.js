const expressasynchandler=require('express-async-handler')
const Goal=require('../model/goalModel')

//@desc Get goals
//@route GET /api/goals
//@access private
const getGoals=expressasynchandler(async(req,res)=>{
    const goals=await Goal.find()
    res.status(200).json({
       goals
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

    const goal=await Goal.create({
        text:req.body.text
    })

    res.status(200).json({
        goal
    })
})
//@desc Update goals
//@route put /api/goals
//@access private
const updateGoals=expressasynchandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,
        req.body,{
            new:true,
        }
    )

    res.status(200).json({
        updatedGoal
    })
})

//@desc Delete goals
//@route delete /api/goals
//@access private
const deleteGoals=expressasynchandler(async(req,res)=>{
    const goal=await Goal.findById(req.params.id);
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.deleteOne();

    res.status(200).json({
        message:`Delete goals ${req.params.id}`
    })
})

module.exports={getGoals,setGoals,updateGoals,deleteGoals}