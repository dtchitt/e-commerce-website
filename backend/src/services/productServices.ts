import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const queryListOfProducts = async (productID?: number) => {
	if (productID) {
		return await prisma.products.findUnique({
			where: {
				product_id: productID,
			},
		});
	}
	return await prisma.products.findMany();
};

export const queryUserProducts = async (userID: number, productID?: number) => {
	if (productID) {
		return await prisma.products.findFirst({
			where: {
				product_id: productID,
				user_id: userID,
			},
		});
	}
	return await prisma.products.findMany({
		where: {
			user_id: userID,
		},
	});
};
