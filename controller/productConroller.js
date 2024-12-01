

const productModel=require('../models/productModel')


exports.getProducts=async(req,res,next)=>{
   const products=await productModel.find()
    res.json({
       success:true,
       products
    })
}

// exports.getSingleProduct = async (req, res, next) => {
//     try {
//         const { id } = req.params;

//         // Validate ObjectId format
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid Product ID",
//             });
//         }

//         const product = await productModel.findById(id);

//         // Check if product exists
//         if (!product) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Product not found",
//             });
//         }

//         // Respond with the product
//         res.status(200).json({
//             success: true,
//             product,
//         });
//     } catch (error) {
//         // Catch and handle any errors
//         res.status(500).json({
//             success: false,
//             message: error.message || "Internal Server Error",
//         });
//     }
// };

exports.getSingleProduct=async(req,res,next)=>{
try{
    const product =await productModel.findById(req.params.id);
    res.json({
        success:true,
        product
    })
}
catch(error){
    res.status(404).json({
        success:false,
        message:'unable to get the product with that ID'
    })
}
}