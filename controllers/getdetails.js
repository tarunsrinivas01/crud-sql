const sequelize=require('../db')

const Student=require("../models/student")

exports.getstudentdetails=async(req,res,next)=>{
    try {
        const id=req.body.id
        const student=await Student.findByPk({where:{id:id}})
        if(student)
        {
            res.status(201).json({details:student})
        }
        else{
            res.status(400).json({details:"no student records found"})
        }
    } catch (error) {
        res.status(500).json({err:error})
    }
}