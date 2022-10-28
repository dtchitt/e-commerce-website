import express from 'express';

const app = express();
const port: number = 3001;

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
