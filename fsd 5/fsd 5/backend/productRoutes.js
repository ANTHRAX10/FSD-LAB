import express from "express";
import Product from "../models/Product.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, price, image } = req.body;
  const newProduct = new Product({ name, price, image });
  await newProduct.save();
  res.status(201).json(newProduct);
});

router.put("/:id", async (req, res) => {
  const { name, price, image } = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, image }, { new: true });
  res.json(updatedProduct);
});

router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

export default router;