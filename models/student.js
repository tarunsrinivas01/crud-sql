const Sequelize=require("sequelize")
const sequelize=require("../db")

const Student = sequelize.define('Student', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowedNull:false,
        primaryKey:true
    }
    ,
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
});

module.exports=Student
