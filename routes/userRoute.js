const express=require("express");
const router=express.Router();
const userModel=require("../models/user");
const bcrypt = require("bcrypt");
const cookie=require("cookie-parser")

router.get("/create",(req,res)=>{
    res.render("signup.ejs");
});

router.post("/create",(req,res)=>{
    if(req.body.password===req.body.confirmPassword){
        let{fullname, email, password}=req.body;
    
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return res.error(err);
       bcrypt.hash(password,salt,async (err,hash)=>{
        if(err) return res.error(err);
            let createdUser=await userModel.create({
                fullname,
                email,
                password:hash
            });
            res.send(createdUser);
       })
    });
    }
    else{
        res.send("Passwords and confirm password do not match");
    }
});

router.get('/login',(req,res)=>{
    res.render('login.ejs');
});

module.exports = router;