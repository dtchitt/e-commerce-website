import express from 'express';
import accountRouter from './src/routes/userRoutes';

const app = express();
const port: number = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/user', accountRouter);

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
