import Express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./config/database.js";
import Course from "./models/Course.js";
import Instructor from "./models/Instructor.js";
import Lead from "./models/Lead.js";
import Comment from "./models/Comment.js";
import course from "./routes/course.js";
import instructor from "./routes/instructor.js";

const app = new Express();
app.use(Express.json());
app.use(cors());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/course", course);
app.use("/api/instructor", instructor);

const connectWithRetry = async () => {
  let retries = 5;
  while (retries) {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
      break;
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      console.log(`Retrying in 5 seconds... (${retries} attempts left)`);
      retries--;
      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};

connectWithRetry().then(() => {
  app.listen(8080, () => {
    sequelize.sync({ force: false }).then(() => {
      console.log("Database Synced Successfully");
    }).catch((err) => {
      console.log(err);
    });
    console.log("Server is running on port 8080");
  });
});
