import express from "express"
import User from "./schemas/user.mjs";
import { connect } from "mongoose";
connect("mongodb+srv://taurgoowner:1p4uEZ1a5E7TrUdS@taurgocluster.tdwubt5.mongodb.net/taurgo").then(() => console.log("db connected")).catch((err) => console.log(err.message))
const app = express()
app.get('/', (req, res) => {
    res.sendFile("hi.html", { root: "public" })
})

const createUser = async (name) => {

    try {
        const newuser = new User({ name: name })
        const usercreated = await newuser.save()
        if (usercreated) {
            console.log("user created")
        }
    } catch (error) {
        console.error(error.message)
    }
}
const deleteUser =  async (name) => {


    try {
        const existing =await User.findOne({ name: name })
        if(!existing){
            console.log("No user found")
        }
        if (existing) {
            try {
                const del = await User.findOneAndDelete({ name:name })
                console.log("user deleted",del)
            } catch (error) {
                console.log(error.message)
            }
        }
    } catch (error) {
        console.error(error.message)
    }
}
const updateUser = async (prev,name) => {


    try {
        const existing =await User.findOne({ name: prev })
        if(!existing){
            console.log("No user found")
        }
        if (existing) {
            try {
                const udpa = await User.findOneAndUpdate({ name: prev }, { name:name })
                console.log("user edted",udpa)
            } catch (error) {
                console.log(error.message)
            }
        }
    } catch (error) {
        console.error(error.message)
    }
}
deleteUser("edited again")
// updateUser("edited","edited again")
// createUser("test")
app.listen(4000, () => {
    console.log("server started")
})