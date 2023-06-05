const Sequelize=require('sequelize')

const sequelize=new Sequelize("crud-sql", "root", "Tarun@123",{dialect:'mysql',
host:"localhost"})

module.exports=sequelize