import mongoose from "mongoose";

export async function connect(){
    try {
        
        console.log(process.env.MONGODB_URI+'authapp');
        
        await mongoose.connect(process.env.MONGODB_URI+'authapp');
        const connection = mongoose.connection
        connection.on("connected",()=>{
            console.log("Mongodb connected successfully.");  
        })
        connection.on("error",(err)=>{
            console.log("MongoDb connection error->",err.message);
            process.exit();
        })
    } catch (error) {
        console.log("Db not connected.");
        console.log(error);
    }
}