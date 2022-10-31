import express from 'express';
import { userRouter } from './src/routes/user_routes';
import { productRouter } from './src/routes/product_routes';

const app = express();
const port: number = 3001;

app.use('/users', userRouter);
app.use('/products', productRouter);

app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
