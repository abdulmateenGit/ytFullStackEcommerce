import { Router } from "express";
import {
    createProduct,
    listProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "./productsController";

const router = Router();

router.post("/", createProduct);
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;