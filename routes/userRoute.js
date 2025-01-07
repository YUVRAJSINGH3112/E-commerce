const express=require("express");
const router=express.Router();
const userModel=require("../models/user");
const bcrypt = require("bcrypt");
const cookie=require("cookie-parser")
const jwt=require("jsonwebtoken");



router.get("/signup",(req,res)=>{
    res.render("signup.ejs");
});



router.post("/signup",async (req,res)=>{

    if(req.body.password===req.body.confirmPassword){

    let{fullname, email, password}=req.body;
    const existedUser=await userModel.findOne({email});
    if(existedUser){
        return res.status(400).send("Email already exists");
    }
    else{
        bcrypt.genSalt(10,(err,salt)=>{
            if(err) return res.error(err);
           bcrypt.hash(password,salt,async (err,hash)=>{
            if(err) return res.error(err);
                let createdUser=await userModel.create({
                    fullname,
                    email,
                    password:hash
                });
                let token= jwt.sign({email},"poloololo");
                res.cookie=("token",token);
                res.status(201).render("home.ejs");
           })
        });
    
    }
    }

    else{
       res.status(400).send("Passwords and confirm password do not match");
    }
});

router.get('/login',(req,res)=>{
    res.render('login.ejs');
});

module.exports = router;