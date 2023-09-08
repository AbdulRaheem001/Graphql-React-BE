import mongoose from "mongoose";
const mongoosURL = "mongodb://127.0.0.1:27017/test";



const connectDB = async () => {
  try {
    const conn =  mongoose.connect(mongoosURL).then(()=>{console.log(` MongoDB Connected `);});
    // console.log(`Local MongoDB Connected: `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
 
};

export default connectDB;



