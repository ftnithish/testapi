const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
name:String,
price:String,
description:String,
image:[
    {
        image:String
    }
],
ratings:String,
seller:String,
category:String,
stock:String,
noOfReviews:String,
createdAt:Date

})
const productModel=mongoose.model('product',productSchema)
module.exports= productModel;