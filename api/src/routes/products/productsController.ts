import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable, createProductSchema } from "../../db/productsSchema";
import { eq } from "drizzle-orm";
import _ from "lodash";

export async function createProduct(req: Request, res: Response) {
    try {
        const [product] = await db
            .insert(productsTable)
            .values(req.cleanBody)
            .returning();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
}

export async function listProducts(req: Request, res: Response) {
    try {
        const products = await db
            .select()
            .from(productsTable);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch list of products" });
    }
}

export async function getProductById(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const [product] = await db
            .select()
            .from(productsTable)
            .where(eq(productsTable.id, id));

        if (!product) {
            res.status(404).json({ error: "Product not found" });
        } else {
            res.status(200).json(product);
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch product by ID" });
    }
}


export async function updateProduct(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const updatedProduct = req.cleanBody;
        const [product] = await db
            .update(productsTable)
            .set(updatedProduct)
            .where(eq(productsTable.id, id))
            .returning();
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: "Product not found" });
        }

    }
    catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const id = Number(req.params.id);
        const [deleteProduct] = await db
            .delete(productsTable)
            .where(eq(productsTable.id, id))
            .returning();
        if (deleteProduct) {
            res.status(204).json({ message: "Product deleted successfully" });
        } else {
            res.status(404).json({ error: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
}
