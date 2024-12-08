import React, { useState } from 'react';
import upload_area from '../../assests/upload_area.svg';
import "./AddProduct.css";

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Food and beverage",
        price: "",
        quantity: ""
    });

    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};
        if (!productDetails.name) newErrors.name = "Product title is required";
        if (!image) newErrors.image = "Product image is required";
        if (!productDetails.price || isNaN(productDetails.price) || productDetails.price <= 0)
            newErrors.price = "Valid price is required";
        if (!productDetails.quantity || isNaN(productDetails.quantity) || productDetails.quantity <= 0)
            newErrors.quantity = "Valid quantity is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const imagehandler = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            image: selectedFile.name, 
        }));
    };

    const changehandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const Add_product = async () => {
        if (!validateFields()) {
            alert("Please fix validation errors.");
            return;
        }
    
        console.log("Uploading file...");
        const responseData = {
            success: true,
            img_url: "https://via.placeholder.com/150", 
        };
    
        if (responseData.success) {
            const product = {
                ...productDetails,
                image: responseData.img_url,
            };
            console.log("Product data to be added:", product);
            alert("Product Added Successfully!");
    
            setProductDetails({
                name: "",
                image: "",
                category: "Food and beverage",
                price: "",
                quantity: ""
            });
            setImage(false); 
        } else {
            alert("Failed to Add Product");
        }
    };
    

    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input
                    value={productDetails.name}
                    onChange={changehandler}
                    type="text"
                    name="name"
                    placeholder='Type here'
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Quantity</p>
                    <input
                        value={productDetails.quantity}
                        onChange={changehandler}
                        type="text"
                        name="quantity"
                        placeholder='Type here'
                    />
                    {errors.quantity && <span className="error">{errors.quantity}</span>}
                </div>
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.price}
                        onChange={changehandler}
                        type="text"
                        name="price"
                        placeholder='Type here'
                    />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changehandler}
                    name='category'
                    className='addproductselector'
                >
                    <option value="Food and beverage">Food and beverage</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Hardware">Hardware</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        className='addproduct-thumnail-img'
                        alt=""
                    />
                </label>
                <input onChange={imagehandler} type="file" name="image" id="file-input" hidden />
                {errors.image && <span className="error">{errors.image}</span>}
            </div>
            <button onClick={Add_product} className='addproduct-btn'>Add</button>
        </div>
    );
};

export default AddProduct;
