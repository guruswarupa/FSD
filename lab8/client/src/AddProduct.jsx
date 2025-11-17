import React, { useState } from "react";
const AddProduct = ({ fetchProducts }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:5000/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, description, price: Number(price) }),
            });
            if (!res.ok) throw new Error("Failed to add product");
            setName("");
            setDescription("");
            setPrice("");
            fetchProducts(); // refresh list
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <h3>Add New Product</h3>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};
export default AddProduct;