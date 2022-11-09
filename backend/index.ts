import express from 'express';
import cors from 'cors';

import { userRouter } from './src/routes/user_routes';
import { productRouter } from './src/routes/product_routes';
import { sellerRouter } from './src/routes/sellerRoutes';

const app = express();

const port: number = 3001;

app.use(cors());
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/seller', sellerRouter);

app.get('/', (req, res) => {
	res.send(null);
});
app.listen(port, async () => {
	console.log(`Express is listening at http://localhost:${port}`);
});
