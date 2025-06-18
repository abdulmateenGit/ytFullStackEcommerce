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


const router = Router();

router.post("/", validateData(createProductSchema), createProduct);
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", validateData(updateProductSchema) ,updateProduct);
router.delete("/:id", deleteProduct);

export default router;