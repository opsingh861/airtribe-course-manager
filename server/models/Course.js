import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    maxSeats: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor',
        required: true
    },
    leads: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lead'
    }]
});

const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);

export default Course;
