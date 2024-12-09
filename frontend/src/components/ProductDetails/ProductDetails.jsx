
import React from 'react';
import { useParams } from 'react-router-dom';
import products from "../../data/productData";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="product-details-container">
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} className='product-image' />
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <p className="product-description">
                Description: {product.description || "No description available."}
            </p>
        </div>
    );
};

export default ProductDetails;
