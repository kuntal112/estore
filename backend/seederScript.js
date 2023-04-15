require("dotenv").config();
// const mongoose=require("mongoose");
const Product=require("./models/Product")
const connectDb=require("./config/db");
const data=require("./data/products")
connectDb();
const sendToDb= async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(data);
        console.log("data import success");
        process.exit();
    } catch (error) {
        console.log(error);
    }
}
sendToDb();

