const mongoose= require("mongoose");
mongoose.connect("mongodb:://localhost:27017/QuickKart");

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
        deffault:[]
    },
    isAdmin:Boolean
});

module.exports=mongoose.model("User",userSchema);