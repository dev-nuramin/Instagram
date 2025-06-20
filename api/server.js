import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentsRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import mongoDBconnect from "./config/db.js"
import errorHandler from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser"
import cors from "cors";
// iitilize dotenv & express
const app = express();
dotenv.config();



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(cors());

//port connected from .env
const PORT = process.env.SERVER_PORT || 5000;

app.use("/api/students", studentsRoutes);
app.use("/api/users", userRoutes);

// express error handler
app.use(errorHandler)
    

//app listner;
app.listen( PORT, () => {
    mongoDBconnect();
    console.log(`server is running on port ${PORT}`.bgCyan.black)
})