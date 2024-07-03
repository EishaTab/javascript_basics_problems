import mongoose from "mongoose";
const userSchema= new mongoose.Schema({
    name:String
})
const user= new mongoose.model("User",userSchema)
export default user