import express from "express";
import { createCourse, getCourses, updateCourse } from "../controllers/courseController.js";


const router = express.Router();

router.get("/", getCourses);
router.post("/", createCourse);
router.put("/:id", updateCourse);

export default router;