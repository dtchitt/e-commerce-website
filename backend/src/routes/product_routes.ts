import express from 'express';
const router = express.Router();

import { getAllProducts, getProductByID } from '../controllers/product_controller';

router.get('/allProducts', getAllProducts);
router.get('/:productID', getProductByID);

export { router as productRouter };
