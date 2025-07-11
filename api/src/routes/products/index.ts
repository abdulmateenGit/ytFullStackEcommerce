import { Router } from "express";
import {
    createProduct,
    listProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "./productsController";
import { validateData } from "../../middleware/validationMiddleware";

import { createProductSchema, updateProductSchema } from "../../db/productsSchema";
import { verifySeller, verifyToken } from "../../middleware/authMiddleware";


const router = Router();

router.post("/", verifyToken, verifySeller, validateData(createProductSchema), createProduct);
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", verifyToken, verifySeller, validateData(updateProductSchema), updateProduct);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);

export default router;