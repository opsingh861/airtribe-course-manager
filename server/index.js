import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import instructorRoutes from "./routes/instructorRoutes.js";


const app = new Express();
app.use(Express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRoutes)
app.use("/api/instructor", instructorRoutes)

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
};

app.listen(8080, () => {
    try {
        connectDb();
    }
    catch (error) {
        console.error(error);
    }
    console.log("Server is running on port 8080");
});