const express= require('express');
const { default: mongoose } = require('mongoose');
const { createProduct } = require('./controller/Product');
const server= express();

const productsRoute=require("./routes/Products")

server.use(express())
server.use(express.json());
server.use("/",productsRoute.router)
main().catch(err=>console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    console.log('mongodb connected successfully');
}

server.get('/',(req,res)=>{
  res.json({success:"success"});  
})

server.listen(8080,()=>{
    console.log("listening on 8080 Port");
})