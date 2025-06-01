import { Router } from 'express';

// Products routes
const router = Router();

// Get all products
router.get('/', (req, res) => {
    res.send("The list of products");
})

// Get a specific product by ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Fetching product with ID: ${productId}`);
    res.send("A product");
})

// Create a new product
router.post('/', (req, res) => {
    res.send("New product created");
})

export default router;