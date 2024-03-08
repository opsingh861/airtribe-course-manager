import Instructor from '../models/Instructor.js';


export const register = async (req, res) => {
    const { name, email, userName, password } = req.body;

    try {
        const instructorExists = await Instructor.findOne({ userName });

        if (instructorExists) {
            return res.status(400).json({ message: 'Instructor already exists', "success": false });
        }

        const instructor = new Instructor({
            name,
            email,
            userName,
            password
        });

        await instructor.save();

        res.status(201).json({ message: "Instructor created successfully", "success": true });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', "success": false });
    }
}