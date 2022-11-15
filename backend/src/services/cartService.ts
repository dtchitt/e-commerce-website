import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const queryCartItems = async () => {
	return await prisma.carts.findMany();
};
