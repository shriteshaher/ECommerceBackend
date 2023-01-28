const Sequelize=require('sequelize')

const mysql=new Sequelize('ecommerce',"admin","shritesh123",{
    dialect: 'mysql',
    host:"ecommerce.c601l9td3cls.ap-south-1.rds.amazonaws.com",
 
 
})



module.exports=mysql
