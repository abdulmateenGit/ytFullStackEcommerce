import express from 'express';
import productsRouter from './routes/products/index';

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Pakistan!');
})

app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});