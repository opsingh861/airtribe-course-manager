import Instructor from '../models/Instructor.js';
import Course from '../models/Course.js';


export const getInstructorDetails = async (req, res) => {
    const { userName } = req.query;

    try {
        const instructor = await Instructor
            .findOne({ userName })

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found', "success": false });
        }

        res.status(200).json({ instructor, "success": true });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong', "success": false });
    }
}

export const addCourse = async (req, res) => {
    const { courseId, name, maxSeats, startDate, userName } = req.body;
    const [day, month, year] = startDate.split('-');
    const parsedStartDate = new Date(`${year}-${month}-${day}`);

    const instructor = await Instructor.findOne({ userName });
    const instructorId = instructor._id;
    const instructorName = instructor.name;

    try {
        const course = new Course({
            courseId,
            name,
            maxSeats,
            startDate: parsedStartDate,
            instructor: instructorName,
            instructorId
        });

        await course.save();

        res.status(201).json({ message: "Course created successfully", "success": true });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong', "success": false });
    }
}

export const updateCourse = async (req, res) => {
    const { courseId, maxSeats, startDate } = req.body;


    try {
        const course = await Course.findOne({ courseId });
        if (!course) {
            return res.status(404).json({ message: 'Course not found', "success": false });
        }

        if (startDate) {
            const [day, month, year] = startDate.split('-');
            course.startDate = new Date(`${year}-${month}-${day}`);
        }

        if (maxSeats) {
            course.maxSeats = maxSeats;
        }

        await course.save();

        res.status(200).json({ message: "Course updated successfully", "success": true });
    }
    catch (error) {
        res.status(500).json({ message: 'Something went wrong', "success": false });
    }
}