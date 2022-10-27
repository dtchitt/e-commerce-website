import express from 'express';
import { sequelize as db } from './database';

const app = express();
const port = 3001;

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);

	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
});
