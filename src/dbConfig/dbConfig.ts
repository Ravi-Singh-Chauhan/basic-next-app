import { error } from "console";
import mongoose, { connection } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONDODB_URI!);
        const connection = mongoose.connection
        connection.on("connected",()=>{
            console.log("Mongodb connected successfully.");
        
            
        })
        connection.on("error",(err)=>{
            console.log("MongoDb connection error->",error);
            process.exit();
        })
    } catch (error) {
        console.log("Db not connected.");
        console.log(error);
        
        
    }
}