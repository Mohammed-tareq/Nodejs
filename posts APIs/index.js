import express from "express";
import connectDB from "./DataBase/connect.js";
import router from "./Router/postsRoutes.js";
import routerUser from "./Router/usersRoute.js";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import errorHandel from "./Middlewares/errorHandel.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



dotenv.config();
// Middleware to parse JSON bodies  
app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); 

// error handling middleware for 404 page not found
app.set("view engine", "ejs");
app.set("views" , path.join(__dirname,"views"));

app.use('/api/v1/users', routerUser);
app.use('/api/v1/posts', router);

app.use((req, res) => {
    res.render("404");
})
app.use(errorHandel); 





app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
});


















