const path=require("path")
require("dotenv").config({ path: path.resolve(__dirname, '../../.env') });
const mongoose = require("mongoose");
const connectDb = async ()=>{
 try {
     await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser:true,
         useUnifiedTopology:true
     });
     console.log("MongoDb connection success")
 } catch (error) {
     console.log(error)
     process.exit(1);
 }
}
module.exports = connectDb;