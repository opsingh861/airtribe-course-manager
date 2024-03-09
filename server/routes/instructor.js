import express from "express";
import { createInstructor, getInstructors, getInstructorById } from "../controllers/instructorController.js";

const router = express.Router();

router.get("/:id", getInstructorById);
router.get("/", getInstructors);
router.post("/", createInstructor);

export default router;



