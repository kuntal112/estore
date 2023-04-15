// require("dotenv").config();
const express=require("express");
const connectDb=require("./config/db");
const productRoutes=require("./routes/productroute")
connectDb();
const app=express();
app.use(express.json());
app.use("/api/products",productRoutes)
PORT=process.env.PORT||5000 ;
app.listen(PORT,()=>{
    console.log("server is running on port 5000")
})          