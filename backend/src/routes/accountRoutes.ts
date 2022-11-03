import express from 'express';
import { getUserData, loginUser, signUpUser } from '../controllers/accountController';

const router = express.Router();

router.post('/', signUpUser);
router.post('/login', loginUser);
router.get('/me', getUserData);

export default router;
