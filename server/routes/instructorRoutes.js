import Express from 'express';
import { addCourse, getInstructorDetails, updateCourse } from '../controllers/instructorController.js';

const router = Express.Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/addcourse', addCourse);
router.get('/getinstructordetails', getInstructorDetails);
router.put('/updatecourse', updateCourse);
router.get('/updatecourse', (req, res) => {
    res.send('This is the update course route');
});

export default router;