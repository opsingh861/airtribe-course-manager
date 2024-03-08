import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    linkedinProfile: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Accepted', 'Rejected', 'Waitlisted'],
        default: 'Pending'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);

module.exports = Lead;
