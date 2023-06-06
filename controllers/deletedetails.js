const sequelize=require('../db')

const Student=require("../models/student")

exports.deletestudentdetails=async(req,res,next)=>{
    try {
        const id=req.body.id

        const response=await Student.delete({where:{id:id}})
        if(response)
        {

           res.status(201).json({details:"success deleted"})
        }
        else{
            res.status(400).json({details:"no student records found"})
        }
    } catch (error) {
        res.status(500).json({err:error})
    }
}