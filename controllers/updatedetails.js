const sequelize=require('../db')

const Student=require("../models/student")
exports.updatedetails=async(req,res,next)=>{
    try {
        const id=req.body.id
        const name=req.body.name
        const student= Student.findByPk({where:{id:id}})
        if(student)
        {
           await Student.update({name:name},{where:{id:id}})

           res.status(201).json({details:"success"})
        }
        else{
            res.status(400).json({details:"no student records found"})
        }
    } catch (error) {
        
    }
}