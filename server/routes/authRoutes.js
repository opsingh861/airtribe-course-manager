import Express from 'express';
import { register } from '../controllers/authController.js';

const router = Express.Router();

router.post('/register', register);


export default router;