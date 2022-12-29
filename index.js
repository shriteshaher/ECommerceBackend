require('dotenv').config()

const  sellerLoginSignRouting=require('./Controller/sellerLoginSignUp')
const sellerUploadProductRouting=require('./Controller/sellerUploadProduct')
const passport = require('passport')

const express=require('express');
const session = require('express-session')
const cors=require('cors')
const app=express()

app.use(cors());



app.use(express.json())

//Seller Login SignUp Routings
app.use('/seller',sellerUploadProductRouting  )



app.listen(process.env.NODE_LOCAL_PORT,()=>{
  
  console.log("Server Listening "+process.env.NODE_LOCAL_PORT)
})
module.exports=app