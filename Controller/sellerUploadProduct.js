const express=require('express')
const router=express.Router()
const Seller_Product=require('../model/sellUploadProduct');
const auth=require('../middleware/auth')
const products=require('../model/Products');
const redisConnection=require('.././redis/redisClientConfig')

//Seller Upload Product

router.post('/seller-upload-product',auth,(req,res)=>{
    const seller_pr= new Seller_Product(req.body)
    seller_pr.save().then((res1)=>{
        res.json(res1)
    }).catch((err)=>{
        res.json(err)
    })

})


//get Products Details
router.get('/getProducts',(req,res)=>{
    redisConnection.get("products").then((result)=>{
    // let res1=JSON.parse(result)
    // console.log()
    if(result){
     
      return res.status(200).json(JSON.parse(result))
    }
    else{
      products.findAll().then((result)=>{
        // return res.status(200).json(result)
        let result1 =JSON.stringify(result)
         
        redisConnection.set("products",result1,(err, value)=>{
             console.log(value)
            
        })
        return res.status(200).json(result)
      })
    }
  })


  
  


  return
    

})

// //seller Upload image

// router.post('/uploadProductImage',auth,upload.array('file', 1),(req,res)=>{
//     res.send({ file: req.file });
// })


module.exports=router