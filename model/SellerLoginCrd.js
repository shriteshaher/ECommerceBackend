const mysqlConnection=require('./connection')
const Sequelize =require('sequelize')
const sellerProfile=require('./sellerProfile')

// sellerProfile.hasOne()

const SellerLoginCrd=mysqlConnection.define('seller_crd',{

    login_id:{
        type:Sequelize.UUID,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4,
    },


    password:{
        type:Sequelize.STRING
    },
    token:{
        type:Sequelize.STRING
    },
    role:{
        type:Sequelize.STRING
    }

})
sellerProfile.hasOne(SellerLoginCrd)
SellerLoginCrd.belongsTo(sellerProfile)
mysqlConnection.sync()
module.exports=SellerLoginCrd
