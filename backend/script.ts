import { PrismaClient } from '@prisma/client';

/**
 * Mostly just used for quickly testing
 * cli: npx ts-node script.ts
 */
const prisma = new PrismaClient({ log: ['query'] });

async function main() {
	console.log('test');

	const allUsers = await prisma.users.findMany();
	console.log(allUsers);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
