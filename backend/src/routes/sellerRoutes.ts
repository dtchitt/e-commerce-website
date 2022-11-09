import express from 'express';
const router = express.Router();

import { getAllUserProducts } from '../controllers/sellerController';

router.get('/user/:userID/products', getAllUserProducts);

export { router as sellerRouter };
