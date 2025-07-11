import express, {json, urlencoded} from 'express';
import productsRouter from './routes/products/index';
import authRoutes from './routes/auth/index';

const port = 3000;

const app = express();

app.use(urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use(json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, Pakistan!');
})

app.use('/products', productsRouter);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});