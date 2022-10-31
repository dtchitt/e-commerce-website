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
