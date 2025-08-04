import mongoose from "mongoose";

export const connectDB =async ()=>{
    await mongoose.connect('mongodb+srv://divyansh264:divyansh264@cluster0.vrehymq.mongodb.net/food-del').then(()=>console.log("DB connected"));
}