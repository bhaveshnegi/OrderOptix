import React from 'react';
import products from "../../data/productData";
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = () => {
    return (
        <div className="products-container">
            <Link to={'/addproduct'}>
                <button className='add-button'>Add Product</button>
            </Link>
            <div className='product-contain'>
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Category: {product.category}</p>
                        <p>Stock: {product.stock}</p>
                        <Link to={`/products/${product.id}`}>
                            <button className="view-details-button">View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
