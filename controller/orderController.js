const orderModel=require('../models/orderModel')
exports.createOrder=(req,res,next)=>{
    console.log(req.body,'data');
    
    res.json({
        success:true,
        message:"order created successfully"
    }
    )
}