import mongoose from "mongoose";

export const dbConnection=async()=>{
    try{
        const con= await mongoose.connect('mongodb://127.0.0.1:27017/mini_project_users',{
        });
        console.log(`MongoDB Connected: ${con.connection.host}`);
    }catch(error){
        console.log("Db connection error",error);
        process.exit(1);
    }
}