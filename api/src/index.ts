import express, { json, urlencoded } from 'express';
import productsRoute from './routes/products/index.js'; // Importing the products router

const port = process.env.PORT || 3000;

const app = express();

app.use(urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies
app.use(json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, Pakistan! Welcome to the Express server.');
});


app.use('/products', productsRoute);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})