import express from 'express';
import { userRouter } from './src/routes/user_routes';
const app = express();
const port: number = 3001;

app.use('/user', userRouter);

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
