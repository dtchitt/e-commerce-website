import { Request, Response } from 'express';
import { queryCartItems } from '../services/cartService';

export const getCartItems = async (req: Request, res: Response) => {
	const cartItems = await queryCartItems();
	res.send(cartItems);
};
