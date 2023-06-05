const sequelize=require('../db')

const Student=require("../models/student")

exports.createstudentinfo=async(req,res,next)=>{
    try {
        const name=req.body.name
        const age=req.body.age
    
        const details=await Student.create({name:name,age:age})
    
        res.status(201).json({msg:"succesfully created"})
    }
    catch (error) {
     res.status(401).json({err:"something went wrong"}) 
    }
}