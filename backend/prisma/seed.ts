import { PrismaClient } from '@prisma/client';
/**
 * This will check and populate (if its not found) the database tables against the models in the main function
 * cli: npx prisma db seed
 */
const prisma = new PrismaClient();

async function main() {
	console.log('seeding');
	const john = await prisma.users.upsert({
		where: { username: 'jsmith5' },
		update: {},
		create: {
			username: 'jsmith5',
			first_name: 'John',
			last_name: 'Smith',
			email: 'email@email.com',
			password: 'password',
		},
	});
	const seededUserID = await prisma.users
		.findMany({
			where: { username: 'jsmith5' },
		})
		.then((record: any | null) => {
			if (record) return record[0].user_id;
			// return record.user_id;
		});
	console.log(seededUserID);
	const address1 = await prisma.addresses.upsert({
		where: {
			user_id: seededUserID,
		},
		update: {},
		create: {
			street: '1234 street rd',
			city: 'new york',
			state: 'new york',
			zipcode: 12345,
			instructions: 'knock on the front door',
			users: {
				connect: { username: 'jsmith5' },
			},
		},
	});

	console.log(john);
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
