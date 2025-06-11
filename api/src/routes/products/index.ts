import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send("List of Products");
});

router.get("/:id", (req, res) => {
    console.log(req.params);
    res.send("A Product");
});

router.post("/", (req, res) => {
    res.send("Create a Product");
});

export default router;