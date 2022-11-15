import express from 'express';
import { getCartItems } from '../controllers/cartController';

const cartRouter = express.Router();

cartRouter.get(`/cartItems`, getCartItems);
