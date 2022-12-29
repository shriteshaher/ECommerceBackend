const Sequelize=require('sequelize')

const mysql=new Sequelize('ecommerce',process.env.MYSQLUSER,process.env.MYSQLPASSWORD,{
    dialect: 'mysql',
    host:process.env.HOST,
 
 
})



module.exports=mysql