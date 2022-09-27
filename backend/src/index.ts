import express from 'express';
import mysql from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = 3001;

const connection = mysql.createConnection({
	host: process.env.DB_ENDPOINT,
	port: Number(process.env.DB_PORT),
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
});

connection.connect(function (err) {
	if (!err) {
		console.log('Database is connected ... ');
	} else {
		console.log(err.stack);
	}
});

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
