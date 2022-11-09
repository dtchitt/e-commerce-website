import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const queryListOfUsers = async (userID?: number) => {
	if (userID) {
		return await prisma.users.findUniqueOrThrow({ where: { user_id: userID } }).catch((error) => {
			return `error finding user with ID: ${userID}`;
		});
	}

	return await prisma.users.findMany();
};
