const express=require('express');
const app=express();
const path=require('path');
const db=require('./config/mongoose-connection');
const userRoutes=require("./routes/userRoute");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');

app.use("/user", userRoutes);


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})