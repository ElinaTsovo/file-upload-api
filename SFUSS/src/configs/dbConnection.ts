import mongoose from "mongoose";

const dbURI= process.env.DB_URL!
export const conectBD = async ()=>{
    try {
        await mongoose.connect(dbURI)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB not connected")
    }
}