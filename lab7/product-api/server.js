import express from "express";
import cors from "cors";
import products from "./products.js"; 

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => res.send("Hello, Express!"));

app.get("/products", (req, res) => res.json(products));

app.get("/products/:id", (req, res) => {
    const p = products.find(x => x.id == req.params.id);
    p ? res.json(p) : res.status(404).send("Not Found");
});

app.post("/addproducts", (req, res) => {
    const newP = { id: Date.now(), ...req.body };
    products.push(newP);
    res.json(newP);
});

app.put("/updateproducts/:id", (req, res) => {
    const i = products.findIndex(p => p.id == req.params.id);
    if (i >= 0) products[i] = { ...products[i], ...req.body };
    res.json(products[i]);
});

app.delete("/deleteproducts/:id", (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    if (index >= 0) {
        products.splice(index, 1);
        res.send("Deleted successfully");
    } else {
        res.status(404).send("Product not found");
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));