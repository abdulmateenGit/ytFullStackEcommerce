import { Request, Response } from "express";

export function createProduct(req: Request, res: Response) {
    console.log(req.body);
    res.send("createProduct");
}

export function listProducts(req: Request, res: Response) {
    res.send("List of Products");
}

export function getProductById(req: Request, res: Response) {
    res.send("getProductById");
}


export function updateProduct(req: Request, res: Response) {
    res.send("updateProduct");
}

export function deleteProduct(req: Request, res: Response) {
    res.send("List of Products");
}
