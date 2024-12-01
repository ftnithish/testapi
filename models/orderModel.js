const mongoose= require('mongoose')
const orderSchema= new mongoose.Schema({
    cartItems:Array,
    amount:String,
    createdAt:Date,
    status:String,
})
const orderModel=mongoose.model('order',orderSchema)
module.exports=orderModel;