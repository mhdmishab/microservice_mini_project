import mongoose from "mongoose";

export const dbConnection=async()=>{
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mini_project_users';
    try{
        const con= await mongoose.connect(MONGO_URI,{
        });
        console.log(`MongoDB Connected: ${con.connection.host}`);
    }catch(error){
        console.log("Db connection error",error);
        process.exit(1);
    }
}