import Instructor from "../models/Instructor.js";

export const getInstructors = async (req, res) => {
    try {
        console.log("getInstructors")
        const instructors = await Instructor.findAll();
        res.status(200).send(instructors);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

export const getInstructorById = async (req, res) => {
    try {
        console.log(req.params.id)
        const instructor = await Instructor.findByPk(req.params.id);
        if (!instructor) {
            return res.status(404).json({ message: "Instructor not found" });
        }
        res.status(200).send(instructor);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

export const createInstructor = async (req, res) => {
    try {
        const instructor = new Instructor(req.body);
        await instructor.save();
        res.status(201).send(instructor);
    }
    catch (error) {
        res.status(400).send(error);
    }
};
