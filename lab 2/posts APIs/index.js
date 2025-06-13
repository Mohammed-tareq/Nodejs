import express from "express";
import connectDB from "./DataBase/connect.js";
import postsRoutes from "./Router/postsRoutes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());



app.use('/api/v1/posts', postsRoutes);

const port = 3000;
app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});


















