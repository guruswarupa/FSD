import React from "react";
const ProductList = ({ products }) => (
    <table style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
            <tr>
                <th style={{ border: "1px solid black", padding: "5px" }}>Name</th>
                <th style={{ border: "1px solid black", padding: "5px" }}>Description</th>
                <th style={{ border: "1px solid black", padding: "5px" }}>Price</th>
            </tr>
        </thead>
        <tbody>
            {products.length === 0 ? (
                <tr>
                    <td colSpan="3" style={{ textAlign: "center" }}>No products available</td>
                </tr>
            ) : (
                products.map((product) => (
                    <tr key={product._id}>
                        <td style={{
                            border: "1px solid black", padding: "5px"

                        }}>{product.name}</td>

                        <td style={{
                            border: "1px solid black", padding: "5px"
                        }}>{product.description}</td>

                        <td style={{
                            border: "1px solid black", padding: "5px"

                        }}>{product.price}</td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
);
export default ProductList;