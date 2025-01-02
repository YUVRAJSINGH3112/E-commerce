const mongoose= require("mongoose");


const productSchema=mongoose.Schema({
   image:String,
   price:Number,
   name:String,
   discount:{
    type:Number,
    default:0
   },
   quantity:{
    type:Number,
    default:0
   }
});

module.exports=mongoose.model("product",productSchema);