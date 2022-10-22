import dotenv from 'dotenv';

dotenv.config();

//In case we ever want to implement a workflow pipeline
export const config = {
	development: {
		username: process.env.DB_USERNAME as string,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME as string,
		host: process.env.DB_ENDPOINT,
		dialect: 'mysql',
		port: Number(process.env.DB_PORT),
	},
	// test: {
	// 	username: 'root',
	// 	password: null,
	// 	database: 'database_test',
	// 	host: '127.0.0.1',
	// 	dialect: 'mysql',
	// },
	// production: {
	// 	username: 'root',
	// 	password: null,
	// 	database: 'database_production',
	// 	host: '127.0.0.1',
	// 	dialect: 'mysql',
	// },
};
