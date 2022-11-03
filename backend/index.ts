import express from 'express';

const app = express();
const port: number = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/login/', require('./routes/loginRoutes'));

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
