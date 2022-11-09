import { Request, Response } from 'express';
import { queryUserProducts } from '../services/productServices';

export const getAllUserProducts = async (req: Request, res: Response) => {
	const productList = await queryUserProducts(Number(req.params.userID));
	res.send(productList);
};
