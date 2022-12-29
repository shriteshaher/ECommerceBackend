const mysqlConnection=require('./connection')
const Sequelize =require('sequelize')
mysqlConnection.sync()
const SellerProfile =mysqlConnection.define('seller_details',{
    seller_id:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    first_name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    last_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false

    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mobile_no:{
        type:Sequelize.BIGINT,
        allowNull:false
    },

    bussiness_address:{
        type:Sequelize.STRING
    }

})


module.exports=SellerProfile