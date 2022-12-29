const mysqlConnection=require('./connection')
const Sequelize =require('sequelize')

const products = mysqlConnection.define('products',{
    product_id:{
        type:Sequelize.INTEGER
    },
    product_name:{
        type:Sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    product_price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    product_qty:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    product_type:{
        type:Sequelize.STRING,
        allowNull:false
    },
    product_images:{
        type:Sequelize.JSON
    }

})


module.exports=products