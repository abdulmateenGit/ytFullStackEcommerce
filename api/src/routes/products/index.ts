import { Router } from 'express';

import {
    listProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from './productsController';

// Products routes
const router = Router();

router.get('/', listProducts) // List all products
router.get('/:id', getProductById) // Get a product by ID
router.post('/', createProduct) // Create a new product
router.put('/:id', updateProduct) // Update a product by ID
router.delete('/:id', deleteProduct) // Delete a product by ID

export default router;