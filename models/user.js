const mongoose= require("mongoose");


const userSchema=mongoose.Schema({
    fullname:String,
    email:String,
    password:{
        type:String,
        required: true
    },
    orders:{
        type:Array,
        deffault:[]
    },
    cart:{
        type:Array,
        default:[]
    },
    isAdmin:Boolean
});

module.exports=mongoose.model("User",userSchema);