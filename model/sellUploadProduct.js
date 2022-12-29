const mysqlConnection=require('./connection')
const Sequelize =require('sequelize')
const sellerProfile=require('./sellerProfile')
const selerProduct=require('./Products')
const sellerUploadProduct=mysqlConnection.define("seller_upload_product",{
    seller_uploadProductDetai_id :{
        type:Sequelize.UUID,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4
    },

    seller_prQty:{
      type:Sequelize.INTEGER,
      allowNull:false
    },
    product_name:{
        type:Sequelize.STRING,
    }
     


    
})

sellerProfile.hasMany(sellerUploadProduct)
selerProduct.hasOne(sellerUploadProduct)

module.exports=sellerUploadProduct