import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>
      <ProductList products={products} />
      <AddProduct fetchProducts={fetchProducts} />
    </div>
  );
};
export default App;