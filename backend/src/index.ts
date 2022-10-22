import express from 'express';
import db from './models';

const app = express();
const port = 3001;

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log(`App listening on port ${port}`);
	});
});
