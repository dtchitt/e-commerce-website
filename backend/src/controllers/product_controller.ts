import { Request, Response } from 'express';
import { queryListOfProducts } from '../services/productServices';

export const getAllProducts = async (req: Request, res: Response) => {
	const productList = await queryListOfProducts();
	res.send(productList);
};

export const getProductByID = async (req: Request, res: Response) => {
	const productList = await queryListOfProducts(Number(req.params.productID));
	res.send(productList);
};
