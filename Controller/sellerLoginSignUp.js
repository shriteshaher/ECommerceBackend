const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const bcypt=require('bcryptjs')
const Seller_Profile=require('../model/sellerProfile');
const Seller_Crd=require('../model/SellerLoginCrd')
const SellerLoginCrd = require('../model/SellerLoginCrd')

//Seller Profile Filling
router.post('/fillSellerDetails',async (req,res)=>{
     
     let {count,rows} =await Seller_Profile.findAndCountAll()
     console.log("This",count)
  
    const seller_data={
        seller_id: "SELLER-"+(count+1),
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        gender:req.body.gender,
        bussiness_address:req.body.bussines_address,
        mobile_no:parseInt(req.body.mobileNo)
    }
    console.log(seller_data)
    const rSeller_Data=new Seller_Profile(seller_data)
    rSeller_Data.save().then(async (res1)=>{
        if(res){
            let password=await bcypt.hash(req.body.password,10)
            signUp({sellerDetailSellerId:seller_data.seller_id,
                password:password,role:req.body.roles})
        }
        return  res.status(200).json("Data Save Successfully")

    }).catch((err)=>{
        console.log(err)
        return res.status(500).json(err)
    })
})

function signUp(seller_crd1){
    const seller_crd=new Seller_Crd(seller_crd1)
    seller_crd.save()
}

//Seller Login
router.post('/sellerlogin',async(req,res)=>{
     const {email,password}=req.body
     console.log(req.body)
     const  seller_profile= await Seller_Profile.findOne({where :{email:email} })
    
     if(!seller_profile){
        return res.status(500).json("Account Not Exist")
    }
    const user=await SellerLoginCrd.findOne({where :{sellerDetailSellerId: seller_profile.seller_id}})
    console.log(user)
  
     if(seller_profile  &&  await bcypt.compare(password,user.password)){
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "1m",
            }
          );
          user.token=token
          user.save()
          return res.status(200).json({
            sellerDetailSellerId:user.sellerDetailSellerId,
            email:seller_profile.email,
            token:user.token
          })
       
     }else{
        res.status(500).json("Please Check Your Password")
     }
     


})








module.exports=router