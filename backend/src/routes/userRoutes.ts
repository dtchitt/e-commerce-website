import express from 'express';
import { getUserData, loginUser, signUpUser } from '../controllers/userController';

const router = express.Router();

router.post('/', signUpUser);
router.post('/login', loginUser);
router.get('/me', getUserData);

export default router;
