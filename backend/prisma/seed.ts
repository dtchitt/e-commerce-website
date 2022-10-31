import { PrismaClient } from '@prisma/client';
/**
 * This will check and populate (if its not found) the database tables against the models in the main function
 * cli: npx prisma db seed
 */
const prisma = new PrismaClient();

async function main() {
	console.log('seeding');
	const user1 = await prisma.users.upsert({
		where: { user_id: 1 },
		update: {},
		create: {
			user_id: 1,
			username: 'jsmith5',
			first_name: 'John',
			last_name: 'Smith',
			email: 'email@email.com',
			password: 'password',
		},
	});
	const user2 = await prisma.users.upsert({
		where: { user_id: 2 },
		update: {},
		create: {
			user_id: 2,
			username: 'egomez123',
			first_name: 'Elijah',
			last_name: 'Gomez',
			email: 'email2@email.com',
			password: 'password',
		},
	});
	const address1 = await prisma.addresses.upsert({
		where: {
			address_id: 1,
		},
		update: {},
		create: {
			address_id: 1,
			street: '1234 street rd',
			city: 'new york',
			state: 'new york',
			zipcode: 12345,
			instructions: 'knock on the front door',
			user_id: 1,
		},
	});
	const cart1 = await prisma.carts.upsert({
		where: {
			cart_id: 1,
		},
		update: {},
		create: {
			cart_id: 1,
			user_id: 1,
		},
	});

	const product1 = await prisma.products.upsert({
		where: { product_id: 1 },
		update: {},
		create: {
			product_id: 1,
			image_url: 'imageurl',
			description: 'a very fun chewy toy for a dog',
			price: 9.99,
			stock: 25,
			name: 'Dog Chew Toy',
		},
	});

	const cartItem1 = await prisma.cart_items.upsert({
		where: { cart_item_id: 1 },
		update: {},
		create: {
			cart_item_id: 1,
			quantity: 2,
			product_id: 1,
			cart_id: 1,
		},
	});

	const orderDate = new Date(2022, 10, 27, 5, 45, 0, 0);
	const order1 = await prisma.orders.upsert({
		where: {
			order_id: 1,
		},
		update: {},
		create: {
			order_id: 1,
			status: 'pending',
			date: orderDate,
			time: orderDate,
			user_id: 1,
		},
	});

	const product2 = await prisma.products.upsert({
		where: { product_id: 2 },
		update: {},
		create: {
			product_id: 2,
			image_url: 'imageurl',
			description: 'a very fun scooter for a kid',
			price: 39.99,
			stock: 20,
			name: 'Scooter',
		},
	});

	const orderItem1 = await prisma.order_items.upsert({
		where: {
			order_item_id: 1,
		},
		update: {},
		create: {
			order_item_id: 1,
			quantity: 3,
			product_id: 2,
			order_id: 1,
		},
	});

	const review1 = await prisma.reviews.upsert({
		where: { review_id: 1 },
		update: {},
		create: {
			review_id: 1,
			rating: 0.5,
			description: 'my dog really liked it',
			user_id: 2,
			product_id: 1,
		},
	});
	const review2 = await prisma.reviews.upsert({
		where: { review_id: 2 },
		update: {},
		create: {
			review_id: 2,
			rating: 0.7,
			description: 'my kid really liked it',
			user_id: 2,
			product_id: 2,
		},
	});
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
