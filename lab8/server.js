import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors()); // allow frontend requests
app.use(express.json());
// MongoDB connection
const DB_URL = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shop";
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));
// Product schema & model
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});
const Product = mongoose.model("Product", productSchema);
// Routes
// Get all products
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Add a product
app.post("/add", async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Update a product
app.put("/update/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Delete a product
app.delete("/delete/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).send(err.message);
    }
});
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));