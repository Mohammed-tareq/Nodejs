import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect("mongodb://localhost:27017/posts")
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log("Error connecting to DB", err));
}

