import Course from "../models/Course.js";


export const getCourses = async (req, res) => {
    try {
        console.log("getCourses")
        const courses = await Course.findAll();
        res.status(200).send(courses);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export const createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).send(course);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

export const updateCourse = async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        await course.update(req.body);
        res.status(200).send(course);
    }
    catch (error) {
        res.status(400).send(error);
    }
};