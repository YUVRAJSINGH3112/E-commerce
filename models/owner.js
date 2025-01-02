const mongoose= require("mongoose");
mongoose.connect("mongodb:://localhost:27017/QuickKart");

const ownerSchema=mongoose.Schema({
    fullname:String,
    email:String,
    password:{
        type:String,
        required: true
    },
    products:{
        type:Array,
        deffault:[]
    },
    gstin:String
});

module.exports=mongoose.model("Owner",ownerSchema);