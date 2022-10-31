import express from 'express';
const router = express.Router();

import { getAllUsers, getUserByID } from '../controllers/user_controller';

router.get('/allUsers', getAllUsers);
router.get('/:userID', getUserByID);

export { router as userRouter };
