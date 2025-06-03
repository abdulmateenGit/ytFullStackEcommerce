import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productsSchema";
import { eq } from "drizzle-orm";

export async function listProducts(req: Request, res: Response) {
    try {
        const products = await db.select().from(productsTable);
        res.json(products);
    }
    catch (error) {
        console.error('Error listing products:', error);
        res.status(500).send({ error: 'Failed to list products' });
    }
}

export async function getProductById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const [product] = await db.select().from(productsTable).where(eq(productsTable.id, id));

        if (!product) {
            return res.status(404).send({ error: 'Product not found' });
        } else {
            res.json(product);
        }
    }
    catch (error) {
        console.error('Error getting product by ID:', error);
        res.status(500).send({ error: 'Failed to get product' });
    }
}

export async function createProduct(req: Request, res: Response) {
    try {
        const [product] = await db.insert(productsTable).values(req.body).returning();
        res.status(201).json(product);
    }
    catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send({ error: 'Failed to create product' });
    }
}

export async function updateProduct(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const updateFields = req.body;
        const [product] = await db.update(productsTable).set(updateFields).where(eq(productsTable.id, id)).returning();

        if (product) {
            res.json(product);
        }
        else {
            res.status(404).send({ error: 'Product not found' });
        }
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send({ error: 'Failed to update product' });
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const [deleteProduct] = await db.delete(productsTable).where(eq(productsTable.id, id)).returning();
        if (deleteProduct) {
            res.status(204).send();
        }
        else {
            res.status(404).send({ error: 'Product not found' });
        }
    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send({ error: 'Failed to delete product' });
    }
}
